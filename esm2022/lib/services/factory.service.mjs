import { Injectable } from '@angular/core';
import { HelloComponent } from '../hello/hello.component';
import * as i0 from "@angular/core";
export class FactoryService {
    PAGE_WITH_TEMPLATE_WIDGETS = {
        'Vadzim.Echo': {
            '1.0': HelloComponent,
        },
    };
    getWidgetComponentType(widgetSettings) {
        return this.PAGE_WITH_TEMPLATE_WIDGETS[widgetSettings.widgetId]?.[widgetSettings.version];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FactoryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FactoryService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FactoryService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvc2VydmljZXMvZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBa0IsTUFBTSwwQkFBMEIsQ0FBQzs7QUFHMUUsTUFBTSxPQUFPLGNBQWM7SUFDakIsMEJBQTBCLEdBRzlCO1FBQ0YsYUFBYSxFQUFFO1lBQ2IsS0FBSyxFQUFFLGNBQWM7U0FDdEI7S0FDRixDQUFDO0lBR0ssc0JBQXNCLENBQUMsY0FBOEI7UUFDMUQsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVGLENBQUM7d0dBYlUsY0FBYzs0R0FBZCxjQUFjLGNBREQsTUFBTTs7NEZBQ25CLGNBQWM7a0JBRDFCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWxsb0NvbXBvbmVudCwgV2lkZ2V0U2V0dGluZ3MgfSBmcm9tICcuLi9oZWxsby9oZWxsby5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEZhY3RvcnlTZXJ2aWNlIHtcclxuICBwcml2YXRlIFBBR0VfV0lUSF9URU1QTEFURV9XSURHRVRTOiBSZWNvcmQ8XHJcbiAgICBzdHJpbmcsXHJcbiAgICBSZWNvcmQ8c3RyaW5nLCBUeXBlPGFueT4+XHJcbiAgPiA9IHtcclxuICAgICdWYWR6aW0uRWNobyc6IHtcclxuICAgICAgJzEuMCc6IEhlbGxvQ29tcG9uZW50LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuXHJcbiAgcHVibGljIGdldFdpZGdldENvbXBvbmVudFR5cGUod2lkZ2V0U2V0dGluZ3M6IFdpZGdldFNldHRpbmdzKTogVHlwZTxhbnk+IHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5QQUdFX1dJVEhfVEVNUExBVEVfV0lER0VUU1t3aWRnZXRTZXR0aW5ncy53aWRnZXRJZF0/Llt3aWRnZXRTZXR0aW5ncy52ZXJzaW9uXTtcclxuICB9XHJcbn1cclxuIl19