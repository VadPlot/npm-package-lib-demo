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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZVdpdGhUZW1wbGF0ZUNvbXBvbmVudEZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9teS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9wYWdlV2l0aFRlbXBsYXRlQ29tcG9uZW50RmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFJMUQsTUFBTSxPQUFPLGdDQUFnQztJQUNuQywwQkFBMEIsR0FHOUI7UUFDRixhQUFhLEVBQUU7WUFDYixLQUFLLEVBQUUsY0FBYztTQUN0QjtLQUNGLENBQUM7SUFFSyxtQkFBbUIsQ0FBQyxRQUFnQixFQUFFLE9BQWU7UUFDMUQsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDdEUsQ0FBQzt3R0FaVSxnQ0FBZ0M7NEdBQWhDLGdDQUFnQyxjQURuQixNQUFNOzs0RkFDbkIsZ0NBQWdDO2tCQUQ1QyxVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVsbG9Db21wb25lbnQgfSBmcm9tICcuLi9oZWxsby9oZWxsby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJUGFnZVdpdGhUZW1wbGF0ZUNvbXBvbmVudEZhY3RvcnksIElQYWdlV2l0aFRlbXBsYXRlV2lkZ2V0IH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VXaXRoVGVtcGxhdGVDb21wb25lbnRGYWN0b3J5IGltcGxlbWVudHMgSVBhZ2VXaXRoVGVtcGxhdGVDb21wb25lbnRGYWN0b3J5IHtcclxuICBwcml2YXRlIHBhZ2VXaXRoVGVtcGxhdGVXaWRnZXRzTWFwOiBSZWNvcmQ8XHJcbiAgICBzdHJpbmcsXHJcbiAgICBSZWNvcmQ8c3RyaW5nLCBUeXBlPGFueT4+XHJcbiAgPiA9IHtcclxuICAgICdWYWR6aW0uRWNobyc6IHtcclxuICAgICAgJzEuMCc6IEhlbGxvQ29tcG9uZW50LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBwdWJsaWMgY3JlYXRlQ29tcG9uZW50VHlwZSh3aWRnZXRJZDogc3RyaW5nLCB2ZXJzaW9uOiBzdHJpbmcpOiBUeXBlPElQYWdlV2l0aFRlbXBsYXRlV2lkZ2V0PiB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMucGFnZVdpdGhUZW1wbGF0ZVdpZGdldHNNYXBbd2lkZ2V0SWRdPy5bdmVyc2lvbl0gfHwgbnVsbDtcclxuICB9XHJcbn1cclxuIl19