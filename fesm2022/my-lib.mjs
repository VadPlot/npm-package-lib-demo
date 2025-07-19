import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';

var WidgetType;
(function (WidgetType) {
    WidgetType["RESP"] = "RESP";
    WidgetType["WD"] = "WD";
    WidgetType["VADTEST"] = "VadzimTest";
})(WidgetType || (WidgetType = {}));
class FactoryService {
    pageWithTemplateWidgetsMap = {
        'Vadzim.Echo': {
            '1.0': HelloComponent,
        },
    };
    createComponentType(widgetId, version) {
        return this.pageWithTemplateWidgetsMap[widgetId]?.[version] || null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FactoryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FactoryService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FactoryService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

class HelloComponent {
    name = '';
    widgetSettings = {
        elementId: '',
        widgetId: '',
        version: '',
        inlineStyle: '',
        title: '',
        widgetType: WidgetType.RESP,
        config: null,
    };
    ngOnInit() {
        // init Swiper:
        const swiper = new Swiper('.swiper', {
            // configure Swiper to use modules
            modules: [Navigation, Pagination],
        });
        console.log(swiper);
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
            // Успешный ответ: выведем список пользователей
            console.log('Список пользователей:', response.data);
        })
            .catch((error) => {
            // Обработка ошибок
            console.error('Произошла ошибка при запросе:', error);
        });
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: HelloComponent, selector: "lib-hello", inputs: { name: "name", widgetSettings: "widgetSettings" }, ngImport: i0, template: "<p>hello works! {{ name }}</p>\r\n<button (click)=\"postHelloMessage()\">Send message</button>\r\n<div>\r\n  <h2>Widget: {{ widgetSettings.widgetId }}</h2>\r\n  <p>Element ID: {{ widgetSettings.elementId }}</p>\r\n  <p>Version: {{ widgetSettings.version }}</p>\r\n  <pre>Config: {{ widgetSettings.config }}</pre>\r\n</div>\r\n" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: HelloComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-hello', template: "<p>hello works! {{ name }}</p>\r\n<button (click)=\"postHelloMessage()\">Send message</button>\r\n<div>\r\n  <h2>Widget: {{ widgetSettings.widgetId }}</h2>\r\n  <p>Element ID: {{ widgetSettings.elementId }}</p>\r\n  <p>Version: {{ widgetSettings.version }}</p>\r\n  <pre>Config: {{ widgetSettings.config }}</pre>\r\n</div>\r\n" }]
        }], propDecorators: { name: [{
                type: Input
            }], widgetSettings: [{
                type: Input
            }] } });

class MyLibModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MyLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: MyLibModule, declarations: [HelloComponent], exports: [HelloComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MyLibModule, providers: [FactoryService] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MyLibModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [FactoryService],
                    declarations: [HelloComponent],
                    imports: [],
                    exports: [HelloComponent]
                }]
        }] });

/*
 * Public API Surface of my-lib
 */
// export * from 'swiper/swiper.css';
// export * from 'swiper/modules/navigation/navigation.css';
// export * from 'swiper/modules/pagination/pagination.css';

/**
 * Generated bundle index. Do not edit.
 */

export { FactoryService, HelloComponent, MyLibModule, WidgetType };
//# sourceMappingURL=my-lib.mjs.map
