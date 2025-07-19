import { Injectable } from '@angular/core';
import { HelloComponent } from '../hello/hello.component';
import * as i0 from "@angular/core";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvc2VydmljZXMvZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUkxRCxNQUFNLE9BQU8sY0FBYztJQUNqQiwwQkFBMEIsR0FHOUI7UUFDRixhQUFhLEVBQUU7WUFDYixLQUFLLEVBQUUsY0FBYztTQUN0QjtLQUNGLENBQUM7SUFFSyxtQkFBbUIsQ0FBQyxRQUFnQixFQUFFLE9BQWU7UUFDMUQsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDdEUsQ0FBQzt3R0FaVSxjQUFjOzRHQUFkLGNBQWMsY0FERCxNQUFNOzs0RkFDbkIsY0FBYztrQkFEMUIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlbGxvQ29tcG9uZW50IH0gZnJvbSAnLi4vaGVsbG8vaGVsbG8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSVBhZ2VXaXRoVGVtcGxhdGVDb21wb25lbnRGYWN0b3J5LCBJUGFnZVdpdGhUZW1wbGF0ZVdpZGdldCB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBGYWN0b3J5U2VydmljZSBpbXBsZW1lbnRzIElQYWdlV2l0aFRlbXBsYXRlQ29tcG9uZW50RmFjdG9yeSB7XHJcbiAgcHJpdmF0ZSBwYWdlV2l0aFRlbXBsYXRlV2lkZ2V0c01hcDogUmVjb3JkPFxyXG4gICAgc3RyaW5nLFxyXG4gICAgUmVjb3JkPHN0cmluZywgVHlwZTxhbnk+PlxyXG4gID4gPSB7XHJcbiAgICAnVmFkemltLkVjaG8nOiB7XHJcbiAgICAgICcxLjAnOiBIZWxsb0NvbXBvbmVudCxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGNyZWF0ZUNvbXBvbmVudFR5cGUod2lkZ2V0SWQ6IHN0cmluZywgdmVyc2lvbjogc3RyaW5nKTogVHlwZTxJUGFnZVdpdGhUZW1wbGF0ZVdpZGdldD4gfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnBhZ2VXaXRoVGVtcGxhdGVXaWRnZXRzTWFwW3dpZGdldElkXT8uW3ZlcnNpb25dIHx8IG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==