import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-social-network',
  template: `
    <div class="social-media">
      <a href="https://twitter.com/emorenocode" title="@emorenocode"
        ><span class="social-media__icon"><i class="fab fa-twitter"></i></span
      ></a>
      <a href="https://www.linkedin.com/in/emorenocode/" title="@emorenocode"
        ><span class="social-media__icon"
          ><i class="fab fa-linkedin-in"></i></span
      ></a>
      <a href="https://github.com/emorenocode" title="@emorenocode"
        ><span class="social-media__icon"><i class="fab fa-github"></i></span
      ></a>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: `
    .social-media {
      width: 200px;
      display: flex;
      font-size: large;
      margin-top: 20px;
      justify-content: space-around;
      a {
        color: white;
      }
    }
  `,
})
export class SocialNetwork {
  constructor() {}
}
