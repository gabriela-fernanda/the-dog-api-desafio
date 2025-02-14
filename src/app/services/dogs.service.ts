import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Breed, DogImage} from 'src/app/models/dogData'

@Injectable({ providedIn: 'root' })
export class DogsService {
  private breedsUrl = 'https://api.thedogapi.com/v1/breeds';
  private imagesUrl = 'https://api.thedogapi.com/v1/images/search?breed_id=';

  constructor(private http: HttpClient) {}

  getAllBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(this.breedsUrl);
  }

  getImageBreed(breedId: string): Observable<DogImage[]> {
    return this.http.get<DogImage[]>(`${this.imagesUrl}${breedId}`);
  }

}
