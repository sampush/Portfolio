import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomSectionComponent } from './hom-section.component';

describe('HomSectionComponent', () => {
  let component: HomSectionComponent;
  let fixture: ComponentFixture<HomSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
