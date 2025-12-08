import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecDetailsPage } from './dec-details-page';

describe('DecDetailsPage', () => {
  let component: DecDetailsPage;
  let fixture: ComponentFixture<DecDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecDetailsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecDetailsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
