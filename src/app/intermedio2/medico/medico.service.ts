import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private readonly http: HttpClient) { }

  getMedicos() {
    return this.http.get('...');
  }

}
