import { Component, input, output } from '@angular/core';

@Component({
  selector: 'card',
  imports: [],
  templateUrl: './card.html'
})
export class Card {
  readonly title = input.required<string>();
  readonly image = input.required<string>();
  readonly stars = input.required<number>();
  readonly gameClick = output<string>();

  onCardClick(): void {
    this.gameClick.emit(this.title());
  }

  getStars(): string {
    return '⭐'.repeat(this.stars());
  }

  getLabel(): string {
    switch (this.stars()) {
      case 3: return 'Altamente Recomendado';
      case 2: return 'Vale a pena';
      default: return 'Melhor ver um filme';
    }
  }

  getLabelColor(): string {
    switch (this.stars()) {
      case 3: return 'text-green-400';
      case 2: return 'text-yellow-400';
      default: return 'text-red-400';
    }
  }
}
