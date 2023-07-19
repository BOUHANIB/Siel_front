import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLivreComponent } from './new-livre.component';

describe('NewLivreComponent', () => {
  let component: NewLivreComponent;
  let fixture: ComponentFixture<NewLivreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewLivreComponent]
    });
    fixture = TestBed.createComponent(NewLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
