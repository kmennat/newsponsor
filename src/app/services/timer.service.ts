import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  invokeTimerStart = new EventEmitter();    
  invokeStopTimer = new EventEmitter();    
  subsVar: Subscription; 
  StopVar: Subscription; 

  onTimerStart() {    
    this.invokeTimerStart.emit();    
  }  
  onTimerStop() {    
    this.invokeStopTimer.emit();    
  } 
  constructor() { }
}
