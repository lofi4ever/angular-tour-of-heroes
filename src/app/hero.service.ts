import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessagesService } from './messages.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

	constructor( private messagesService: MessagesService ) { }

	getHero(id: number): Observable<Hero> {
		this.messagesService.add(`HeroService: fetched hero id=${id}`);
		return of(HEROES.find(hero => hero.id === id));
	}
	
	getHeroes(): Observable<Hero[]> {
		this.messagesService.add('Fetched heroes');
		return of(HEROES);
	}
}
