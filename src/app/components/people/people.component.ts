import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';
import { ListItem } from '../list/list.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  peoples$ = this.peopleService.list();

  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  detail(listItem: ListItem) {
    // Absolute Navigation
    // this.router.navigate(['/people', listItem.id]);
    // -> /people/123

    this.router.navigate([listItem.id], { relativeTo: this.activatedRoute });
    // activatedRoute: /people
    // relative Navigation: 123
    // zusammengebaute URL: /people/123
  }
}
