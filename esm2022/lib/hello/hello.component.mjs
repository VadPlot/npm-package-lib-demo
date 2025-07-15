import { Component, Input } from '@angular/core';
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';
import * as i0 from "@angular/core";
export class HelloComponent {
    name = '';
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: HelloComponent, selector: "lib-hello", inputs: { name: "name" }, ngImport: i0, template: "<p>hello works! {{ name }}</p>\r\n<button (click)=\"postHelloMessage()\">Send message</button>" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: HelloComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-hello', template: "<p>hello works! {{ name }}</p>\r\n<button (click)=\"postHelloMessage()\">Send message</button>" }]
        }], propDecorators: { name: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvaGVsbG8vaGVsbG8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvaGVsbG8vaGVsbG8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsaURBQWlEO0FBQ2pELE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQzs7QUFPMUIsTUFBTSxPQUFPLGNBQWM7SUFDaEIsSUFBSSxHQUFXLEVBQUUsQ0FBQztJQUUzQixRQUFRO1FBQ04sZUFBZTtRQUNmLE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUNuQyxrQ0FBa0M7WUFDbEMsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztTQUNsQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUM7YUFDcEQsSUFBSSxDQUFDLENBQUMsUUFBYSxFQUFFLEVBQUU7WUFDdEIsK0NBQStDO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3BCLG1CQUFtQjtZQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLCtCQUErQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGdCQUFnQjtRQUNyQixDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUM1QyxLQUFLLEVBQUUsWUFBWTtZQUNuQixJQUFJLEVBQUUsRUFBRTtZQUNSLFNBQVMsRUFBRSx5REFBeUQ7WUFDcEUsTUFBTSxFQUFFLFNBQVM7U0FDbEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1gsQ0FBQzt3R0E1QlUsY0FBYzs0RkFBZCxjQUFjLDJFQ1gzQixnR0FDMEQ7OzRGRFU3QyxjQUFjO2tCQUwxQixTQUFTOytCQUNFLFdBQVc7OEJBS1osSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBjb3JlIHZlcnNpb24gKyBuYXZpZ2F0aW9uLCBwYWdpbmF0aW9uIG1vZHVsZXM6XHJcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlci9tb2R1bGVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWhlbGxvJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaGVsbG8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhlbGxvQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBpbml0IFN3aXBlcjpcclxuICAgIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XHJcbiAgICAgIC8vIGNvbmZpZ3VyZSBTd2lwZXIgdG8gdXNlIG1vZHVsZXNcclxuICAgICAgbW9kdWxlczogW05hdmlnYXRpb24sIFBhZ2luYXRpb25dLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhzd2lwZXIpO1xyXG4gICAgYXhpb3MuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKVxyXG4gICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIC8vINCj0YHQv9C10YjQvdGL0Lkg0L7RgtCy0LXRgjog0LLRi9Cy0LXQtNC10Lwg0YHQv9C40YHQvtC6INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9Ch0L/QuNGB0L7QuiDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuTonLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgLy8g0J7QsdGA0LDQsdC+0YLQutCwINC+0YjQuNCx0L7QulxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAg0L/RgNC4INC30LDQv9GA0L7RgdC1OicsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcG9zdEhlbGxvTWVzc2FnZSgpIHtcclxuICAgIChwYXJlbnQgfHwgd2luZG93KS5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIGV2ZW50OiBcInByb21vdGlvbnNcIixcclxuICAgICAgZGF0YToge30sXHJcbiAgICAgIHJlcXVlc3RJZDogJzAwLTU3NWQ2YjQ5NWMxMzU1ZWM1YmY2NmFlNDMyYjYwMWVmLTJiMGQ3YzZlNTEzMzk3ZTItMDEnLFxyXG4gICAgICBhY3Rpb246ICdwcm9taXNlJ1xyXG4gICAgfSksICcqJyk7XHJcbiAgfVxyXG59IiwiPHA+aGVsbG8gd29ya3MhIHt7IG5hbWUgfX08L3A+XHJcbjxidXR0b24gKGNsaWNrKT1cInBvc3RIZWxsb01lc3NhZ2UoKVwiPlNlbmQgbWVzc2FnZTwvYnV0dG9uPiJdfQ==