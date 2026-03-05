import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/game';

  getRecommendation(search: string) {
    return this.http.get<{ result: string }>(
      `${this.apiUrl}?search=${search}`
    );
  }
}
