import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Deal } from "./deal";
import { throwError, Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DealService {
  private baseUrl = "http://localhost:3001/api/deals";

  constructor(private httpClient: HttpClient) {}

  getPublicDeals() {
    let finalUrl: string;
    finalUrl = this.baseUrl.concat("/public");

    return this.httpClient
      .get<Deal[]>(finalUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.error("An error occurred", err);
    return throwError(err);
  }
}
