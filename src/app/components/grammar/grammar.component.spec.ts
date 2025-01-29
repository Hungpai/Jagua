import { ComponentFixture, TestBed } from "@angular/core/testing"

import { of } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { GrammarComponent } from "./grammar.component";
import { GrammarService } from "../../services/grammar.service";
import { Grammar } from "../../interfaces/grammar";

describe('Grammar Component', () => {
  let component: GrammarComponent;
  let fixture: ComponentFixture<GrammarComponent>;
  let gramService: GrammarService
  let mockData: Grammar[] = [
    {
        "id": 1,
        "grammarItems": [],
        "description": null,
        "header": "N₁ は N₂ です",
        "lection": 1
    },
    {
        "id": 2,
        "grammarItems": [],
        "description": null,
        "header": "N₁ は N₂ じゃ (では) ありません",
        "lection": 1
  }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrammarComponent],
      providers: [
        { provide: GrammarService, useValue: { getGrammar: () => of()}},
        { provide: ActivatedRoute, useValue: { snapshot: { params: { lection: 1 } } } }
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarComponent);
    component = fixture.componentInstance;
    gramService = TestBed.inject(GrammarService);
    spyOn(gramService, 'getGrammar').and.returnValue(of(mockData));
    fixture.autoDetectChanges();
  });

  it('should display all header', () => {
    const h5: HTMLElement[] = fixture.nativeElement.querySelectorAll('h5');
    h5.forEach((header, i) => {
      expect(header.textContent).toBe(mockData[i].header);
    })
  });  
});