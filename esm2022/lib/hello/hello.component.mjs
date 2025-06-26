import { Component, Input } from '@angular/core';
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvaGVsbG8vaGVsbG8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvaGVsbG8vaGVsbG8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsaURBQWlEO0FBQ2pELE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELG1DQUFtQztBQUNuQyxPQUFPLFlBQVksQ0FBQztBQUNwQixPQUFPLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sdUJBQXVCLENBQUM7O0FBUy9CLE1BQU0sT0FBTyxjQUFjO0lBQ2hCLElBQUksR0FBVyxFQUFFLENBQUM7SUFFM0IsUUFBUTtRQUNOLGVBQWU7UUFDZixNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDbkMsa0NBQWtDO1lBQ2xDLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7U0FDbEMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzVDLEtBQUssRUFBRSxZQUFZO1lBQ25CLElBQUksRUFBRSxFQUFFO1lBQ1IsU0FBUyxFQUFFLHlEQUF5RDtZQUNwRSxNQUFNLEVBQUUsU0FBUztTQUNsQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWCxDQUFDO3dHQW5CVSxjQUFjOzRGQUFkLGNBQWMsMkVDaEIzQixnR0FDMEQ7OzRGRGU3QyxjQUFjO2tCQUwxQixTQUFTOytCQUNFLFdBQVc7OEJBS1osSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBjb3JlIHZlcnNpb24gKyBuYXZpZ2F0aW9uLCBwYWdpbmF0aW9uIG1vZHVsZXM6XHJcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlci9tb2R1bGVzJztcclxuLy8gaW1wb3J0IFN3aXBlciBhbmQgbW9kdWxlcyBzdHlsZXNcclxuaW1wb3J0ICdzd2lwZXIvY3NzJztcclxuaW1wb3J0ICdzd2lwZXIvY3NzL25hdmlnYXRpb24nO1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MvcGFnaW5hdGlvbic7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWhlbGxvJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaGVsbG8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhlbGxvQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBpbml0IFN3aXBlcjpcclxuICAgIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XHJcbiAgICAgIC8vIGNvbmZpZ3VyZSBTd2lwZXIgdG8gdXNlIG1vZHVsZXNcclxuICAgICAgbW9kdWxlczogW05hdmlnYXRpb24sIFBhZ2luYXRpb25dLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhzd2lwZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBvc3RIZWxsb01lc3NhZ2UoKSB7XHJcbiAgICAocGFyZW50IHx8IHdpbmRvdykucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBldmVudDogXCJwcm9tb3Rpb25zXCIsXHJcbiAgICAgIGRhdGE6IHt9LFxyXG4gICAgICByZXF1ZXN0SWQ6ICcwMC01NzVkNmI0OTVjMTM1NWVjNWJmNjZhZTQzMmI2MDFlZi0yYjBkN2M2ZTUxMzM5N2UyLTAxJyxcclxuICAgICAgYWN0aW9uOiAncHJvbWlzZSdcclxuICAgIH0pLCAnKicpO1xyXG4gIH1cclxufSIsIjxwPmhlbGxvIHdvcmtzISB7eyBuYW1lIH19PC9wPlxyXG48YnV0dG9uIChjbGljayk9XCJwb3N0SGVsbG9NZXNzYWdlKClcIj5TZW5kIG1lc3NhZ2U8L2J1dHRvbj4iXX0=