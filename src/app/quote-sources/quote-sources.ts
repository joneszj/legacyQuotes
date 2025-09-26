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
    this.loadQuotes();
  }

  loadQuotes() {
    this.quotes = this.quoteService
      .getQuotes()
      .filter(q => this.selectedSource === 0 || q.sourceId === this.selectedSource);
  }
}