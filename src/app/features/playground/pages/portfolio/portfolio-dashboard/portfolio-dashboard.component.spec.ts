import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { cold, getTestScheduler } from 'jasmine-marbles';


import { HeadingComponent } from 'src/app/shared/components/heading/heading.component';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { PortfolioDashboardComponent } from './portfolio-dashboard.component';
import { IPortfolio } from 'src/app/shared/models/portfolio-interface';
import { HttpService } from 'src/app/shared/services/http-service.service';
import { By } from '@angular/platform-browser';


const testPortfolio: IPortfolio[] = [
  {
    id: 1,
    heading: "ingenie Business",
    body: "<strong>body</strong>.",
    footer: [
      "Angular",
      "NodeJS",

    ],
    url: "ingenie-business",
    imageName: "ig-business-app",
    assets: [
      {
        name: "Screencast of the app",
        url: "/assets/video/ingenie-business/ingenieBusiness-telematics.mp4",
        imgJpg: "/assets/imgs/ingenie-business/assets-ig-bus-maskhead.jpg",
        imgWebp: "/assets/imgs/ingenie-business/assets-ig-bus-maskhead.webp"
      }
    ]
  },
  {
    id: 2,
    heading: "ingenie Business2",
    body: "<strong>body2</strong>.",
    footer: [
      "Angular2",
      "NodeJS2",

    ],
    url: "ingenie-business2",
    imageName: "ig-business-app",
    assets: [
      {
        name: "Screencast of the app2",
        url: "/assets/video/ingenie-business/ingenieBusiness-telematics.mp4",
        imgJpg: "/assets/imgs/ingenie-business/assets-ig-bus-maskhead.jpg",
        imgWebp: "/assets/imgs/ingenie-business/assets-ig-bus-maskhead.webp"
      }
    ]
  }];


class HttpServiceStub {
  getPortfolioInfo() {
    const testPortfolio$ = cold('--x|', { x: testPortfolio });
    return testPortfolio$
  }
}

describe('PortfolioDashboardComponent', () => {
  let portfolioDashboardComponent: PortfolioDashboardComponent;
  let fixture: ComponentFixture<PortfolioDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioDashboardComponent, HeadingComponent, SpinnerComponent],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .overrideComponent(PortfolioDashboardComponent, {
        set: {
          providers: [
            {
              provide: HttpService,
              useClass: HttpServiceStub,
            },
          ],
        },
      })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDashboardComponent);
    portfolioDashboardComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(portfolioDashboardComponent).toBeTruthy();
  });

  it('created and returns portfolio data',
    waitForAsync(() => {
      fixture.whenStable().then(() => {
        getTestScheduler().flush(); // flush the observables
        fixture.detectChanges();
        expect(portfolioDashboardComponent).toBeDefined();
        // console.log('>>>oneTestimonial>>>', servicesComponent.oneTestimonial);
        // console.log('>>>testTestimonials>>>', testTestimonials[0]);
        expect(portfolioDashboardComponent.allPortfolioData).toEqual(testPortfolio);
      });
    })
  );

  it('verify html for portfolio data',
    waitForAsync(() => {
      fixture.whenStable().then(() => {
        // Arrange
        getTestScheduler().flush(); // flush the observables
        fixture.detectChanges();
        // Act
        const headerElements = fixture.debugElement.queryAll(By.css('[data-testid="header"]'));
        const imageElements = fixture.debugElement.queryAll(By.css('[data-testid="portfolioImage"]'));
        // console.log('>>>headerElements>>>', headerElements);
        // console.log('>>>debugElement>>>', fixture.debugElement);
        // console.log('>>>fixture>>>', fixture);
        // console.log('>>>nativeElement>>>', fixture.nativeElement);
        // console.log('>>>componentInstance>>>', fixture.componentInstance);
        // Assert
        headerElements.forEach((element, index) => {
          expect(element.nativeElement.textContent).toEqual(testPortfolio[index].heading);
        });
        imageElements.forEach((element, index) => {
          // expect(element.nativeElement.src).toContain(testPortfolio[index].imageName);
          // expect(element.nativeElement.alt).toEqual(testPortfolio[index].imageName);
        });
      });
    })
  );

});
