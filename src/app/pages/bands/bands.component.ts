import { Component, OnInit } from '@angular/core';
import { BandsService } from 'src/app/services/bands.service';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss'],
})
export class BandsComponent implements OnInit {
  myBands?: any[];
  constructor(private bandService: BandsService) {
    this.bandService.getAllBands().subscribe((data: any) => {
      // console.log(data);
      const bandData: any[] = data.map((band: any) => ({
        id: band._id,
        name: band.name,
        img: band.img,
      }));

      this.myBands = [...bandData];
      console.log(this.myBands);
    });
  }

  ngOnInit(): void {}
}
