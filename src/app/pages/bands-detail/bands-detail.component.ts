import { BandsService } from 'src/app/services/bands.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-bands-detail',
  templateUrl: './bands-detail.component.html',
  styleUrls: ['./bands-detail.component.scss'],
})
export class BandsDetailComponent implements OnInit {
  id: any;
  myBand: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private bandService: BandsService,
    private router: Router,
  ) {
    this.activateRoute.paramMap.subscribe((params) => {
      this.id = params.get('id'); //asigno el id a nuestro get
      this.bandService.getOneBand(this.id).subscribe((data: any) => {
        console.log(data);
        this.myBand = { ...data }; //metemos todos los datos
      });
    });
  }

  ngOnInit(): void {}
  
  deleteBand() {
    this.bandService.deleteBand(this.id).subscribe();
    this.router.navigate(['/bands']);
  }
}

