import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

// Used accross many services
import { HTTP_PROVIDERS } from '@angular/http';

// Application starting point
import { Ng2dSidebarComponent } from './app/app.component';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(Ng2dSidebarComponent, [
  HTTP_PROVIDERS
]);
