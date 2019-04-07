
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HomeRouter } from './home-router';
import { HomeIndexComponent } from './home-index/home-index.component';
import { HomeBgComponent } from './home-bg/home-bg.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ContentComponent } from './content/content.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { HomeSettingComponent } from './home-setting/home-setting.component';

@NgModule({
  imports: [
    HomeRouter,
    NgZorroAntdModule
  ],
  declarations: [
    HomeIndexComponent,
    HomeBgComponent,
    ContentComponent,
    HomeContentComponent,
    HomeSettingComponent
  ],
  exports: [
    HomeIndexComponent,
    HomeBgComponent
  ],
  entryComponents: [

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {
}
