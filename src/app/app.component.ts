import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'assignment-3-practicing-directives';
  displayDetails: boolean = false;
  clicksLog = [];
  clickTotal = 0;
  toggleDisplay(event: Event) {
    this.clickTotal++;
    this.displayDetails = !this.displayDetails;
    this.clicksLog.push({ 
      clickTotal: this.clickTotal, 
      clickDate: new Date().toLocaleString(), 
      displayDetails:this.displayDetails
    })
  }
}
