import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class HelloComponent {
    name = '';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvaGVsbG8vaGVsbG8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvaGVsbG8vaGVsbG8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT2pELE1BQU0sT0FBTyxjQUFjO0lBQ2hCLElBQUksR0FBVyxFQUFFLENBQUM7SUFFcEIsZ0JBQWdCO1FBQ3JCLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzVDLEtBQUssRUFBRSxZQUFZO1lBQ25CLElBQUksRUFBRSxFQUFFO1lBQ1IsU0FBUyxFQUFFLHlEQUF5RDtZQUNwRSxNQUFNLEVBQUUsU0FBUztTQUNsQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWCxDQUFDO3dHQVZVLGNBQWM7NEZBQWQsY0FBYywyRUNQM0IsZ0dBQzBEOzs0RkRNN0MsY0FBYztrQkFMMUIsU0FBUzsrQkFDRSxXQUFXOzhCQUtaLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWhlbGxvJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaGVsbG8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhlbGxvQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgcHVibGljIHBvc3RIZWxsb01lc3NhZ2UoKSB7XHJcbiAgICAocGFyZW50IHx8IHdpbmRvdykucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBldmVudDogXCJwcm9tb3Rpb25zXCIsXHJcbiAgICAgIGRhdGE6IHt9LFxyXG4gICAgICByZXF1ZXN0SWQ6ICcwMC01NzVkNmI0OTVjMTM1NWVjNWJmNjZhZTQzMmI2MDFlZi0yYjBkN2M2ZTUxMzM5N2UyLTAxJyxcclxuICAgICAgYWN0aW9uOiAncHJvbWlzZSdcclxuICAgIH0pLCAnKicpO1xyXG4gIH1cclxufSIsIjxwPmhlbGxvIHdvcmtzISB7eyBuYW1lIH19PC9wPlxyXG48YnV0dG9uIChjbGljayk9XCJwb3N0SGVsbG9NZXNzYWdlKClcIj5TZW5kIG1lc3NhZ2U8L2J1dHRvbj4iXX0=