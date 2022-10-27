import { Component, OnInit } from '@angular/core';
import { StickersService } from '../sticker.service';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent implements OnInit {

  stickers: any[] = [];
  constructor(private stickerService:StickersService) { }

  ngOnInit(): void {
    this.stickerService.stickertrending()
    .subscribe((Response: any)=>{
      this.stickers = Response.data;
      console.log('gifs', this.stickers);
    })
  }



  }
