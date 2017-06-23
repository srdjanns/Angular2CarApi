import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {CarsComponent} from "./components/cars.component";

const appRoutes: Routes = [

  {
    path: 'cars',
    component: CarsComponent,
  },

  {
    path: '**',
    component: CarsComponent,
  },

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
