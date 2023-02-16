import { ChangeDetectorRef, Component, DoCheck, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.scss']
})
export class Ex4Component implements OnInit, DoCheck {

  cptCanBeDividedBy10 = 0;

  constructor(private ngZone: NgZone, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    let cpt = 0;
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        cpt++;
        if (cpt % 10 === 0) {
          // this.ngZone.run(() => {
          //   this.cptCanBeDividedBy10 = cpt;
          // })
          this.cptCanBeDividedBy10 = cpt;
          this.cd.detectChanges();
        }
      }, 1000);
    })
  }

  log() {
    console.log('Ex4Component log');
  }

  ngDoCheck(): void {
    console.log('Ex4Component checked');

  }
}
