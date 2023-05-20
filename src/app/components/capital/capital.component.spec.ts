import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalComponent } from './capital.component';

describe('CapitalComponent', () => {
  let component: CapitalComponent;
  let fixture: ComponentFixture<CapitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapitalComponent]
    });
    fixture = TestBed.createComponent(CapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
