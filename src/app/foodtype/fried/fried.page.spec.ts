import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FriedPage } from './fried.page';

describe('FriedPage', () => {
  let component: FriedPage;
  let fixture: ComponentFixture<FriedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FriedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
