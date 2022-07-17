import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyDescriptionComponent } from './body-description.component';

describe('BodyDescriptionComponent', () => {
  let component: BodyDescriptionComponent;
  let fixture: ComponentFixture<BodyDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
