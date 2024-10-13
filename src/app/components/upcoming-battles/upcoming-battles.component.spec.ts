import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingBattlesComponent } from './upcoming-battles.component';

describe('UpcomingBattlesComponent', () => {
  let component: UpcomingBattlesComponent;
  let fixture: ComponentFixture<UpcomingBattlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingBattlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingBattlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
