import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css'],
})
export class PeopleDetailComponent {
  // http://localhost:4200/people/:peopleId

  people$ = this.activatedRoute.paramMap.pipe(
    map(paramMap => paramMap.get('peopleId')),
    filter((peopleId): peopleId is string => !!peopleId),
    switchMap(peopleId => this.peopleService.detail(+peopleId)),
  );

  constructor(
    private peopleService: PeopleService,
    private activatedRoute: ActivatedRoute,
  ) {
  }
}
