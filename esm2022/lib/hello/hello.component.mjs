import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class HelloComponent {
    name = '';
    postMessage() {
        window.postMessage(JSON.stringify({
            event: "promotions",
            data: {},
            requestId: '00-575d6b495c1355ec5bf66ae432b601ef-2b0d7c6e513397e2-01',
            action: 'promise'
        }), '*');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: HelloComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: HelloComponent, selector: "lib-hello", inputs: { name: "name" }, ngImport: i0, template: `<p>Привет, {{ name }}!</p>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: HelloComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-hello', template: `<p>Привет, {{ name }}!</p>` }]
        }], propDecorators: { name: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvaGVsbG8vaGVsbG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU9qRCxNQUFNLE9BQU8sY0FBYztJQUNoQixJQUFJLEdBQVcsRUFBRSxDQUFDO0lBRXBCLFdBQVc7UUFDaEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2hDLEtBQUssRUFBRSxZQUFZO1lBQ25CLElBQUksRUFBRSxFQUFFO1lBQ1IsU0FBUyxFQUFFLHlEQUF5RDtZQUNwRSxNQUFNLEVBQUUsU0FBUztTQUNsQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWCxDQUFDO3dHQVZVLGNBQWM7NEZBQWQsY0FBYywyRUFIZiw0QkFBNEI7OzRGQUczQixjQUFjO2tCQUwxQixTQUFTOytCQUNFLFdBQVcsWUFDWCw0QkFBNEI7OEJBSTdCLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWhlbGxvJyxcclxuICB0ZW1wbGF0ZTogYDxwPtCf0YDQuNCy0LXRgiwge3sgbmFtZSB9fSE8L3A+YCxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWxsb0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIHB1YmxpYyBwb3N0TWVzc2FnZSgpIHtcclxuICAgIHdpbmRvdy5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIGV2ZW50OiBcInByb21vdGlvbnNcIixcclxuICAgICAgZGF0YToge30sXHJcbiAgICAgIHJlcXVlc3RJZDogJzAwLTU3NWQ2YjQ5NWMxMzU1ZWM1YmY2NmFlNDMyYjYwMWVmLTJiMGQ3YzZlNTEzMzk3ZTItMDEnLFxyXG4gICAgICBhY3Rpb246ICdwcm9taXNlJ1xyXG4gICAgfSksICcqJyk7XHJcbiAgfVxyXG59Il19