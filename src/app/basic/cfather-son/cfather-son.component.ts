import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../interfaces/client';

@Component({
  selector: 'app-cfather-son',
  templateUrl: './cfather-son.component.html',
  styleUrls: ['./cfather-son.component.scss']
})
export class CfatherSonComponent {

  @Input() client?: Client
  @Output() onDeleteClient = new EventEmitter();
  @Output() onUpdatedClient = new EventEmitter<Client>() ;

  onDelete(){
    this.client = undefined;
    this.onDeleteClient.emit()
  }

  onChange(newId: number){

    if(!this.client) return;

    //this.client.id = newId
    this.client = {
      ...this.client,
      id: newId
    }

    this.onUpdatedClient.emit({...this.client})


  }

}
