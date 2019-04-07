import { clockRouter } from './clock-router';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClockIndexComponent } from './clock-index/clock-index.component';


@NgModule({
  imports: [
    clockRouter
  ],
  declarations: [

  ClockIndexComponent],
  exports: [
    ClockIndexComponent
  ],
  entryComponents: [

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClockModule {
}
