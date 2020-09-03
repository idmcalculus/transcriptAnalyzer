import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Agent, Calltype, Calls, Transcript } from '../components/classes';

@Injectable({
  providedIn: 'root'
})
export class TranscriptService {

  constructor(private http: HttpClient) { }

  private agentUrl = 'api/agents';
  private callTypeUrl = 'api/calltypes';
  private callsUrl = 'api/calls';
  private transcriptUrl = 'api/transcripts';

  getAgents(): Observable<Agent[]> {
    console.log('Getting all agents from API');
    return this.http.get<Agent[]>(this.agentUrl)
      .pipe(
        tap(_ => console.log('fetched agents')),
        catchError(this.handleError<Agent[]>('getAgents', []))
      );
  }

  getCallTypes(): Observable<Calltype[]> {
    console.log('Getting all calltypes from API');
    return this.http.get<Calltype[]>(this.callTypeUrl)
      .pipe(
        tap(_ => console.log('fetched calltypes')),
        catchError(this.handleError<Calltype[]>('getCalltypes', []))
      );
  }

  getCalls(): Observable<Calls[]> {
    console.log('Getting all calls from API');
    return this.http.get<Calls[]>(this.callsUrl)
      .pipe(
        tap(_ => console.log('fetched calls')),
        catchError(this.handleError<Calls[]>('getCalls', []))
      );
  }

  getTranscripts(): Observable<Transcript[]> {
    console.log('Getting all transcripts from API');
    return this.http.get<Transcript[]>(this.transcriptUrl)
      .pipe(
        tap(_ => console.log('fetched transcripts')),
        catchError(this.handleError<Transcript[]>('getTranscripts', []))
      );
  }

  // Handle Http operation that failed.
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}
}
