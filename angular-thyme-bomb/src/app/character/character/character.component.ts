import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  characterForm: FormGroup;
  showMaxValueWarning: boolean = false;
  showMinValueWarning: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) {
    let user = this.loginService.getUser();
    this.characterForm = this.formBuilder.group({
      attackMax: [user.attackMax, Validators.required],
      attackMin: [user.attackMin, Validators.required],
      defenseMax: [user.defenseMax, Validators.required],
      defenseMin: [user.defenseMin, Validators.required],
      chanceAttack: [user.chanceAttack, Validators.required],
      chanceDefense: [user.chanceDefense, Validators.required],
      chanceItem: [user.chanceItem, Validators.required],
      chanceGold: [user.chanceGold, Validators.required]
    });
  }

  ngOnInit() {
    this.characterForm.valueChanges.subscribe(() => {
      this.warningMaxValue();
      this.warningMinValue();
      this.checkMaxMin();
    });
  }

  checkMaxMin() {
    const attackMax = this.characterForm.get('attackMax')?.value;
    const attackMin = this.characterForm.get('attackMin')?.value;
    const defenseMax = this.characterForm.get('defenseMax')?.value;
    const defenseMin = this.characterForm.get('defenseMin')?.value;
  
    if (attackMax < attackMin) {
      this.characterForm.patchValue({
        attackMax: attackMin
      });
    }
  
    if (attackMin > attackMax) {
      this.characterForm.patchValue({
        attackMin: attackMax
      });
    }
  
    if (defenseMax < defenseMin) {
      this.characterForm.patchValue({
        defenseMax: defenseMin
      });
    }
  
    if (defenseMin > defenseMax) {
      this.characterForm.patchValue({
        defenseMin: defenseMax
      });
    }
  }

  warningMaxValue(): number {
    if (this.calculateTotalValue() > this.loginService.maxValueUser) {
      this.showMaxValueWarning = true;
    }  else {
      this.showMaxValueWarning = false;
    }
    return this.calculateTotalValue() - this.loginService.maxValueUser;
  }

  warningMinValue(): number {
    if (this.calculateTotalValue() < this.loginService.maxValueUser) {
      this.showMinValueWarning = true;
    }  else {
      this.showMinValueWarning = false;
    }
    return this.loginService.maxValueUser - this.calculateTotalValue();
    
  }
  calculateTotalValue(): number {
    let totalValue = 0;
    const formControls = this.characterForm.controls;
  
    for (const controlName in formControls) {
      if (formControls.hasOwnProperty(controlName)) {
        const controlValue = formControls[controlName].value;
        totalValue += controlValue;
      }
    }
  
    return totalValue;
  }

  saveCharacter() {
    //todo
    this.loginService.setUser(this.characterForm.value);
    this.back();
  }

  back() {
    this.router.navigateByUrl('/homepage');
  }

}