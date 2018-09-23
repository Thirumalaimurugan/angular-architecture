import { Component, OnInit } from '@angular/core';
import {RecordService} from '../record.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  data:any;
  ngOnInit(){
    this.myFirstService.getData().subscribe(data=>{
    
      console.log('got data',data);
      this.data = data;
    });
  }

  constructor(private myFirstService : RecordService){
   
  }

}
