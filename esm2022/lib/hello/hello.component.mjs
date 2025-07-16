import { Component, Input } from '@angular/core';
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';
import * as i0 from "@angular/core";
export class HelloComponent {
    name = '';
    widgetSettings = {
        elementId: '',
        widgetId: '',
        version: '',
        config: null
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvaGVsbG8vaGVsbG8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvaGVsbG8vaGVsbG8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsaURBQWlEO0FBQ2pELE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQzs7QUFjMUIsTUFBTSxPQUFPLGNBQWM7SUFDaEIsSUFBSSxHQUFXLEVBQUUsQ0FBQztJQUNsQixjQUFjLEdBQW1CO1FBQ3hDLFNBQVMsRUFBRSxFQUFFO1FBQ2IsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsRUFBRTtRQUNYLE1BQU0sRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUVGLFFBQVE7UUFDTixlQUFlO1FBQ2YsTUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ25DLGtDQUFrQztZQUNsQyxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO1NBQ2xDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQzthQUNwRCxJQUFJLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtZQUN0QiwrQ0FBK0M7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDcEIsbUJBQW1CO1lBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsK0JBQStCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzVDLEtBQUssRUFBRSxZQUFZO1lBQ25CLElBQUksRUFBRSxFQUFFO1lBQ1IsU0FBUyxFQUFFLHlEQUF5RDtZQUNwRSxNQUFNLEVBQUUsU0FBUztTQUNsQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWCxDQUFDO3dHQWxDVSxjQUFjOzRGQUFkLGNBQWMsNkdDbEIzQix3VUFRQTs7NEZEVWEsY0FBYztrQkFMMUIsU0FBUzsrQkFDRSxXQUFXOzhCQUtaLElBQUk7c0JBQVosS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBjb3JlIHZlcnNpb24gKyBuYXZpZ2F0aW9uLCBwYWdpbmF0aW9uIG1vZHVsZXM6XHJcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlci9tb2R1bGVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2lkZ2V0U2V0dGluZ3Mge1xyXG4gIGVsZW1lbnRJZDogc3RyaW5nO1xyXG4gIHdpZGdldElkOiBzdHJpbmc7XHJcbiAgdmVyc2lvbjogc3RyaW5nO1xyXG4gIGNvbmZpZzogb2JqZWN0IHwgbnVsbDtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItaGVsbG8nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWxsby5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVsbG9Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHdpZGdldFNldHRpbmdzOiBXaWRnZXRTZXR0aW5ncyA9IHtcclxuICAgIGVsZW1lbnRJZDogJycsXHJcbiAgICB3aWRnZXRJZDogJycsXHJcbiAgICB2ZXJzaW9uOiAnJyxcclxuICAgIGNvbmZpZzogbnVsbFxyXG4gIH07XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gaW5pdCBTd2lwZXI6XHJcbiAgICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyJywge1xyXG4gICAgICAvLyBjb25maWd1cmUgU3dpcGVyIHRvIHVzZSBtb2R1bGVzXHJcbiAgICAgIG1vZHVsZXM6IFtOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uXSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coc3dpcGVyKTtcclxuICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAvLyDQo9GB0L/QtdGI0L3Ri9C5INC+0YLQstC10YI6INCy0YvQstC10LTQtdC8INGB0L/QuNGB0L7QuiDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQodC/0LjRgdC+0Log0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lk6JywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgIC8vINCe0LHRgNCw0LHQvtGC0LrQsCDQvtGI0LjQsdC+0LpcclxuICAgICAgICBjb25zb2xlLmVycm9yKCfQn9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwINC/0YDQuCDQt9Cw0L/RgNC+0YHQtTonLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBvc3RIZWxsb01lc3NhZ2UoKSB7XHJcbiAgICAocGFyZW50IHx8IHdpbmRvdykucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBldmVudDogXCJwcm9tb3Rpb25zXCIsXHJcbiAgICAgIGRhdGE6IHt9LFxyXG4gICAgICByZXF1ZXN0SWQ6ICcwMC01NzVkNmI0OTVjMTM1NWVjNWJmNjZhZTQzMmI2MDFlZi0yYjBkN2M2ZTUxMzM5N2UyLTAxJyxcclxuICAgICAgYWN0aW9uOiAncHJvbWlzZSdcclxuICAgIH0pLCAnKicpO1xyXG4gIH1cclxufSIsIjxwPmhlbGxvIHdvcmtzISB7eyBuYW1lIH19PC9wPlxyXG48YnV0dG9uIChjbGljayk9XCJwb3N0SGVsbG9NZXNzYWdlKClcIj5TZW5kIG1lc3NhZ2U8L2J1dHRvbj5cclxuPGRpdj5cclxuICA8aDI+V2lkZ2V0OiB7eyB3aWRnZXRTZXR0aW5ncy53aWRnZXRJZCB9fTwvaDI+XHJcbiAgPHA+RWxlbWVudCBJRDoge3sgd2lkZ2V0U2V0dGluZ3MuZWxlbWVudElkIH19PC9wPlxyXG4gIDxwPlZlcnNpb246IHt7IHdpZGdldFNldHRpbmdzLnZlcnNpb24gfX08L3A+XHJcbiAgPHByZT5Db25maWc6IHt7IHdpZGdldFNldHRpbmdzLmNvbmZpZyB9fTwvcHJlPlxyXG48L2Rpdj5cclxuIl19