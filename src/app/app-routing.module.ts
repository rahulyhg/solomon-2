import { NgModule } from '@angular/core';
// import { AgmCoreModule } from 'angular2-google-maps/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
const appRoutes: Routes = [
/*   {path: 'bugs', loadChildren:'./bugs/bugs.module#BugsModule'},
    {path: 'langs', loadChildren:'./langs/langs.module#LangsModule'},
    {path: 'langs1', loadChildren:'./langs1/langs1.module#Langs1Module'},
    {path: 'langs2', loadChildren:'./langs2/langs2.module#Langs2Module'},
    {path: 'langs3', loadChildren:'./langs3/langs3.module#Langs3Module'},
    {path: 'langs4', loadChildren:'./langs4/langs4.module#Langs4Module'},
    {path: 'langerrs', loadChildren:'./langerrs/langerrs.module#LangerrsModule'},
    {path: 'iso639s', loadChildren:'./iso639s/iso639s.module#Iso639sModule'},
    {path: 'iso3166s', loadChildren:'./iso3166s/iso3166s.module#Iso3166sModule'},
    {path: 'invoices', loadChildren:'./invoices/invoices.module#InvoicesModule'},
    {path: 'lineitems', loadChildren:'./lineitems/lineitems.module#LineitemsModule'},
    {path: 'photos', loadChildren:'./photos/photos.module#PhotosModule'},
    {path: 'popups', loadChildren:'./popups/popups.module#PopupsModule'},
    {path: 'posts', loadChildren:'./posts/posts.module#PostsModule'},
    {path: 'feeds', loadChildren:'./feeds/feeds.module#FeedsModule'}
 * 

*/
    {path: 'comments', loadChildren: './comments/comments.module#CommentsModule'},
    {path: 'days', loadChildren: './days/days.module#DaysModule'},
    {path: 'domains', loadChildren: './domains/domains.module#DomainsModule'},
    {path: 'drives', loadChildren: './drives/drives.module#DrivesModule'},
    {path: 'events', loadChildren: './events/events.module#EventsModule'},
    {path: 'lettexts', loadChildren: './lettexts/lettexts.module#LettextsModule'},
    {path: 'letvars', loadChildren: './letvars/letvars.module#LetvarsModule'},
    {path: 'letters', loadChildren: './letters/letters.module#LettersModule'},
    {path: 'logs', loadChildren: './logs/logs.module#LogsModule'},
    {path: 'outputs', loadChildren: './outputs/outputs.module#OutputsModule'},
    {path: 'people', loadChildren: './people/people.module#PeopleModule'},
    {path: 'places', loadChildren: './places/places.module#PlacesModule'},
    {path: 'rides', loadChildren: './rides/rides.module#RidesModule'},
    {path: 'runs', loadChildren: './runs/runs.module#RunsModule'},
    {path: 'sched86s', loadChildren: './sched86s/sched86s.module#Sched86sModule'},
    {path: 'schedules', loadChildren: './schedules/schedules.module#SchedulesModule'},
    {path: 'usergrid', loadChildren: './usergrid/usergrid.module#UserGridModule'},
    {path: 'users', loadChildren: './users/users.module#UsersModule'},
    {path: 'zeros', loadChildren: './zeros/zeros.module#ZerosModule'}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes),
 /*AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDkNUplKQEHpgeBuc4KYEAwg1wR1Ec_yEs'
    })*/
     ],
  exports: [ RouterModule ],
  providers: []
})

export class AppRoutingModule {}
