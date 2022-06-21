import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListviewIdComponent } from './listview-id.component';

describe('ListviewIdComponent', () => {
  let component: ListviewIdComponent;
  let fixture: ComponentFixture<ListviewIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListviewIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListviewIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
