import { Component, ElementRef, OnInit } from '@angular/core';

declare var Hammer:any;
declare var R:any;

@Component({
    selector: 'bulb',
    template: `
<span class="bulb-component-container" style="margin-top: 200px;">
    <span class="bulb-component--light icon-light-bulb" [style.fontSize]="size + 'rem'"></span>
    <span class="bulb-component icon-light-bulb"
    [class.bulb-component--off]="perc === 0" 
    [style.fontSize]="size + 'rem'" 
    [style.height]="(100 - perc)*size/100 + 'rem'"></span>
</span>
`
})
export class BulbComponent implements OnInit {

    public perc = 50;
    public size = 20;

    constructor(private myElement:ElementRef) {

    }

    ngOnInit() {

        var mc = new Hammer(this.myElement.nativeElement.querySelector('.bulb-component--light'));

        mc.get('pan').set({direction: Hammer.DIRECTION_VERTICAL});

        mc.on('panleft panright panup pandown', (ev:any) => {
            const clientRects = ev.target.getClientRects()[0];
            const elSize = clientRects.bottom - clientRects.top;

            const perc = (clientRects.bottom - ev.changedPointers[0].clientY) / elSize * 100;

            this.perc = R.clamp(0, 100, ~~perc);
        });

        mc.on('tap press', () => {
            this.perc = this.perc > 0 ? 0 : 100;
        });

    }
}