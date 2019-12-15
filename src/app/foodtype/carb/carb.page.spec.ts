import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarbPage } from './carb.page';

describe('CarbPage', () => {
  let component: CarbPage;
  let fixture: ComponentFixture<CarbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
