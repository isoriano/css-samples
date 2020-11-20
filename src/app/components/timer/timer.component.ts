import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {

  editable: string;

  hours = '00';
  minutes = '00';
  seconds = '00';

  running: boolean;
  finished: boolean;

  private intervalId: NodeJS.Timeout;

  focused(timeSection: string) {
    this.editable = timeSection;
  }

  clear() {
    this.hours = '00';
    this.minutes = '00';
    this.seconds = '00';
  }

  setTimer(numb: number) {
    if (this.running) {
      return;
    }

    switch (this.editable) {
      case 'h': {
        this.hours = this.mapTimeValue(this.hours, numb, 23);
        break;
      }
      case 'm': {
        this.minutes = this.mapTimeValue(this.minutes, numb, 59);
        break;
      }
      case 's': {
        this.seconds = this.mapTimeValue(this.seconds, numb, 59);
        break;
      }
    }
  }

  play() {
    let totalSeconds = this.calculateTotalInSeconds();
    if (totalSeconds === 0) {
      return;
    }

    this.running = true;
    this.intervalId = setInterval(() => {
      totalSeconds = totalSeconds - 1;
      console.log(totalSeconds);
      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor(totalSeconds % 3600 / 60);
      const s = Math.floor(totalSeconds % 3600 % 60);

      this.hours = h > 0 ? `${h}` : '00';
      this.minutes = m > 0 ? `${m}` : '00';
      this.seconds = s > 0 ? `${s}` : '00';

      if (totalSeconds === 0) {
        this.running = false;
        clearInterval(this.intervalId);
        this.finished = true;
        setTimeout(() => {
          this.finished = false;
        }, 500);
      }
    }, 1000);
  }

  pause() {
    clearInterval(this.intervalId);
    this.running = false;
  }

  stop() {
    clearInterval(this.intervalId);
    this.running = false;
    this.clear();
  }

  private mapTimeValue(timeSection: string, numb: number, maxValue: number) {
    let tempValue = `${+timeSection}`;
    tempValue = `${tempValue.length === 2 ? '' : +tempValue}${numb}`;
    if (tempValue.length === 1) {
      tempValue = `0${tempValue}`;
    }
    if (+tempValue > maxValue) {
      tempValue = `${maxValue}`;
    }
    return tempValue;
  }

  private calculateTotalInSeconds() {
    const hoursInSeconds = +this.hours > 0 ? +this.hours * 3600 : 0;
    const minutesInSeconds = +this.minutes > 0 ? +this.minutes * 60 : 0;

    return hoursInSeconds + minutesInSeconds + +this.seconds;
  }
}
