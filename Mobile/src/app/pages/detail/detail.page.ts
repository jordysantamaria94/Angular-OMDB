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
  tabSelected: string = "overview";

  constructor(private router: ActivatedRoute, private serviceOmdb: OmdbService, private route: Router) {}

  ngOnInit(): void {
    this.getDetailMovie();
  }

  async getDetailMovie() {
    
    const id = this.router.snapshot.paramMap.get('id');
    
    await this.serviceOmdb.getDetailMovie(id)
      .subscribe(response => {
        this.detail = response;
      });
  }

  segmentChanged(ev: any) {
    this.tabSelected = ev.detail.value;
  }

}
