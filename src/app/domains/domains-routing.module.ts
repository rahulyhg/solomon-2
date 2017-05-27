import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomainComponent } from './domain.component';
import { DomainsComponent } from './domains.component';


const domainroutes: Routes = [
    { path: '', component: DomainsComponent},
    { path: ':id', component: DomainComponent}
   ];
@NgModule({
  imports: [ RouterModule.forChild(domainroutes) ],
  exports: [ RouterModule ]
})


export class DomainsRoutingModule {}
