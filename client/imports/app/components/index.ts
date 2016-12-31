import {Component} from '@angular/core';

export * from './bulb'

@Component({
    template: `
<section class="main_content main_content--blue main_content--100">
    <div style="text-align: center;">
        <bulb></bulb>
    </div>
</section>
`
})
export class DashboardComponent {
    constructor() {
    }
}

@Component({
    template: `
<section class="main_content main_content--blue main_content--30">
    Settings
</section>

<section class="main_content main_content--70">
    <ul>
        <li>
            <span class="icon-weather"></span>
            <span class="icon-weather2"></span>
            <span class="icon-weather3"></span>
            <span class="icon-weather4"></span>
            <span class="icon-weather5"></span>
        </li>
    </ul>
    <demo></demo>
</section>`
})
export class SettingsComponent {
    constructor() {
    }
}
