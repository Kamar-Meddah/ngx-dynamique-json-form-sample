import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiqueFormComponent } from './dynamique-form.component';

describe('DynamiqueFormComponent', () => {
  let component: DynamiqueFormComponent;
  let fixture: ComponentFixture<DynamiqueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamiqueFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiqueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
