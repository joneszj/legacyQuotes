import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuoteSources } from './quote-sources/quote-sources';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [QuoteSources, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('legacy-quotes');
}
