import { Component, OnInit } from '@angular/core';
import {HttpService} from 'src/app/http.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  datas: object | undefined;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.myMethod().subscribe(data =>{
      this.datas= data
      console.log(this.datas)
    });
    
    }

}
