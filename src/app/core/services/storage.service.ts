import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  /**
   * Lê um item do localStorage e faz o parse para o tipo desejado.
   * @param key 
   * @returns 
   */
  getItem<T>(key: string): T | null {
    if (typeof window === 'undefined') return null;

    const item = localStorage.getItem(key);
    if(!item) return null;

    try {
      return JSON.parse(item) as T;
    } catch (error) {
      console.error(`Falha ao fazer parse da chave "${key}"`, error);
      return null;
    }
  }

  /**
   * Salva um item no localStorage após serializá-lo.
   * @param key 
   * @param value 
   * @returns 
   */
  setItem<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return;

    try {
      const serialized = JSON.stringify(value);
      window.localStorage.setItem(key, serialized);
    } catch (error) {
      console.error(`Erro ao salvar a chave "${key}"`, error);
    }
  }
  
}
