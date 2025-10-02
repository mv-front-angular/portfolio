import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { PortfolioService } from 'src/app/services/data/portfolio.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  active = 0;
  jobs: any[] = [];
  
  constructor(
    public analyticsService: AnalyticsService,
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.portfolioService.getExperience().subscribe(data => {
      if (data) {
        this.jobs = data;
      }
    });
  }

}
