import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponse } from '../models/list-reponse.model';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  private readonly baseUrl = 'https://swapi.info/api';
  private readonly http = inject(HttpClient);

  /**
   * Lista os personagens com paginação.
   * @param page 
   * @returns 
   */
  getPeople(page = 1): Observable<ListResponse<Person>> {
    const params = new HttpParams().set('page', page.toString());

    return this.http.get<ListResponse<Person>>(`${this.baseUrl}/people`, { params });
  }

  /**
   * Detalhes de um personagem pelo ID.
   * @param id 
   * @returns 
   */
  getPersonById(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/people/${id}`);
  }

  /**
   * Detalhes de um personagem pela URL.
   * @param url 
   * @returns 
   */
  getPersonByUrl(url: string): Observable<Person> {
    return this.http.get<Person>(url);
  }

  /**
   * Detalhes de um filme pelo ID.
   * @param id 
   * @returns 
   */
  getFilmById(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/films/${id}`);
  }

  /**
   * Detalhes de um filme pela URL.
   * @param url 
   * @returns 
   */
  getFilmByUrl(url: string): Observable<Person> {
    return this.http.get<Person>(url);
  }

  /**
   * Detalhes de uma nave pelo ID.
   * @param id 
   * @returns 
   */
  getStarshipById(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/starships/${id}`);
  }

  /**
   * Detalhes de uma nave pela URL.
   * @param url 
   * @returns 
   */
  getStarshipByUrl(url: string): Observable<Person> {
    return this.http.get<Person>(url);
  }

  /**
   * Detalhes de um planeta pelo ID.
   * @param id 
   * @returns 
   */
  getPlanetById(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/planets/${id}`);
  }

  /**
   * Detalhes de um planeta pela URL.
   * @param url 
   * @returns 
   */
  getPlanetByUrl(url: string): Observable<Person> {
    return this.http.get<Person>(url);
  }

  /**
   * Detalhes de uma especie pelo ID.
   * @param id 
   * @returns 
   */
  getSpeciesById(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/species/${id}`);
  }

  /**
   * Detalhes de uma especie pela URL.
   * @param url 
   * @returns 
   */
  getSpeciesByUrl(url: string): Observable<Person> {
    return this.http.get<Person>(url);
  }

  /**
   * Detalhes de um veiculo pelo ID.
   * @param id 
   * @returns 
   */
  getVehicleById(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/vehicles/${id}`);
  }

  /**
   * Detalhes de um veiculo pela URL.
   * @param url 
   * @returns 
   */
  getVehicleByUrl(url: string): Observable<Person> {
    return this.http.get<Person>(url);
  }

}
