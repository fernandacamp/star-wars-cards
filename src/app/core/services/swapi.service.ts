import { ListResponse } from './../models/list-reponse.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Person } from '../models/person.model';
import { Films } from '../models/films.model';
import { Starship } from '../models/starship.model';
import { Planet } from '../models/planet.model';
import { Species } from '../models/species.model';
import { Vehicle } from '../models/vehicle.model';

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

    return this.http.get<any>(`${this.baseUrl}/people`, { params }).pipe(
      map((raw): ListResponse<Person> => {
        if (Array.isArray(raw)) {
          return {
            count: raw.length,
            next: null,
            previous: null,
            results: raw as Person[],
          };
        }

        return raw as ListResponse<Person>;
      }),
    );
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
  getFilmById(id: string): Observable<Films> {
    return this.http.get<Films>(`${this.baseUrl}/films/${id}`);
  }

  /**
   * Detalhes de um filme pela URL.
   * @param url 
   * @returns 
   */
  getFilmByUrl(url: string): Observable<Films> {
    return this.http.get<Films>(url);
  }

  /**
   * Detalhes de uma nave pelo ID.
   * @param id 
   * @returns 
   */
  getStarshipById(id: string): Observable<Starship> {
    return this.http.get<Starship>(`${this.baseUrl}/starships/${id}`);
  }

  /**
   * Detalhes de uma nave pela URL.
   * @param url 
   * @returns 
   */
  getStarshipByUrl(url: string): Observable<Starship> {
    return this.http.get<Starship>(url);
  }

  /**
   * Detalhes de um planeta pelo ID.
   * @param id 
   * @returns 
   */
  getPlanetById(id: string): Observable<Planet> {
    return this.http.get<Planet>(`${this.baseUrl}/planets/${id}`);
  }

  /**
   * Detalhes de um planeta pela URL.
   * @param url 
   * @returns 
   */
  getPlanetByUrl(url: string): Observable<Planet> {
    return this.http.get<Planet>(url);
  }

  /**
   * Detalhes de uma especie pelo ID.
   * @param id 
   * @returns 
   */
  getSpeciesById(id: string): Observable<Species> {
    return this.http.get<Species>(`${this.baseUrl}/species/${id}`);
  }

  /**
   * Detalhes de uma especie pela URL.
   * @param url 
   * @returns 
   */
  getSpeciesByUrl(url: string): Observable<Species> {
    return this.http.get<Species>(url);
  }

  /**
   * Detalhes de um veiculo pelo ID.
   * @param id 
   * @returns 
   */
  getVehicleById(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.baseUrl}/vehicles/${id}`);
  }

  /**
   * Detalhes de um veiculo pela URL.
   * @param url 
   * @returns 
   */
  getVehicleByUrl(url: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(url);
  }

}
