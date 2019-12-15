import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodtypePage } from './foodtype.page';

describe('FoodtypePage', () => {
  let component: FoodtypePage;
  let fixture: ComponentFixture<FoodtypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodtypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodtypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
