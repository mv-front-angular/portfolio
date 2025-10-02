import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { PortfolioService } from 'src/app/services/data/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutData: any;

  constructor(
    public analyticsService: AnalyticsService,
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.portfolioService.getAboutMe().subscribe(data => {
      if (data && data.length > 0) {
        this.aboutData = data[0];
      }
    });
  }

}
