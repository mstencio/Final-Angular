import { Component, OnInit } from '@angular/core';
import { GifsService } from '../gifs.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
 gifs: any[] = [];
  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
    this.gifsService.gifstrending()
    .subscribe((Response: any)=>{
      this.gifs = Response.data;
      console.log('gifs', this.gifs);
    })
  }



  }


