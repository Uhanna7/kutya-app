import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isPhonePortrait = false;

  constructor(private responsive: BreakpointObserver, private router: Router,
    private activatedRoute: ActivatedRoute) {
      console.log("routes");
      console.log(activatedRoute.snapshot.url); // array of states
      console.log(activatedRoute.snapshot.url[0]);

    }

  ngOnInit() {
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result) => {
      this.isPhonePortrait = false;

      if (result.matches) {
        this.isPhonePortrait = true;
      }
    });
  }

}
