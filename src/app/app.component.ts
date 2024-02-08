import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, CommonModule],
})
export class AppComponent {
  title = 'angular-client';

  calcValue: string = '0';
  funcT: any = 'No Function';
  firstNumber: number = 0;
  secondNumber: number = 0;
  previousOperationValue: string = '0';

  onClickValue(val: string, type: any) {
    if (type === 'number') {
      this.onClickNumber(val);
    } else {
      this.onClickFunction(val);
    }
  }

  onClickNumber(val: string) {
    if (this.calcValue == '0') {
      this.calcValue = val;
    } else {
      this.calcValue.length > 8
        ? this.calcValue
        : (this.calcValue = this.calcValue + val);
    }
  }

  onClickFunction(val: string) {
    if (val == '+' || val == '-' || val == '/' || val == '*' || val == '%') {
      this.secondNumber = parseFloat(this.calcValue);
      this.previousOperationValue = val;
      this.funcT = val;
      this.calcValue = '0';
    } else if (val === '=') {
      this.funcT = 'No Function';
      if (this.previousOperationValue == '+') {
        this.firstNumber = parseFloat(this.calcValue);
        this.calcValue = (this.secondNumber + this.firstNumber).toString();
        this.firstNumber = this.secondNumber + this.firstNumber;
      } else if (this.previousOperationValue == '-') {
        this.firstNumber = parseFloat(this.calcValue);
        this.calcValue = (this.secondNumber - this.firstNumber).toString();
        this.firstNumber = this.secondNumber - this.firstNumber;
      } else if (this.previousOperationValue == '*') {
        this.firstNumber = parseFloat(this.calcValue);
        this.calcValue = (this.secondNumber * this.firstNumber).toString();
        this.firstNumber = this.secondNumber * this.firstNumber;
      } else if (this.previousOperationValue == '/') {
        this.firstNumber = parseFloat(this.calcValue);
        this.calcValue = (this.secondNumber / this.firstNumber).toString();
        this.firstNumber = this.firstNumber / this.secondNumber;
      } else if (this.previousOperationValue == '%') {
        this.firstNumber = parseFloat(this.calcValue);
        this.calcValue = (this.secondNumber % this.firstNumber).toString();
        this.firstNumber = this.firstNumber % this.secondNumber;
      }
    } else if (val == 'c') {
      this.firstNumber = 0;
      this.secondNumber = 0;
      this.funcT = 'No Function';
      this.calcValue = '0';
    } else if (val == '.') {
      this.calcValue = this.calcValue + val;
    }
  }
}
