import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <p>&copy;{{ currentYear }}</p>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: `
    footer {
      padding: 2rem;
    }

    p {
      text-align: center;
    }
  `,
})
export class Footer {
  currentYear = new Date().getFullYear();

  constructor() {}
}
