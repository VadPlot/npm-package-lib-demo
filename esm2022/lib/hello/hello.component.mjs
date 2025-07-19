import { Component, Input } from '@angular/core';
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';
import { WidgetType } from '../services/widgetType';
import * as i0 from "@angular/core";
export class HelloComponent {
    name = '';
    widgetSettings = {
        elementId: '',
        widgetId: '',
        version: '',
        inlineStyle: '',
        title: '',
        widgetType: WidgetType.RESP,
        config: null,
    };
    ngOnInit() {
        // init Swiper:
        const swiper = new Swiper('.swiper', {
            // configure Swiper to use modules
            modules: [Navigation, Pagination],
        });
        console.log(swiper);
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
            // Успешный ответ: выведем список пользователей
            console.log('Список пользователей:', response.data);
        })
            .catch((error) => {
            // Обработка ошибок
            console.error('Произошла ошибка при запросе:', error);
        });
    }
    postHelloMessage() {
        (parent || window).postMessage(JSON.stringify({
            event: "promotions",
            data: {},
            requestId: '00-575d6b495c1355ec5bf66ae432b601ef-2b0d7c6e513397e2-01',
            action: 'promise'
        }), '*');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: HelloComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: HelloComponent, selector: "lib-hello", inputs: { name: "name", widgetSettings: "widgetSettings" }, ngImport: i0, template: "<p>hello works! {{ name }}</p>\r\n<button (click)=\"postHelloMessage()\">Send message</button>\r\n<div>\r\n  <h2>Widget: {{ widgetSettings.widgetId }}</h2>\r\n  <p>Element ID: {{ widgetSettings.elementId }}</p>\r\n  <p>Version: {{ widgetSettings.version }}</p>\r\n  <pre>Config: {{ widgetSettings.config }}</pre>\r\n</div>\r\n" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: HelloComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-hello', template: "<p>hello works! {{ name }}</p>\r\n<button (click)=\"postHelloMessage()\">Send message</button>\r\n<div>\r\n  <h2>Widget: {{ widgetSettings.widgetId }}</h2>\r\n  <p>Element ID: {{ widgetSettings.elementId }}</p>\r\n  <p>Version: {{ widgetSettings.version }}</p>\r\n  <pre>Config: {{ widgetSettings.config }}</pre>\r\n</div>\r\n" }]
        }], propDecorators: { name: [{
                type: Input
            }], widgetSettings: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvaGVsbG8vaGVsbG8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvaGVsbG8vaGVsbG8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsaURBQWlEO0FBQ2pELE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUUxQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBUXBELE1BQU0sT0FBTyxjQUFjO0lBQ2hCLElBQUksR0FBVyxFQUFFLENBQUM7SUFDbEIsY0FBYyxHQUFvQjtRQUN6QyxTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLEVBQUU7UUFDWCxXQUFXLEVBQUUsRUFBRTtRQUNmLEtBQUssRUFBRSxFQUFFO1FBQ1QsVUFBVSxFQUFFLFVBQVUsQ0FBQyxJQUFJO1FBQzNCLE1BQU0sRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUVGLFFBQVE7UUFDTixlQUFlO1FBQ2YsTUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ25DLGtDQUFrQztZQUNsQyxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO1NBQ2xDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQzthQUNwRCxJQUFJLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtZQUN0QiwrQ0FBK0M7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDcEIsbUJBQW1CO1lBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsK0JBQStCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzVDLEtBQUssRUFBRSxZQUFZO1lBQ25CLElBQUksRUFBRSxFQUFFO1lBQ1IsU0FBUyxFQUFFLHlEQUF5RDtZQUNwRSxNQUFNLEVBQUUsU0FBUztTQUNsQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWCxDQUFDO3dHQXJDVSxjQUFjOzRGQUFkLGNBQWMsNkdDZDNCLHdVQVFBOzs0RkRNYSxjQUFjO2tCQUwxQixTQUFTOytCQUNFLFdBQVc7OEJBS1osSUFBSTtzQkFBWixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIGNvcmUgdmVyc2lvbiArIG5hdmlnYXRpb24sIHBhZ2luYXRpb24gbW9kdWxlczpcclxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyL21vZHVsZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBJV2lkZ2V0U2V0dGluZ3MgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IFdpZGdldFR5cGUgfSBmcm9tICcuLi9zZXJ2aWNlcy93aWRnZXRUeXBlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1oZWxsbycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hlbGxvLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWxsb0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgd2lkZ2V0U2V0dGluZ3M6IElXaWRnZXRTZXR0aW5ncyA9IHtcclxuICAgIGVsZW1lbnRJZDogJycsXHJcbiAgICB3aWRnZXRJZDogJycsXHJcbiAgICB2ZXJzaW9uOiAnJyxcclxuICAgIGlubGluZVN0eWxlOiAnJyxcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIHdpZGdldFR5cGU6IFdpZGdldFR5cGUuUkVTUCxcclxuICAgIGNvbmZpZzogbnVsbCxcclxuICB9O1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGluaXQgU3dpcGVyOlxyXG4gICAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlcicsIHtcclxuICAgICAgLy8gY29uZmlndXJlIFN3aXBlciB0byB1c2UgbW9kdWxlc1xyXG4gICAgICBtb2R1bGVzOiBbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbl0sXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHN3aXBlcik7XHJcbiAgICBheGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgLy8g0KPRgdC/0LXRiNC90YvQuSDQvtGC0LLQtdGCOiDQstGL0LLQtdC00LXQvCDRgdC/0LjRgdC+0Log0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcclxuICAgICAgICBjb25zb2xlLmxvZygn0KHQv9C40YHQvtC6INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5OicsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAvLyDQntCx0YDQsNCx0L7RgtC60LAg0L7RiNC40LHQvtC6XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign0J/RgNC+0LjQt9C+0YjQu9CwINC+0YjQuNCx0LrQsCDQv9GA0Lgg0LfQsNC/0YDQvtGB0LU6JywgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwb3N0SGVsbG9NZXNzYWdlKCkge1xyXG4gICAgKHBhcmVudCB8fCB3aW5kb3cpLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgZXZlbnQ6IFwicHJvbW90aW9uc1wiLFxyXG4gICAgICBkYXRhOiB7fSxcclxuICAgICAgcmVxdWVzdElkOiAnMDAtNTc1ZDZiNDk1YzEzNTVlYzViZjY2YWU0MzJiNjAxZWYtMmIwZDdjNmU1MTMzOTdlMi0wMScsXHJcbiAgICAgIGFjdGlvbjogJ3Byb21pc2UnXHJcbiAgICB9KSwgJyonKTtcclxuICB9XHJcbn0iLCI8cD5oZWxsbyB3b3JrcyEge3sgbmFtZSB9fTwvcD5cclxuPGJ1dHRvbiAoY2xpY2spPVwicG9zdEhlbGxvTWVzc2FnZSgpXCI+U2VuZCBtZXNzYWdlPC9idXR0b24+XHJcbjxkaXY+XHJcbiAgPGgyPldpZGdldDoge3sgd2lkZ2V0U2V0dGluZ3Mud2lkZ2V0SWQgfX08L2gyPlxyXG4gIDxwPkVsZW1lbnQgSUQ6IHt7IHdpZGdldFNldHRpbmdzLmVsZW1lbnRJZCB9fTwvcD5cclxuICA8cD5WZXJzaW9uOiB7eyB3aWRnZXRTZXR0aW5ncy52ZXJzaW9uIH19PC9wPlxyXG4gIDxwcmU+Q29uZmlnOiB7eyB3aWRnZXRTZXR0aW5ncy5jb25maWcgfX08L3ByZT5cclxuPC9kaXY+XHJcbiJdfQ==