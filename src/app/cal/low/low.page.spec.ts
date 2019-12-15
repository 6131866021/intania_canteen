import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LowPage } from './low.page';

describe('LowPage', () => {
  let component: LowPage;
  let fixture: ComponentFixture<LowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
