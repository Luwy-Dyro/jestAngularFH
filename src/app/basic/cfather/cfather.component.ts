import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../interfaces/client';

@Component({
  selector: 'app-cfather',
  templateUrl: './cfather.component.html',
  styleUrls: ['./cfather.component.scss']
})
export class CfatherComponent implements OnInit{
  
  
  
  public client?: Client


  ngOnInit() {
  
  }

  onSetClient(name: string){

    this.client = {
      id: 1,
      name
    }    

  }


}
