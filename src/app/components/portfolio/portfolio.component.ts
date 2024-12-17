import { Component, OnInit } from '@angular/core';
import PORTFOLIO from '../../../assets/portfolio.json';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  portfolios = PORTFOLIO.reverse();

  constructor() {}

  ngOnInit(): void {}
}
