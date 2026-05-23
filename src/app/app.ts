import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Stack } from './components/stack/stack';
import { Portfolio } from './components/portfolio/portfolio';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [Header, Stack, Portfolio, Footer],
})
export class App {}
