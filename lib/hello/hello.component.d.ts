import * as i0 from "@angular/core";
export interface WidgetSettings {
    elementId: string;
    widgetId: string;
    version: string;
    config: object | null;
}
export declare class HelloComponent {
    name: string;
    widgetSettings: WidgetSettings;
    ngOnInit(): void;
    postHelloMessage(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HelloComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HelloComponent, "lib-hello", never, { "name": { "alias": "name"; "required": false; }; "widgetSettings": { "alias": "widgetSettings"; "required": false; }; }, {}, never, never, false, never>;
}
