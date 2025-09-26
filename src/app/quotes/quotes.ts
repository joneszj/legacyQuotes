import { Component, Input } from '@angular/core';
import { Quote } from '../models/quote';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quotes',
  imports: [FormsModule, CommonModule],
  templateUrl: './quotes.html',
  styleUrls: ['./quotes.css']
})
export class QuotesComponent {
  @Input() quotes: Quote[] = [];
  filteredQuotes: Quote[] = [];
  searchTerm: string = '';

  ngOnChanges() {
    this.filteredQuotes = this.quotes;
  }

  filterQuotes() {
    const term = this.searchTerm.toLowerCase();
    this.filteredQuotes = this.quotes.filter(q =>
      q.text.toLowerCase().includes(term)
    );
  }
}