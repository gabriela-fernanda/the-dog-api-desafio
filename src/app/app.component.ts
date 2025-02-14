import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dogs: any[] = [];

  constructor(private dogService: DogsService) {}

  ngOnInit(): void {
    this.loadDogs();
  }

  loadDogs(): void {
    this.dogService.getAllBreeds().subscribe({
      next: (breeds) => {
        if (breeds.length > 0) {
          for (let i = 0; i < 15; i++) {
            const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];

            const breed = randomBreed.name;
            const temperament = randomBreed.temperament || 'Sem informações';

            this.dogService.getImageBreed(randomBreed.id.toString()).subscribe({
              next: (res) => {
                if (res.length > 0) {
                  const imageUrl = res[0].url;
                  this.dogs.push({ imageUrl, breed, temperament });
                }
              },
              error: (err) => console.log(err)
            });
          }
        }
      },
      error: (err) => console.log(err)
    });
  }

}
