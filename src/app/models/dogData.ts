export interface Breed {
  id: number;
  name: string;
  temperament: string;
}

export interface DogImage {
  id: string;
  url: string;
}

export interface Dog {
  imageUrl: string;
  breed: string;
  temperament: string;
}

