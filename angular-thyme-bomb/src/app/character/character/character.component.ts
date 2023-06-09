import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  characterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.characterForm = this.formBuilder.group({
      attackMax: [5],
      attackMin: [1],
      defenseMax: [2],
      defenseMin: [0],
      chanceAttack: [7],
      chanceDefense: [7],
      chanceItem: [5],
      chanceGold: [5]
    });
  }

  saveCharacter() {
    //todo
  }
}