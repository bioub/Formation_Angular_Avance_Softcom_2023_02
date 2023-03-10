import { NgModule } from '@angular/core';
import { LoggerService } from '../logger.service';

import { SharedModule } from '../shared/shared.module';
import { UserAddComponent } from './user-add/user-add.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    UsersRoutingModule,
    SharedModule,
  ],
  declarations: [UsersListComponent, UserShowComponent, UserAddComponent],
  providers: [
    {
      provide: LoggerService,
      useValue: {
        log(msg) {
          console.log('UsersModule', msg);
        }
      }
    }
  ]
})
export class UsersModule { }
