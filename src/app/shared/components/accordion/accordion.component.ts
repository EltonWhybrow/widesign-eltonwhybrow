import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/data-service.service';
import { IFaq } from '../../models/faq-interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html'
})
export class AccordionComponent implements OnInit {

  allFaqs: IFaq[] | undefined;
  currentlySelectedFaq: any;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getFaqs()
      .subscribe(
        (data: IFaq[]) => this.allFaqs = data,
        (error: any) => console.log(error),
        () => console.log('completed')
      );
  }

  activateFaq(faqId: any) {
    // this.currentlySelectedFaq === faqId ? this.currentlySelectedFaq = undefined : this.currentlySelectedFaq = faqId;
    if (this.currentlySelectedFaq === faqId) {
      this.currentlySelectedFaq = undefined;
    } else {
      this.currentlySelectedFaq = faqId;
      this.getFaqInView(window.event);
    }
  }

  // scroll accordian into view
  private getFaqInView(event: any) {
    let anchor = event.target.parentNode.id;
    const scrollToElement = window.document.getElementById(anchor);
    setTimeout(() => {
      scrollToElement?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    }, 400);
  }
}





