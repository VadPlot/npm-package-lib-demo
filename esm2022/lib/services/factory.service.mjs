import { Injectable } from '@angular/core';
import { HelloComponent } from '../hello/hello.component';
import * as i0 from "@angular/core";
export class PageWithTemplateComponentFactory {
    pageWithTemplateWidgetsMap = {
        'Vadzim.Echo': {
            '1.0': HelloComponent,
        },
    };
    createComponentType(widgetId, version) {
        return this.pageWithTemplateWidgetsMap[widgetId]?.[version] || null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: PageWithTemplateComponentFactory, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: PageWithTemplateComponentFactory, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: PageWithTemplateComponentFactory, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvc2VydmljZXMvZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUkxRCxNQUFNLE9BQU8sZ0NBQWdDO0lBQ25DLDBCQUEwQixHQUc5QjtRQUNGLGFBQWEsRUFBRTtZQUNiLEtBQUssRUFBRSxjQUFjO1NBQ3RCO0tBQ0YsQ0FBQztJQUVLLG1CQUFtQixDQUFDLFFBQWdCLEVBQUUsT0FBZTtRQUMxRCxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQztJQUN0RSxDQUFDO3dHQVpVLGdDQUFnQzs0R0FBaEMsZ0NBQWdDLGNBRG5CLE1BQU07OzRGQUNuQixnQ0FBZ0M7a0JBRDVDLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWxsb0NvbXBvbmVudCB9IGZyb20gJy4uL2hlbGxvL2hlbGxvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElQYWdlV2l0aFRlbXBsYXRlQ29tcG9uZW50RmFjdG9yeSwgSVBhZ2VXaXRoVGVtcGxhdGVXaWRnZXQgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgUGFnZVdpdGhUZW1wbGF0ZUNvbXBvbmVudEZhY3RvcnkgaW1wbGVtZW50cyBJUGFnZVdpdGhUZW1wbGF0ZUNvbXBvbmVudEZhY3Rvcnkge1xyXG4gIHByaXZhdGUgcGFnZVdpdGhUZW1wbGF0ZVdpZGdldHNNYXA6IFJlY29yZDxcclxuICAgIHN0cmluZyxcclxuICAgIFJlY29yZDxzdHJpbmcsIFR5cGU8YW55Pj5cclxuICA+ID0ge1xyXG4gICAgJ1ZhZHppbS5FY2hvJzoge1xyXG4gICAgICAnMS4wJzogSGVsbG9Db21wb25lbnQsXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBjcmVhdGVDb21wb25lbnRUeXBlKHdpZGdldElkOiBzdHJpbmcsIHZlcnNpb246IHN0cmluZyk6IFR5cGU8SVBhZ2VXaXRoVGVtcGxhdGVXaWRnZXQ+IHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWdlV2l0aFRlbXBsYXRlV2lkZ2V0c01hcFt3aWRnZXRJZF0/Llt2ZXJzaW9uXSB8fCBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=