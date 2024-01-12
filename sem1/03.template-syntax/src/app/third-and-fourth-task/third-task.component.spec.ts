import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdTaskComponent } from './third-task.component';

describe('ThirdTaskComponent', () => {
  let component: ThirdTaskComponent;
  let fixture: ComponentFixture<ThirdTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
