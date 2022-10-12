import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConSectionComponent } from './con-section.component';

describe('ConSectionComponent', () => {
  let component: ConSectionComponent;
  let fixture: ComponentFixture<ConSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
