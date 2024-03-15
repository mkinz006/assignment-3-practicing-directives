import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-click-log',
  templateUrl: './click-log.component.html',
  styles: [`
  .overFive{
    color: white;
  }`]
})
export class ClickLogComponent {
getColor() {
if(this.clickTotal > 4) return 'blue';
}
  @Input() clickTotal : number;
  @Input() displayDetails: boolean;
  @Input() clickDate : string;
}
