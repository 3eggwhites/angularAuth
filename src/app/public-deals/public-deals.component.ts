import { AuthService } from './../auth/auth.service';
import { DealService } from "./../deal.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Deal } from "../deal";

@Component({
  selector: "public-deals",
  templateUrl: "./public-deals.component.html",
  styleUrls: ["./public-deals.component.css"]
})
export class PublicDealsComponent implements OnInit, OnDestroy {
  dealSub: Subscription;
  publicDeals: Deal[];
  error: any;

  constructor(public dealService: DealService, public authService: AuthService) {}

  ngOnInit() {
    this.dealSub = this.dealService.getPublicDeals().subscribe(
      deals => {
        this.publicDeals = deals;
      },
      err => {
        console.log(err);
        this.error = err;
      }
    );
  }

  ngOnDestroy() {
    this.dealSub.unsubscribe;
  }
}
