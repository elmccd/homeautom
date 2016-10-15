import { Component } from '@angular/core';

@Component({
    template: `
<section class="main_content main_content--blue main_content--70">
    Main content blue
</section>

<section class="main_content main_content--30">
    Main content
</section>`
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
    Settings
</section>`
})
export class SettingsComponent {
    constructor() {
    }
}
