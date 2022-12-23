import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { ChariComponent } from './chari/chari.component';
import { CfatherComponent } from './cfather/cfather.component';
import { CfatherSonComponent } from './cfather-son/cfather-son.component';
import { CounterRouteComponent } from './counter-route/counter-route.component';



@NgModule({
  declarations: [
    CounterComponent,
    ChariComponent,
    CfatherComponent,
    CfatherSonComponent,
    CounterRouteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BasicModule { }
