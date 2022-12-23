import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChariComponent } from './basic/chari/chari.component';
import { CounterComponent } from './basic/counter/counter.component';
import { CfatherComponent } from './basic/cfather/cfather.component';
import { CfatherSonComponent } from './basic/cfather-son/cfather-son.component';
import { CounterRouteComponent } from './basic/counter-route/counter-route.component';


const routes: Routes = [


    { path: 'basic/counter', component: CounterComponent  },
    { path: 'basic/counter/:initial', component: CounterRouteComponent  },
    { path: 'basic/chari', component: ChariComponent },
    { path: 'basic/cfather', component: CfatherComponent },
    { path: 'basic/cfather-son', component: CfatherSonComponent },
    { path: '**', redirectTo: 'basic/counter' },
    


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
