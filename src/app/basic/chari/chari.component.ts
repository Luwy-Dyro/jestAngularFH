import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';
import { Poke } from '../interfaces/poke';

@Component({
  selector: 'app-chari',
  templateUrl: './chari.component.html',
  styleUrls: ['./chari.component.scss']
})
export class ChariComponent implements OnInit {

  public chari?: Poke 

  constructor(private poService: PokeService ){

  }


  ngOnInit() {
    
      this.poService.getPoke(6)
          .subscribe( resp => {

            this.chari = resp
            console.log(resp);
            

          })

  }

  
}
