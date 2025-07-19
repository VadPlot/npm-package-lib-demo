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
        inlineStyle: '',
        title: '',
        widgetType: '',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvaGVsbG8vaGVsbG8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvaGVsbG8vaGVsbG8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsaURBQWlEO0FBQ2pELE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQzs7QUFRMUIsTUFBTSxPQUFPLGNBQWM7SUFDaEIsSUFBSSxHQUFXLEVBQUUsQ0FBQztJQUNsQixjQUFjLEdBQW9CO1FBQ3pDLFNBQVMsRUFBRSxFQUFFO1FBQ2IsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsRUFBRTtRQUNYLFdBQVcsRUFBRSxFQUFFO1FBQ2YsS0FBSyxFQUFFLEVBQUU7UUFDVCxVQUFVLEVBQUUsRUFBRTtRQUNkLE1BQU0sRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUVGLFFBQVE7UUFDTixlQUFlO1FBQ2YsTUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ25DLGtDQUFrQztZQUNsQyxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO1NBQ2xDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQzthQUNwRCxJQUFJLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtZQUN0QiwrQ0FBK0M7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDcEIsbUJBQW1CO1lBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsK0JBQStCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzVDLEtBQUssRUFBRSxZQUFZO1lBQ25CLElBQUksRUFBRSxFQUFFO1lBQ1IsU0FBUyxFQUFFLHlEQUF5RDtZQUNwRSxNQUFNLEVBQUUsU0FBUztTQUNsQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWCxDQUFDO3dHQXJDVSxjQUFjOzRGQUFkLGNBQWMsNkdDWjNCLHdVQVFBOzs0RkRJYSxjQUFjO2tCQUwxQixTQUFTOytCQUNFLFdBQVc7OEJBS1osSUFBSTtzQkFBWixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIGNvcmUgdmVyc2lvbiArIG5hdmlnYXRpb24sIHBhZ2luYXRpb24gbW9kdWxlczpcclxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyL21vZHVsZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBJV2lkZ2V0U2V0dGluZ3MgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1oZWxsbycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hlbGxvLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWxsb0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgd2lkZ2V0U2V0dGluZ3M6IElXaWRnZXRTZXR0aW5ncyA9IHtcclxuICAgIGVsZW1lbnRJZDogJycsXHJcbiAgICB3aWRnZXRJZDogJycsXHJcbiAgICB2ZXJzaW9uOiAnJyxcclxuICAgIGlubGluZVN0eWxlOiAnJyxcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIHdpZGdldFR5cGU6ICcnLFxyXG4gICAgY29uZmlnOiBudWxsLFxyXG4gIH07XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gaW5pdCBTd2lwZXI6XHJcbiAgICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyJywge1xyXG4gICAgICAvLyBjb25maWd1cmUgU3dpcGVyIHRvIHVzZSBtb2R1bGVzXHJcbiAgICAgIG1vZHVsZXM6IFtOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uXSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coc3dpcGVyKTtcclxuICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAvLyDQo9GB0L/QtdGI0L3Ri9C5INC+0YLQstC10YI6INCy0YvQstC10LTQtdC8INGB0L/QuNGB0L7QuiDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQodC/0LjRgdC+0Log0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lk6JywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgIC8vINCe0LHRgNCw0LHQvtGC0LrQsCDQvtGI0LjQsdC+0LpcclxuICAgICAgICBjb25zb2xlLmVycm9yKCfQn9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwINC/0YDQuCDQt9Cw0L/RgNC+0YHQtTonLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBvc3RIZWxsb01lc3NhZ2UoKSB7XHJcbiAgICAocGFyZW50IHx8IHdpbmRvdykucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBldmVudDogXCJwcm9tb3Rpb25zXCIsXHJcbiAgICAgIGRhdGE6IHt9LFxyXG4gICAgICByZXF1ZXN0SWQ6ICcwMC01NzVkNmI0OTVjMTM1NWVjNWJmNjZhZTQzMmI2MDFlZi0yYjBkN2M2ZTUxMzM5N2UyLTAxJyxcclxuICAgICAgYWN0aW9uOiAncHJvbWlzZSdcclxuICAgIH0pLCAnKicpO1xyXG4gIH1cclxufSIsIjxwPmhlbGxvIHdvcmtzISB7eyBuYW1lIH19PC9wPlxyXG48YnV0dG9uIChjbGljayk9XCJwb3N0SGVsbG9NZXNzYWdlKClcIj5TZW5kIG1lc3NhZ2U8L2J1dHRvbj5cclxuPGRpdj5cclxuICA8aDI+V2lkZ2V0OiB7eyB3aWRnZXRTZXR0aW5ncy53aWRnZXRJZCB9fTwvaDI+XHJcbiAgPHA+RWxlbWVudCBJRDoge3sgd2lkZ2V0U2V0dGluZ3MuZWxlbWVudElkIH19PC9wPlxyXG4gIDxwPlZlcnNpb246IHt7IHdpZGdldFNldHRpbmdzLnZlcnNpb24gfX08L3A+XHJcbiAgPHByZT5Db25maWc6IHt7IHdpZGdldFNldHRpbmdzLmNvbmZpZyB9fTwvcHJlPlxyXG48L2Rpdj5cclxuIl19