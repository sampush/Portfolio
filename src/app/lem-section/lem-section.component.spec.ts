import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemSectionComponent } from './lem-section.component';

describe('LemSectionComponent', () => {
  let component: LemSectionComponent;
  let fixture: ComponentFixture<LemSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LemSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LemSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
