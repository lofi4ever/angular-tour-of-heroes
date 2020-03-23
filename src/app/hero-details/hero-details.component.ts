import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';	

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
	hero: Hero

  constructor(
		private route: ActivatedRoute,
		private location: Location,
		private heroService: HeroService
	) { }

  ngOnInit(): void {
		this.getHero();
	}
	
	getHero(): void {
		let id = +this.route.snapshot.paramMap.get('id');
		console.log(id);
		this.heroService.getHero(id)
			.subscribe(hero => this.hero = hero);
	}

}
