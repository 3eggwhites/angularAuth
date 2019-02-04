import { AuthService } from "./auth/auth.service";
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Deal } from "./deal";
import { throwError, Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DealService {
  private baseUrl = "http://localhost:3001/api/deals";

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  getPublicDeals() {
    let finalUrl: string;
    finalUrl = this.baseUrl.concat("/public");

    return this.httpClient
      .get<Deal[]>(finalUrl)
      .pipe(catchError(this.handleError));
  }

  getPrivateDeals() {
    let finalUrl: string;
    finalUrl = this.baseUrl.concat("/private");
    return this.httpClient
      .get<Deal[]>(finalUrl, {
        headers: new HttpHeaders().set(
          "Authorization",
          `Bearer ${this.authService.accessToken}`
        )
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.error("An error occurred", err);
    return throwError(err);
  }

  purchase(item) {
    alert(`You bought the: ${item.name}`);
  }
}
