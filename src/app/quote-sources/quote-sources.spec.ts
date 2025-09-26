import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSources } from './quote-sources';

describe('QuoteSources', () => {
  let component: QuoteSources;
  let fixture: ComponentFixture<QuoteSources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteSources]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteSources);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
