import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { Quote } from '../models/quote';
import { QuotesComponent } from '../quotes/quotes';
import { FormsModule } from '@angular/forms';
import { QuoteSource } from '../models/quote.source';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quote-sources',
  imports: [QuotesComponent, FormsModule, CommonModule],
  templateUrl: './quote-sources.html',
  styleUrls: ['./quote-sources.css']
})
export class QuoteSources implements OnInit {
  sources: QuoteSource[] = [];
  selectedSource: number = 0;
  quotes: Quote[] = [];

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.sources = this.quoteService.getSources();
    if (this.sources.length > 0) {
      this.selectedSource = this.sources[0].id;
      this.loadQuotes();
    }
  }

  loadQuotes() {
    this.quotes = this.quoteService
      .getQuotes()
      .filter(q => q.sourceId === this.selectedSource);
  }
}