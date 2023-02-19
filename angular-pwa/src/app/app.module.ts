import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { MenuComponent } from './core/menu/menu.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { UserService } from './users/user.service';
import { of, Subject } from 'rxjs';
import { UserServiceInterface } from './users/user-service.interface';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, HomeComponent, MenuComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    SharedModule,
    TodosModule,
    UsersModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    // {
    //   provide: UserService,
    //   useValue: {
    //     events: new Subject<string>(),
    //     getList$() {
    //       return of([{id: 1, name: 'Toto'}])
    //     }
    //   }
    // }
    // {
    //   provide: UserService,
    //   useFactory: (httpClient) => {
    //     return new GenericService(httpClient, 'https://jsonplaceholder.typicode.com/users');
    //   },
    //   deps: [HttpClient]
    // }
    // {
    //   provide: UserService,
    //   useClass: UserService,
    // }
    // UserService
    // {
    //   provide: UserService,
    //   useExisting: UserProdService,
    // }
    {
      provide: UserServiceInterface,
      useExisting: UserService,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
