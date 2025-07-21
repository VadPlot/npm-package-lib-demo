import { Type } from '@angular/core';
import { IPageWithTemplateComponentFactory, IPageWithTemplateWidget } from '../types';
import * as i0 from "@angular/core";
export declare class PageWithTemplateComponentFactory implements IPageWithTemplateComponentFactory {
    private pageWithTemplateWidgetsMap;
    createComponentType(widgetId: string, version: string): Type<IPageWithTemplateWidget> | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageWithTemplateComponentFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PageWithTemplateComponentFactory>;
}
