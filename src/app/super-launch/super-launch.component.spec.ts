import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperLaunchComponent } from './super-launch.component';

describe('SuperLaunchComponent', () => {
  let component: SuperLaunchComponent;
  let fixture: ComponentFixture<SuperLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperLaunchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
