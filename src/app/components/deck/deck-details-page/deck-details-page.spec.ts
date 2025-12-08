import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckDetailsPage } from './deck-details-page';

describe('DeckDetailsPage', () => {
  let component: DeckDetailsPage;
  let fixture: ComponentFixture<DeckDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckDetailsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckDetailsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
