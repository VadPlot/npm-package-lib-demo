import { Type } from '@angular/core';
export interface IPageWithTemplateWidget {
    widgetSettings: IWidgetSettings;
}
export interface IWidgetSettings<T = object | null> {
    elementId: string;
    widgetId: string;
    version: string;
    widgetType: string;
    title: string;
    inlineStyle: string;
    config: T;
}
export interface IPageWithTemplateComponentFactory {
    createComponentType(id: string, version: string): Type<IPageWithTemplateWidget> | null;
}
