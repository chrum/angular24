import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondThirdTaskComponent } from './second-third-task.component';

describe('ThirdTaskComponent', () => {
  let component: SecondThirdTaskComponent;
  let fixture: ComponentFixture<SecondThirdTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondThirdTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondThirdTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
