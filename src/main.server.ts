import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { appConfig } from './app/app.config';

if (process.env['NODE_ENV'] === 'production') {
  enableProdMode();
}

const bootstrap = () => bootstrapApplication(AppComponent, appConfig);

export default bootstrap;
