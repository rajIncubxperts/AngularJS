import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentFirstComponent } from './child-component-first.component';

describe('ChildComponentFirstComponent', () => {
  let component: ChildComponentFirstComponent;
  let fixture: ComponentFixture<ChildComponentFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponentFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComponentFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
