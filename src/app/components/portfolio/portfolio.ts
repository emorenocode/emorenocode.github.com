import { Component, OnInit } from '@angular/core';
import PORTFOLIO from '../../../assets/portfolio.json';
import { ImagePipe } from '../../pipes/image.pipe';

@Component({
  selector: 'app-portfolio',
  template: `
    <section class="portfolio">
      <h2>Portfolio</h2>

      <div class="projects_container">
        <div class="projects">
          @for (portfolio of portfolios; track $index) {
            <div class="item">
              <div class="header">
                <a
                  [href]="portfolio.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    [src]="portfolio.img | image"
                    [alt]="portfolio.name"
                    [title]="portfolio.name"
                  />
                </a>
              </div>
              <div class="description">
                <span>{{ portfolio.name }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .portfolio {
      margin: 3rem auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        text-align: center;
      }

      .projects_container {
        height: 50vh;
        margin: 2rem 1rem;
        padding: 2rem;
        background-color: #659cbb61;
        border-radius: 1rem;
        box-shadow: 0 0 5px rgba(#000000, 0.5);
      }

      .projects {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        overflow: hidden;
        scrollbar-gutter: stable;
        padding: 0.5rem;
        overflow-y: auto;

        &::-webkit-scrollbar {
          width: 8px;
          height: 8px;
          background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background-color: #fff;
          border-radius: 20px;
        }

        .item {
          width: 220px;
          height: 200px;
          border-radius: 1rem;

          .header {
            height: 75%;
          }

          a > img {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            &:hover {
              box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.8);
            }
          }

          .description {
            padding-top: 0.5em;
            font-size: 0.8rem;
          }
        }
      }
    }
  `,
  imports: [ImagePipe],
})
export class Portfolio {
  portfolios = PORTFOLIO.reverse();

  constructor() {}
}
