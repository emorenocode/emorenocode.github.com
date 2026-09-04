import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-stack',
  template: `
    <section class="stack">
      <h2>Stack</h2>
      <div>
        <i class="fab fa-angular" title="Angular"></i>
        <i class="fab fa-react" title="React"></i>
        <i class="fab fa-vuejs" title="Vuejs"></i>
        <i class="fab fa-node" title="Nodejs"></i>
        <i class="fab fa-js-square" title="Javascript"></i>
        <i class="fab fa-html5" title="HTML5"></i>
        <i class="fab fa-css3" title="CSS3"></i>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: `
    .stack {
      display: grid;
      place-content: center;
      margin: 2rem 0;

      h2 {
        text-align: center;
      }

      div {
        padding: 1rem;
        display: flex;
        gap: 1rem;
        font-size: x-large;
      }
    }
  `,
})
export class Stack {
  constructor() {}
}
