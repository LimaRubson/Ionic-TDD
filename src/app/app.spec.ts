import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProductPage } from '../pages/product/product';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {
    StatusBarMock,
    SplashScreenMock
} from './../../test-config/mocks-ionic'



let comp: MyApp;
let fixture: ComponentFixture<MyApp>;

describe('Component: Root Component', () => {

    beforeEach(async(() => {
        
        TestBed.configureTestingModule({

            declarations: [MyApp],

            providers: [
                { provide: StatusBar, useClass: StatusBarMock },
                { provide: SplashScreen, useClass: SplashScreenMock }

            ],

            imports: [

                IonicModule.forRoot(MyApp)

            ]
        }).compileComponents();

    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(MyApp);
        comp = fixture.componentInstance;
    
    });
    
    afterEach(() => {
    
        fixture.destroy();
        comp = null;
    });
    
    it('Is created', () => {
        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();
    });
    
    it('Display the product page to the user', () => {
        expect(comp['rootPage']).toBe(ProductPage);
    });
    
});


