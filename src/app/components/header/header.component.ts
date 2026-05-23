import { Component, OnInit } from '@angular/core';
import { SocialNetworkComponent } from '../social-network/social-network.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [SocialNetworkComponent],
})
export class HeaderComponent implements OnInit {
  name: string = 'Enrique Moreno';
  subtitle: string = 'Software Developer';

  constructor() {}

  ngOnInit(): void {}
}
