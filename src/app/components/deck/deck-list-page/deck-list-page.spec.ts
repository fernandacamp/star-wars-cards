import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckListPage } from './deck-list-page';

describe('DeckListPage', () => {
  let component: DeckListPage;
  let fixture: ComponentFixture<DeckListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
