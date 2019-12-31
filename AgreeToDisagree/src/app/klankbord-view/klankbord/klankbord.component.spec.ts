import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlankbordComponent } from './klankbord.component';

describe('KlankbordComponent', () => {
  let component: KlankbordComponent;
  let fixture: ComponentFixture<KlankbordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlankbordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlankbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
