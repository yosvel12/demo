import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CustomizerSettingsComponent } from '../../customizer-settings/customizer-settings.component';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-crm-layout',
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive, CustomizerSettingsComponent],
    templateUrl: './crm-layout.component.html',
    styleUrl: './crm-layout.component.scss'
})
export class CrmLayoutComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}
