import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HighPage } from './high.page';

describe('HighPage', () => {
  let component: HighPage;
  let fixture: ComponentFixture<HighPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HighPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
