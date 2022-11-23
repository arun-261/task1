import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'services/apiservice.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  detailes:any
  // adressOne:any
  constructor(private api:ApiserviceService) { }

  ngOnInit(): void {
    this.api.getdummy().subscribe((result)=>{
      // console.log(result);
      this.detailes=result
  })
  }
  // adress(event:any){
  //   this.api.getAdress(event).subscribe((result)=>{
  //     console.log(result);
      
  //   })
  // }
}
