import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  /**
   * Store an item in local storage
   * @param storageKey
   * @param toStore
   */
  setItem<T>(storageKey: string, toStore: T) {
    localStorage.setItem(storageKey, JSON.stringify(toStore));
  }

  /**
   * Retrieve an item from local storage
   * @param storageKey
   */
  getItem<T>(storageKey: string) : T | undefined {
    const items = localStorage.getItem(storageKey);
    if(!items) return undefined
    return JSON.parse(items);
  }
}
