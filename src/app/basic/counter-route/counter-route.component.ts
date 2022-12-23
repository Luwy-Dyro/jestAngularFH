import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter-route',
  templateUrl: './counter-route.component.html',
  styleUrls: ['./counter-route.component.scss']
})
export class CounterRouteComponent implements OnInit {

  counter: number = 0

  constructor(private route: ActivatedRoute){

  }

  
  ngOnInit(){
    const initialValue = Number(this.route.snapshot.paramMap.get('initial'))
    //console.log({initialValue});

    this.counter = isNaN(initialValue) ? 10 : initialValue
    
  }

  increaseBy(value:number){
    this.counter += value;
    //TODO
    console.log({ newValue: this.counter });
    
  }


}
