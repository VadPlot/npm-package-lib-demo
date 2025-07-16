import { Type } from '@angular/core';
import { WidgetSettings } from '../hello/hello.component';
import * as i0 from "@angular/core";
export declare class FactoryService {
    private PAGE_WITH_TEMPLATE_WIDGETS;
    getWidgetComponentType(widgetSettings: WidgetSettings): Type<any> | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<FactoryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FactoryService>;
}
