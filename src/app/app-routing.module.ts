import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'gender',
    loadChildren: () => import('./gender/gender.module').then( m => m.GenderPageModule)
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.module').then( m => m.CountryPageModule)
  },
  {
    path: 'age',
    loadChildren: () => import('./age/age.module').then( m => m.AgePageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
