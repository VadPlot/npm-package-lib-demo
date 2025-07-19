import { Injectable } from '@angular/core';
import { HelloComponent } from '../hello/hello.component';
import * as i0 from "@angular/core";
export var WidgetType;
(function (WidgetType) {
    WidgetType["RESP"] = "RESP";
    WidgetType["WD"] = "WD";
    WidgetType["VADTEST"] = "VadzimTest";
})(WidgetType || (WidgetType = {}));
export class FactoryService {
    pageWithTemplateWidgetsMap = {
        'Vadzim.Echo': {
            '1.0': HelloComponent,
        },
    };
    createComponentType(widgetId, version) {
        return this.pageWithTemplateWidgetsMap[widgetId]?.[version] || null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FactoryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FactoryService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FactoryService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvc2VydmljZXMvZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUcxRCxNQUFNLENBQU4sSUFBWSxVQUlYO0FBSkQsV0FBWSxVQUFVO0lBQ3BCLDJCQUFhLENBQUE7SUFDYix1QkFBUyxDQUFBO0lBQ1Qsb0NBQXNCLENBQUE7QUFDeEIsQ0FBQyxFQUpXLFVBQVUsS0FBVixVQUFVLFFBSXJCO0FBR0QsTUFBTSxPQUFPLGNBQWM7SUFDakIsMEJBQTBCLEdBRzlCO1FBQ0YsYUFBYSxFQUFFO1lBQ2IsS0FBSyxFQUFFLGNBQWM7U0FDdEI7S0FDRixDQUFDO0lBRUssbUJBQW1CLENBQUMsUUFBZ0IsRUFBRSxPQUFlO1FBQzFELE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3RFLENBQUM7d0dBWlUsY0FBYzs0R0FBZCxjQUFjLGNBREQsTUFBTTs7NEZBQ25CLGNBQWM7a0JBRDFCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWxsb0NvbXBvbmVudCB9IGZyb20gJy4uL2hlbGxvL2hlbGxvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElQYWdlV2l0aFRlbXBsYXRlQ29tcG9uZW50RmFjdG9yeSwgSVBhZ2VXaXRoVGVtcGxhdGVXaWRnZXQgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZW51bSBXaWRnZXRUeXBlIHtcclxuICBSRVNQID0gJ1JFU1AnLFxyXG4gIFdEID0gJ1dEJyxcclxuICBWQURURVNUID0gJ1ZhZHppbVRlc3QnLFxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgRmFjdG9yeVNlcnZpY2UgaW1wbGVtZW50cyBJUGFnZVdpdGhUZW1wbGF0ZUNvbXBvbmVudEZhY3Rvcnkge1xyXG4gIHByaXZhdGUgcGFnZVdpdGhUZW1wbGF0ZVdpZGdldHNNYXA6IFJlY29yZDxcclxuICAgIHN0cmluZyxcclxuICAgIFJlY29yZDxzdHJpbmcsIFR5cGU8YW55Pj5cclxuICA+ID0ge1xyXG4gICAgJ1ZhZHppbS5FY2hvJzoge1xyXG4gICAgICAnMS4wJzogSGVsbG9Db21wb25lbnQsXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBjcmVhdGVDb21wb25lbnRUeXBlKHdpZGdldElkOiBzdHJpbmcsIHZlcnNpb246IHN0cmluZyk6IFR5cGU8SVBhZ2VXaXRoVGVtcGxhdGVXaWRnZXQ+IHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWdlV2l0aFRlbXBsYXRlV2lkZ2V0c01hcFt3aWRnZXRJZF0/Llt2ZXJzaW9uXSB8fCBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=