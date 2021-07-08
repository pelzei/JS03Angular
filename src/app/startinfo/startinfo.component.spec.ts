import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartinfoComponent } from './startinfo.component';

describe('StartinfoComponent', () => {
  let component: StartinfoComponent;
  let fixture: ComponentFixture<StartinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
