import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExposantComponent } from './new-exposant.component';

describe('NewExposantComponent', () => {
  let component: NewExposantComponent;
  let fixture: ComponentFixture<NewExposantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewExposantComponent]
    });
    fixture = TestBed.createComponent(NewExposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
