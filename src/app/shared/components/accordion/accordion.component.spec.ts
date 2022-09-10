import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { HttpService } from '../../services/data-service.service';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  let mockHttpService: any;
  let FAQS: { id: number; question: string; answer: string; }[];

  // @Component({
  //   selector: 'app-accordion-item',
  //   template: '<div></div>',
  // })
  // class FakeAccordionItemComponent {
  //   @Input() id: string | undefined;
  //   @Input() question: string | undefined;
  //   @Input() answer: string | undefined;
  // }

  beforeEach(async () => {
    FAQS = [
      { id: 1, question: 'queston 1', answer: 'answer 1' },
      { id: 2, question: 'queston 2', answer: 'answer 2' },
      { id: 3, question: 'queston 3', answer: 'answer 3' }
    ]
    mockHttpService = jasmine.createSpyObj(['getFaqs']);

    await TestBed.configureTestingModule({
      declarations: [
        AccordionComponent,
        // FakeAccordionItemComponent,
        AccordionItemComponent
      ],
      providers: [
        { provide: HttpService, useValue: mockHttpService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    // return mocked faqs
    mockHttpService.getFaqs.and.returnValue(of(FAQS));
    fixture.detectChanges();
  });

  it('should set faqs correctly from service', () => {
    // assert
    expect(fixture.componentInstance.allFaqs?.length).toBe(3);
  });

  it('should create accordion component', () => {
    // assert
    expect(component).toBeTruthy();
  });

  it('should render heading', () => {
    // act
    const fixture = TestBed.createComponent(AccordionComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    //assert
    expect(compiled.querySelector('h1')?.textContent).toContain('Have a question? We can help');
  });

  it('should render each faq as a accordion item component', () => {
    // arrange
    mockHttpService.getFaqs.and.returnValue(of(FAQS));
    // act
    fixture.detectChanges();
    // assert
    const faqItemDEs = fixture.debugElement.queryAll(By.directive(AccordionItemComponent));
    expect(faqItemDEs.length).toEqual(3);
  })

  it('should render question matchs one passed in', () => {
    // arrange
    mockHttpService.getFaqs.and.returnValue(of(FAQS));
    // act
    fixture.detectChanges();
    // assert
    const faqItemDEs = fixture.debugElement.queryAll(By.directive(AccordionItemComponent));
    for (let i = 0; i < faqItemDEs.length; i++) {
      expect(faqItemDEs[i].componentInstance.question).toEqual(FAQS[i].question);
    }
  })

  it('should render active class on current accordion item selected', () => {
    // arrange
    mockHttpService.getFaqs.and.returnValue(of(FAQS));
    const compiled = fixture.nativeElement as HTMLElement;
    // act
    const button = fixture.debugElement.query(By.css('.faq-1')).nativeElement;
    button.click();
    fixture.detectChanges();
    // assert
    expect(compiled.querySelector('.faq-1')?.classList).toContain('active');
  })
});
