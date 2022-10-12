import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAbtComponent } from './top-abt.component';

describe('TopAbtComponent', () => {
  let component: TopAbtComponent;
  let fixture: ComponentFixture<TopAbtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopAbtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopAbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
