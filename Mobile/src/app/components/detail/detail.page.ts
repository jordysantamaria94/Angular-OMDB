import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OmdbService } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  detail: any;

  constructor(private router: ActivatedRoute, private serviceOmdb: OmdbService, private route: Router) {}

  ngOnInit(): void {
    this.getDetailMovie();
  }

  async getDetailMovie() {
    
    const id = this.router.snapshot.paramMap.get('id');
    
    await this.serviceOmdb.getDetailMovie(id)
      .subscribe(response => {
        console.log(response);
        this.detail = response;
      });
  }

  volver() {
    this.route.navigate(['/search']);
  }

}
