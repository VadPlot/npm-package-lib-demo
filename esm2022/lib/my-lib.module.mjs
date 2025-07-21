import { NgModule } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { PageWithTemplateComponentFactory } from './services/factory.service';
import * as i0 from "@angular/core";
export class MyLibModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MyLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: MyLibModule, declarations: [HelloComponent], exports: [HelloComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MyLibModule, providers: [PageWithTemplateComponentFactory] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MyLibModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [PageWithTemplateComponentFactory],
                    declarations: [HelloComponent],
                    imports: [],
                    exports: [HelloComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYi9zcmMvbGliL215LWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBUTlFLE1BQU0sT0FBTyxXQUFXO3dHQUFYLFdBQVc7eUdBQVgsV0FBVyxpQkFKUCxjQUFjLGFBRW5CLGNBQWM7eUdBRWIsV0FBVyxhQUxYLENBQUMsZ0NBQWdDLENBQUM7OzRGQUtsQyxXQUFXO2tCQU52QixRQUFRO21CQUFDO29CQUNSLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO29CQUM3QyxZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBQzlCLE9BQU8sRUFBRSxFQUFFO29CQUNYLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWxsb0NvbXBvbmVudCB9IGZyb20gJy4vaGVsbG8vaGVsbG8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZVdpdGhUZW1wbGF0ZUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tICcuL3NlcnZpY2VzL2ZhY3Rvcnkuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIHByb3ZpZGVyczogW1BhZ2VXaXRoVGVtcGxhdGVDb21wb25lbnRGYWN0b3J5XSxcclxuICBkZWNsYXJhdGlvbnM6IFtIZWxsb0NvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW10sXHJcbiAgZXhwb3J0czogW0hlbGxvQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlMaWJNb2R1bGUge31cclxuIl19