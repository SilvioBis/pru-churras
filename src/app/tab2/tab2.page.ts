import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  pontosTimeA: number = 0;
  pontosTimeB: number = 0;
  vitoriasTimeA: number = 0;
  vitoriasTimeB: number = 0;

  constructor() {}

  pontuar(pontos: number, time: string) {
    if (time === 'timeA') {
      this.pontosTimeA += pontos;
    } else if (time === 'timeB') {
      this.pontosTimeB += pontos;
    }

    if (this.pontosTimeA >= 12) {
      this.vitoriasTimeA++;
      this.resetar();
    } else if (this.pontosTimeB >= 12) {
      this.vitoriasTimeB++;
      this.resetar();
    }
  }

  resetar() {
    this.pontosTimeA = 0;
    this.pontosTimeB = 0;

  }

  zerarVitorias(){
    this.vitoriasTimeA = 0;
    this.vitoriasTimeB = 0;
  }
}
