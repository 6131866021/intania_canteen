import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'menu1',
    loadChildren: () => import('./menu1/menu1.module').then( m => m.Menu1PageModule)
  },
  {
    path: 'menu2',
    loadChildren: () => import('./menu2/menu2.module').then( m => m.Menu2PageModule)
  },
  {
    path: 'menu3',
    loadChildren: () => import('./menu3/menus.module').then( m => m.MenusPageModule)
  },
  {
    path: 'menu4',
    loadChildren: () => import('./menu4/menu4.module').then( m => m.Menu4PageModule)
  },
  {
      path: 'menu5',
      loadChildren: () => import('./menu5/menu5.module').then( m => m.Menu5PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
