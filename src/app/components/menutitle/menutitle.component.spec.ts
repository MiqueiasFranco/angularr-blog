import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutitleComponent } from './menutitle.component';

describe('MenutitleComponent', () => {
  let component: MenutitleComponent;
  let fixture: ComponentFixture<MenutitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenutitleComponent]
    });
    fixture = TestBed.createComponent(MenutitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
