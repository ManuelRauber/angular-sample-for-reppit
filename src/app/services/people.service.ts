import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

interface ApiResult {
  results: ApiPeople[];
}

interface ApiPeople {
  url: string;
  name: string;
}

export interface People {
  id: number;
  name: string;
}

export interface PeopleDetail {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
}

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {
  }

  list(): Observable<People[]> {
    const url = this.createApiUrl('people');

    // url = https://swapi.dev/api/people

    return this.http.get<ApiResult>(url)
      .pipe(
        map(apiResult => apiResult.results
          .map(item => {
            const split = item.url.split('/');

            return {
              name: item.name,
              id: +split[split.length - 2],
            };
          }),
        ),
      );
  }

  detail(id: number): Observable<PeopleDetail> {
    const url = this.createApiUrl(`people/${id}`);

    return this.http.get<PeopleDetail>(url);
  }

  private createApiUrl(url: string): string {
    // 'https://swapi.dev/api/' + url;
    return `https://swapi.dev/api/${url}`;
  }
}

// Dependency Injection

// Neue Anwendung: Word
// Word -> SpellChecker (unterkringelt rot)

/*

interface ISpellChecker {
  bool check(text);
}

class GermanSpellChecker implements ISpellChecker {
  bool check(text);
}

class EnglishSpellChecker implements ISpellChecker {
  bool check(text);
}

class Word {
  // Besser
  constructor(
    ISpellChecker spellChecker,
    ITableDings,
    IImageDings,
    IDrawDings,
    IToolbox,
    IBorderDings,
    IReviewDings
  ) {
     this.spellChecker = spellChecker;
  }

  // Blöd
  constructor() {
    if (Sprache == Deutsch)
      this.spellChecker = new GermanSpellChecker()
    else if (Sprache == Englisch)
      this.spellChecker = new EnglishSpellChecker()
  }
}

// Inversion of Control
var spellChecker = new GermanSpellChecker();


var word = new Word(spellChecker, ..., ..., ..., ..., ..., ...,...,..);

// Dependency Injection

// container
var container = new DIContainer();
container.register(ISpellChecker, GermanSpellChecker);
container.register(ITableDings, TableDings);
container.register(IImageDings, ImageDings);
container.register(I..., ...);

var word = container.resolve(Word);

*/
