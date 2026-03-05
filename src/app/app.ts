import { Component, inject, signal } from '@angular/core';
import { Card } from './components/card/card';
import { ApiService } from './services/api';

@Component({
  selector: 'app-root',
  imports: [Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly apiService = inject(ApiService);
  protected readonly title = signal('Game Advisor');
  protected readonly gameResponse = signal('');

  handleCardClick(game: string): void {
    this.apiService.getRecommendation(game).subscribe({
      next: response => this.gameResponse.set(response.result),
      error: () => this.gameResponse.set('Erro ao consultar API')
    });
  }

  handleSearch(game: string): void {
    if (game.trim()) {
      this.apiService.getRecommendation(game).subscribe({
        next: response => this.gameResponse.set(response.result),
        error: () => this.gameResponse.set('Erro ao consultar API')
      });
    }
  }
}
