import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTaskComponent } from './second-task.component';

describe('SecondTaskComponent', () => {
  let component: SecondTaskComponent;
  let fixture: ComponentFixture<SecondTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
