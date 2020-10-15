import { environment } from './../environments/environment';
import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders().set('Access-Control-Allow-Origin', 'http://localhost:4200')
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${environment.api}/heroes`, this.httpOptions).pipe(
        tap(_ => this.log(`fetched heroes`)),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHero(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${environment.api}/heroes/${id}`, this.httpOptions).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /**
   * POST: add a new hero to the server
   * @param hero
   */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${environment.api}/heroes`, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero with id=${newHero._id}`)),
      catchError(this.handleError<Hero>(`addHero`))
    );
  }

  /**
   * PUT: update the hero on the server.
   * The HttpClient.put() method takes three parameters:
   *  -> the URL
   *  -> the data to update (the modified hero in this case)
   *  -> options
   * @param hero
   */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(`${environment.api}/heroes/${hero._id}`, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero._id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
   * DELETE: delete the hero from the server
   */
  deleteHero(hero: Hero | string): Observable<Hero> {
    const id  = typeof hero === 'string' ? hero : hero._id;

    return this.http.delete<Hero>(`${environment.api}/heroes/${id}`, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if(!term.trim()) {
      return of([]);
    }

    return this.http.get<Hero[]>(`${environment.api}/heroes/?name=${term}`).pipe(
      tap(x => x.length ? this.log(`found heroes matching "${term}"`) : this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
