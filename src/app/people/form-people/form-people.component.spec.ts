import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPeopleComponent } from './form-people.component';

describe('FormPeopleComponent', () => {
  let component: FormPeopleComponent;
  let fixture: ComponentFixture<FormPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
