import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionItemComponent } from './accordion-item.component';

describe('AccordionItemComponent', () => {
  let component: AccordionItemComponent;
  let fixture: ComponentFixture<AccordionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create accordion item component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the faq id next to the faq question', () => {
    // arrange
    fixture.componentInstance.id = '1';
    const compiled = fixture.nativeElement as HTMLElement;
    // act
    fixture.detectChanges();
    // assert
    expect(compiled.querySelector('.question span')?.textContent).toContain('Q1');
  });

  it('should render the faq heading in the h2', () => {
    // arrange
    fixture.componentInstance.question = 'Question heading';
    const compiled = fixture.nativeElement as HTMLElement;
    // act
    fixture.detectChanges();
    // assert
    expect(compiled.querySelector('h2')?.textContent).toContain('Question heading');
  });

  it('should render the faq question in the paragraph tag', () => {
    // arrange
    fixture.componentInstance.answer = 'Answer to question';
    const compiled = fixture.nativeElement as HTMLElement;
    // act
    fixture.detectChanges();
    // assert
    expect(compiled.querySelector('.answer p')?.textContent).toContain('Answer to question');
  });
});
