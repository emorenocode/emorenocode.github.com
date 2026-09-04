import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SocialNetwork } from '../social-network/social-network';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <img
        src="https://avatars.githubusercontent.com/u/64385843?s=400&u=8e007c9b9c6c765f720b3bd78f0aa79ff70364f1&v=4"
        alt=""
      />
      <h1>{{ name }}</h1>
      <h2>{{ subtitle }}</h2>
      <app-social-network></app-social-network>
    </header>
  `,
  styles: `
    header {
      grid-area: header;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 20px;
    }

    img {
      background-color: darkcyan;
      width: 200px;
      height: 200px;
      border-radius: 100px;
      box-shadow: 0px 0px 5px 0pc white;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [SocialNetwork],
})
export class Header {
  name: string = 'Enrique Moreno';
  subtitle: string = 'Software Developer';

  constructor() {}
}
