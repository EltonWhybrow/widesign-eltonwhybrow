import { Component, Input } from '@angular/core';
import { HttpService } from '../../services/data-service.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html'
})
export class AccordionComponent {

  currentlySelectedQuestion: any;
  @Input() parentData: any | undefined;

  constructor(private httpService: HttpService) { }

  activateQuestion(questionID: any) {
    // this.currentlySelectedFaq === questionID ? this.currentlySelectedFaq = undefined : this.currentlySelectedFaq = questionID;
    if (this.currentlySelectedQuestion === questionID) {
      this.currentlySelectedQuestion = undefined;
    } else {
      this.currentlySelectedQuestion = questionID;
      this.getItemInView(window.event);
    }
  }

  // scroll accordian into view
  private getItemInView(event: any) {
    let anchor = event.target.parentNode.id;
    const scrollToElement = window.document.getElementById(anchor);
    setTimeout(() => {
      scrollToElement?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }, 400);
  }
}





