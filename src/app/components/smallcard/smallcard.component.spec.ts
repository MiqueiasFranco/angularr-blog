import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallcardComponent } from './smallcard.component';

describe('SmallcardComponent', () => {
  let component: SmallcardComponent;
  let fixture: ComponentFixture<SmallcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallcardComponent]
    });
    fixture = TestBed.createComponent(SmallcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
