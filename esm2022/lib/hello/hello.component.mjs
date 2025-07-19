import { Component, Input } from '@angular/core';
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';
import { WidgetType } from '../services/factory.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvaGVsbG8vaGVsbG8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvaGVsbG8vaGVsbG8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsaURBQWlEO0FBQ2pELE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUUxQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBT3pELE1BQU0sT0FBTyxjQUFjO0lBQ2hCLElBQUksR0FBVyxFQUFFLENBQUM7SUFDbEIsY0FBYyxHQUFvQjtRQUN6QyxTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLEVBQUU7UUFDWCxXQUFXLEVBQUUsRUFBRTtRQUNmLEtBQUssRUFBRSxFQUFFO1FBQ1QsVUFBVSxFQUFFLFVBQVUsQ0FBQyxJQUFJO1FBQzNCLE1BQU0sRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUVGLFFBQVE7UUFDTixlQUFlO1FBQ2YsTUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ25DLGtDQUFrQztZQUNsQyxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO1NBQ2xDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQzthQUNwRCxJQUFJLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtZQUN0QiwrQ0FBK0M7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDcEIsbUJBQW1CO1lBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsK0JBQStCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzVDLEtBQUssRUFBRSxZQUFZO1lBQ25CLElBQUksRUFBRSxFQUFFO1lBQ1IsU0FBUyxFQUFFLHlEQUF5RDtZQUNwRSxNQUFNLEVBQUUsU0FBUztTQUNsQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWCxDQUFDO3dHQXJDVSxjQUFjOzRGQUFkLGNBQWMsNkdDYjNCLHdVQVFBOzs0RkRLYSxjQUFjO2tCQUwxQixTQUFTOytCQUNFLFdBQVc7OEJBS1osSUFBSTtzQkFBWixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIGNvcmUgdmVyc2lvbiArIG5hdmlnYXRpb24sIHBhZ2luYXRpb24gbW9kdWxlczpcclxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyL21vZHVsZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBJV2lkZ2V0U2V0dGluZ3MgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IFdpZGdldFR5cGUgfSBmcm9tICcuLi9zZXJ2aWNlcy9mYWN0b3J5LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItaGVsbG8nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWxsby5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVsbG9Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHdpZGdldFNldHRpbmdzOiBJV2lkZ2V0U2V0dGluZ3MgPSB7XHJcbiAgICBlbGVtZW50SWQ6ICcnLFxyXG4gICAgd2lkZ2V0SWQ6ICcnLFxyXG4gICAgdmVyc2lvbjogJycsXHJcbiAgICBpbmxpbmVTdHlsZTogJycsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICB3aWRnZXRUeXBlOiBXaWRnZXRUeXBlLlJFU1AsXHJcbiAgICBjb25maWc6IG51bGwsXHJcbiAgfTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBpbml0IFN3aXBlcjpcclxuICAgIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XHJcbiAgICAgIC8vIGNvbmZpZ3VyZSBTd2lwZXIgdG8gdXNlIG1vZHVsZXNcclxuICAgICAgbW9kdWxlczogW05hdmlnYXRpb24sIFBhZ2luYXRpb25dLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhzd2lwZXIpO1xyXG4gICAgYXhpb3MuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKVxyXG4gICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIC8vINCj0YHQv9C10YjQvdGL0Lkg0L7RgtCy0LXRgjog0LLRi9Cy0LXQtNC10Lwg0YHQv9C40YHQvtC6INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9Ch0L/QuNGB0L7QuiDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuTonLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgLy8g0J7QsdGA0LDQsdC+0YLQutCwINC+0YjQuNCx0L7QulxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAg0L/RgNC4INC30LDQv9GA0L7RgdC1OicsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcG9zdEhlbGxvTWVzc2FnZSgpIHtcclxuICAgIChwYXJlbnQgfHwgd2luZG93KS5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIGV2ZW50OiBcInByb21vdGlvbnNcIixcclxuICAgICAgZGF0YToge30sXHJcbiAgICAgIHJlcXVlc3RJZDogJzAwLTU3NWQ2YjQ5NWMxMzU1ZWM1YmY2NmFlNDMyYjYwMWVmLTJiMGQ3YzZlNTEzMzk3ZTItMDEnLFxyXG4gICAgICBhY3Rpb246ICdwcm9taXNlJ1xyXG4gICAgfSksICcqJyk7XHJcbiAgfVxyXG59IiwiPHA+aGVsbG8gd29ya3MhIHt7IG5hbWUgfX08L3A+XHJcbjxidXR0b24gKGNsaWNrKT1cInBvc3RIZWxsb01lc3NhZ2UoKVwiPlNlbmQgbWVzc2FnZTwvYnV0dG9uPlxyXG48ZGl2PlxyXG4gIDxoMj5XaWRnZXQ6IHt7IHdpZGdldFNldHRpbmdzLndpZGdldElkIH19PC9oMj5cclxuICA8cD5FbGVtZW50IElEOiB7eyB3aWRnZXRTZXR0aW5ncy5lbGVtZW50SWQgfX08L3A+XHJcbiAgPHA+VmVyc2lvbjoge3sgd2lkZ2V0U2V0dGluZ3MudmVyc2lvbiB9fTwvcD5cclxuICA8cHJlPkNvbmZpZzoge3sgd2lkZ2V0U2V0dGluZ3MuY29uZmlnIH19PC9wcmU+XHJcbjwvZGl2PlxyXG4iXX0=