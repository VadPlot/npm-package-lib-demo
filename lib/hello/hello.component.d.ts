import { IWidgetSettings } from '../types';
import * as i0 from "@angular/core";
export declare class HelloComponent {
    name: string;
    widgetSettings: IWidgetSettings;
    ngOnInit(): void;
    postHelloMessage(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HelloComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HelloComponent, "lib-hello", never, { "name": { "alias": "name"; "required": false; }; "widgetSettings": { "alias": "widgetSettings"; "required": false; }; }, {}, never, never, false, never>;
}
