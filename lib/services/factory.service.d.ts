import { Type } from '@angular/core';
import { IPageWithTemplateComponentFactory, IPageWithTemplateWidget } from '../types';
import * as i0 from "@angular/core";
export declare class FactoryService implements IPageWithTemplateComponentFactory {
    private pageWithTemplateWidgetsMap;
    createComponentType(widgetId: string, version: string): Type<IPageWithTemplateWidget> | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<FactoryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FactoryService>;
}
