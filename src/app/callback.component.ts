import { AuthService } from "./auth/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "callback",
  template: `
    <p>
      Loading....
    </p>
  `,
  styles: []
})
export class CallbackComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.handleLoginCallback();
  }
}
