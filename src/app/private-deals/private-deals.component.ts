import { AuthService } from './../auth/auth.service';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Deal } from "../deal";
import { DealService } from "../deal.service";

@Component({
  selector: "private-deals",
  templateUrl: "./private-deals.component.html",
  styleUrls: ["./private-deals.component.css"]
})
export class PrivateDealsComponent implements OnInit, OnDestroy {
  dealSub: Subscription;
  privateDeals: Deal[];
  error: any;

  constructor(public dealService: DealService, public authService: AuthService) {}

  ngOnInit() {
    this.dealSub = this.dealService.getPrivateDeals().subscribe(
      deals => {
        this.privateDeals = deals;
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
