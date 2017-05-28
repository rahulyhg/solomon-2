import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Letter } from './letter';
import { LetterService } from './letters.service';
import { AppService } from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.css']
})
export class LettersComponent implements OnInit {
  letters: Letter[];
  selectedLetter: Letter;
  term$ = new Subject<string>();

  constructor(
    private letterservice: LetterService,
    private router: Router,
    private appservice: AppService) {
    this.letterservice.searchLetters(this.term$).subscribe(results => this.letters = results);
    }
  getAllLetters(): void {
    this.letterservice
        .getAllLetters()
        .then(letters => this.letters = letters);
  }
searchLetters(term$) {
    this.term$.subscribe(term => this.searchLetters(term$));
}
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.letterservice.create(name)
      .then(letter => {
        this.letters.push(letter);
        this.selectedLetter = null;
      });
  }

  delete(letter: Letter): void {
    this.letterservice
        .delete(letter.Id)
        .then(() => {
          this.letters = this.letters.filter(h => h !== letter);
          if (this.selectedLetter === letter) { this.selectedLetter = null; }
        });
  }

  ngOnInit(): void {
    this.getAllLetters();
  }

  onSelect(letter: Letter): void {
    this.selectedLetter = letter;
  }
  onDeSelect(): void {
    this.selectedLetter = null;
  }

  gotoDetail(): void {
    this.router.navigate(['/letter', this.selectedLetter.Id]);
  }
}
