import { NgModule } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { FactoryService } from './services/factory.service';
import * as i0 from "@angular/core";
export class MyLibModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MyLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: MyLibModule, declarations: [HelloComponent], exports: [HelloComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MyLibModule, providers: [FactoryService] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MyLibModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [FactoryService],
                    declarations: [HelloComponent],
                    imports: [],
                    exports: [HelloComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYi9zcmMvbGliL215LWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQVE1RCxNQUFNLE9BQU8sV0FBVzt3R0FBWCxXQUFXO3lHQUFYLFdBQVcsaUJBSlAsY0FBYyxhQUVuQixjQUFjO3lHQUViLFdBQVcsYUFMWCxDQUFDLGNBQWMsQ0FBQzs7NEZBS2hCLFdBQVc7a0JBTnZCLFFBQVE7bUJBQUM7b0JBQ1IsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUMzQixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBQzlCLE9BQU8sRUFBRSxFQUFFO29CQUNYLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWxsb0NvbXBvbmVudCB9IGZyb20gJy4vaGVsbG8vaGVsbG8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2ZhY3Rvcnkuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIHByb3ZpZGVyczogW0ZhY3RvcnlTZXJ2aWNlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtIZWxsb0NvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW10sXHJcbiAgZXhwb3J0czogW0hlbGxvQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlMaWJNb2R1bGUge31cclxuIl19