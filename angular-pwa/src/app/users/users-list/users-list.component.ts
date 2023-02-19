import { Component, Inject, OnInit, Self, SkipSelf } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, startWith, switchMap } from 'rxjs/operators';
import { LoggerService } from 'src/app/logger.service';

import { User } from '../../shared/models/user';
import { UserServiceInterface } from '../user-service.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [
    {
      provide: LoggerService,
      useValue: {
        log(msg) {
          console.log('UsersListComponent', msg);
        }
      }
    }
  ]
})
export class UsersListComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    @Inject(UserServiceInterface) private userService: UserServiceInterface,
    @Self() private logger: LoggerService,
    @SkipSelf() private loggerGlobal: LoggerService,
  ) {}

  ngOnInit() {
    this.logger.log('ngOnInit');
    this.loggerGlobal.log('ngOnInit');

    this.route.data.subscribe((data) => {
      this.title.setTitle(data.title);
    });

    this.users$ = this.userService.events
      .pipe(
        filter((e) => e === 'user.write'),
        startWith('user.write'),
        switchMap(() => this.userService.getList$())
      );

    // this.userService.events.next('user.write');

    // this.userService.getList$().subscribe(this.users$);
    // this.refreshList();
    // this.userService.events
    //   .pipe(
    //     filter(e => e === 'user.write')
    //   )
    //   .subscribe(e => this.refreshList());
  }

  public refreshList() {}
}
