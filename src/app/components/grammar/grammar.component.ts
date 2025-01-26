import { Component, OnInit } from '@angular/core';
import { Grammar } from '../../interfaces/grammar';
import { GrammarService } from '../../services/grammar.service';
import { GrammarItemComponent } from '../grammar-item/grammar-item.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { OrderByPipePipe } from '../../order-by-pipe.pipe';

@Component({
  selector: 'app-grammar',
  imports: [GrammarItemComponent, OrderByPipePipe],
  templateUrl: './grammar.component.html',
  styleUrl: './grammar.component.css'
})
export class GrammarComponent implements OnInit {
  grammar: Grammar[] = [];
  lection: number = 1;

  constructor(
    private gramService: GrammarService,
    private activatedRoute: ActivatedRoute
  ) {
    this.lection = this.activatedRoute.snapshot.params['lection']
  }

  ngOnInit(): void {
    this.getGrammar();
  }

  getGrammar() {
    this.gramService.getGrammar(this.lection).subscribe(
      data => this.grammar = data
    )
  }
}
