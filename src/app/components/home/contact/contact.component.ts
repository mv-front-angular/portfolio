import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { PortfolioService } from 'src/app/services/data/portfolio.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactData: any;

  constructor(
    public analyticsService: AnalyticsService,
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.portfolioService.getContact().subscribe(data => {
      if (data && data.length > 0) {
        this.contactData = data[0];
      }
    });
  }

}
