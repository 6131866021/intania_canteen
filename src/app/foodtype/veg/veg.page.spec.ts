import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VegPage } from './veg.page';

describe('VegPage', () => {
  let component: VegPage;
  let fixture: ComponentFixture<VegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
