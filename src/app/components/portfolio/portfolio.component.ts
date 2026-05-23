import { Component, OnInit } from '@angular/core';
import PORTFOLIO from '../../../assets/portfolio.json';
import { ImagePipe } from '../../pipes/image.pipe';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  imports: [ImagePipe],
})
export class PortfolioComponent implements OnInit {
  portfolios = PORTFOLIO.reverse();

  constructor() {}

  ngOnInit(): void {}
}
