import { NgModule } from '@angular/core';
/*

import { BugService } from '../bugs/bugs.service';
import { FeedService } from '../feeds/feeds.service';
import { InvoiceService } from '../invoices/invoices.service';
import { Iso3166Service } from '../iso3166s/iso3166s.service';
import { Iso639Service } from '../iso639s/iso639s.service';
import { LangerrService } from '../langerrs/langerrs.service';
import { LangService } from '../langs/langs.service';
import { Lang1Service } from '../langs1/langs1.service';
import { Lang2Service } from '../langs2/langs2.service';
import { Lang3Service } from '../langs3/langs3.service';
import { Lang4Service } from '../langs4/langs4.service';

import { LineitemService } from '../lineitems/lineitems.service';
import { PhotoService } from '../photos/photos.service';
import { PopupService } from '../popups/popups.service';
import { PostService } from '../posts/posts.service';

*/
import { CommentService } from '../comments/comments.service';
import { DayService } from '../days/days.service';
import { DomainService } from '../domains/domains.service';
import { DriveService } from '../drives/drives.service';
import { EventService } from '../events/events.service';
import { LetterService } from '../letters/letters.service';
import { LettextService } from '../lettexts/lettexts.service';
import { LetvarService } from '../letvars/letvars.service';
import { LogService } from '../logs/logs.service';
import { OutputService } from '../outputs/outputs.service';
import { PersonService } from '../people/people.service';
import { PlaceService } from '../places/places.service';
import { RideService } from '../rides/rides.service';
import { RunService } from '../runs/runs.service';
import { Sched86Service } from '../sched86s/sched86s.service';
import { ScheduleService } from '../schedules/schedules.service';
import { UserGridService } from '../usergrid/usergrid.service';
import { UserService } from '../users/users.service';
import { ZeroService } from '../zeros/zeros.service';

@NgModule({})
export class ServicesModule {
    static forRoot() {
        return {
            ngModule: ServicesModule,
            providers: [
              CommentService,
              DayService,
              DomainService,
              DriveService,
              EventService,
              LetterService,
              LogService,
              LettextService,
              LetvarService,
              OutputService,
              PersonService,
              PlaceService,
              RideService,
              RunService,
              Sched86Service,
              ScheduleService,
              UserGridService,
              UserService,
              ZeroService
       /*     [   ZeroService,       DomainService,
        ]LogService, BugService, CommentService,DayService, DriveService, EventService, FeedService,
         InvoiceService, Iso3166Service, Iso639Service,
         LangerrService, LangService, Lang1Service, Lang2Service, Lang3Service, Lang4Service,
         LetterService, LineitemService, OutputService, PersonService,
         PhotoService, PlaceService, PopupService, PostService, RideService, RunService, ScheduleService, UserService, ZeroService ]*/
     ]};
    }
}

export {
  CommentService,
  DayService,
  DomainService,
  DriveService,
  EventService,
  LetterService,
  LogService,
  LettextService,
  LetvarService,
  OutputService,
  PersonService,
  PlaceService,
  RideService,
  RunService,
  Sched86Service,
  ScheduleService,
  UserGridService,
  UserService,
  ZeroService
/*     BugService, FeedService,
    InvoiceService, Iso3166Service, Iso639Service,
    LangerrService, LangService, Lang1Service, Lang2Service, Lang3Service, Lang4Service,  LineitemService,
    PhotoService, PlaceService, PopupService, PostService,
  */
}
