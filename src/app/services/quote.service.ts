import { Injectable } from '@angular/core';
import { Quote } from '../models/quote';
import { QuoteSource } from '../models/quote.source';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private quoteSources: QuoteSource[] = [
    { id: 1, text: "Always do your best, no matter how small the task." },
    { id: 2, text: "A smile can change someone’s whole day." },
    { id: 3, text: "Measure twice, cut once." }
  ];

  private quotes: Quote[] = [
    { id: 1, text: "Always do your best, no matter how small the task.", sourceId: 1 },
    { id: 2, text: "A smile can change someone’s whole day.", sourceId: 1 },
    { id: 3, text: "Measure twice, cut once.", sourceId: 2 }
  ];

  getQuotes(): Quote[] {
    return this.quotes;
  }

  getSources(): QuoteSource[] {
    return this.quoteSources;
  }
}