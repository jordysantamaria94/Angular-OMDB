import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { OmdbService } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  resultados: any;

  constructor(private serviceOmdb: OmdbService, private router: Router, private alertController: AlertController) {}

  buscar(event) {
    this.serviceOmdb.getQuery(`&s=${event.srcElement.value}`)
      .subscribe(response => {
        this.resultados = response['Search'];
      });
  }

  detail(id: string) {
    console.log(id);
    this.router.navigate(['/detail', id]);
  }

}
