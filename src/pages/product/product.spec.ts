import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule, NavController, NavParams } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { ProductPage } from './product';
import { ProductsProvider } from '../../providers/products/products';

let comp: ProductPage;
let fixture: ComponentFixture<ProductPage>
let de: DebugElement;
let el: HTMLElement;

import {

    NavMock,
    NavParamsMock

} from '../../../test-config/mocks-ionic'

describe('Page: Product Page', () => {

    beforeEach(async(() => {

        TestBed.configureTestingModule({

            declarations: [MyApp, ProductPage],

            providers: [
                { provide: NavController, useClass: NavMock },
                { provide: NavParams, useClass: NavParamsMock },
                ProductsProvider
            ],

            imports: [

                IonicModule.forRoot(MyApp)

            ]

        }).compileComponents();

    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(ProductPage);
        comp = fixture.componentInstance;

    });

    afterEach(() => {

        fixture.destroy();
        comp = null;
        de = null;
        el = null;

    });

    it('Is created', () => {

        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();

    });

    it('Display products containing a title, description, and price in the list', () => {

        let productsService = fixture.debugElement.injector.get(ProductsProvider);
        let firstProduct = productsService.products[0];

        fixture.detectChanges();

        de = fixture.debugElement.query(By.css('ion-list ion-item'));
        el = de.nativeElement;

        expect(el.textContent).toContain(firstProduct.title);
        expect(el.textContent).toContain(firstProduct.description);
        expect(el.textContent).toContain(firstProduct.price);

    });

});