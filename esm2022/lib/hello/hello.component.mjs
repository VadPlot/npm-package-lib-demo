import { Component, Input } from '@angular/core';
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvaGVsbG8vaGVsbG8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvaGVsbG8vaGVsbG8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsaURBQWlEO0FBQ2pELE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQU94RCxNQUFNLE9BQU8sY0FBYztJQUNoQixJQUFJLEdBQVcsRUFBRSxDQUFDO0lBRTNCLFFBQVE7UUFDTixlQUFlO1FBQ2YsTUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ25DLGtDQUFrQztZQUNsQyxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO1NBQ2xDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVNLGdCQUFnQjtRQUNyQixDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUM1QyxLQUFLLEVBQUUsWUFBWTtZQUNuQixJQUFJLEVBQUUsRUFBRTtZQUNSLFNBQVMsRUFBRSx5REFBeUQ7WUFDcEUsTUFBTSxFQUFFLFNBQVM7U0FDbEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1gsQ0FBQzt3R0FuQlUsY0FBYzs0RkFBZCxjQUFjLDJFQ1YzQixnR0FDMEQ7OzRGRFM3QyxjQUFjO2tCQUwxQixTQUFTOytCQUNFLFdBQVc7OEJBS1osSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBjb3JlIHZlcnNpb24gKyBuYXZpZ2F0aW9uLCBwYWdpbmF0aW9uIG1vZHVsZXM6XHJcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlci9tb2R1bGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWhlbGxvJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaGVsbG8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhlbGxvQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBpbml0IFN3aXBlcjpcclxuICAgIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XHJcbiAgICAgIC8vIGNvbmZpZ3VyZSBTd2lwZXIgdG8gdXNlIG1vZHVsZXNcclxuICAgICAgbW9kdWxlczogW05hdmlnYXRpb24sIFBhZ2luYXRpb25dLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhzd2lwZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBvc3RIZWxsb01lc3NhZ2UoKSB7XHJcbiAgICAocGFyZW50IHx8IHdpbmRvdykucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBldmVudDogXCJwcm9tb3Rpb25zXCIsXHJcbiAgICAgIGRhdGE6IHt9LFxyXG4gICAgICByZXF1ZXN0SWQ6ICcwMC01NzVkNmI0OTVjMTM1NWVjNWJmNjZhZTQzMmI2MDFlZi0yYjBkN2M2ZTUxMzM5N2UyLTAxJyxcclxuICAgICAgYWN0aW9uOiAncHJvbWlzZSdcclxuICAgIH0pLCAnKicpO1xyXG4gIH1cclxufSIsIjxwPmhlbGxvIHdvcmtzISB7eyBuYW1lIH19PC9wPlxyXG48YnV0dG9uIChjbGljayk9XCJwb3N0SGVsbG9NZXNzYWdlKClcIj5TZW5kIG1lc3NhZ2U8L2J1dHRvbj4iXX0=