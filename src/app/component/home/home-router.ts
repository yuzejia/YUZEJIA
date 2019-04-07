// 模块内的路由设置

import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeIndexComponent } from './home-index/home-index.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {path: 'index', component: HomeIndexComponent},
  {path: 'content', component: HomeContentComponent},
  {path: 'user', component: ContentComponent},
];

export const HomeRouter: ModuleWithProviders = RouterModule.forChild(routes);
