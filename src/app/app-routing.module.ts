import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'


const routes: Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full',
  },
  {
    path : 'home',
    loadChildren : () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'benchmarks',
    loadChildren: () => import('./benchmarks/benchmarks.module').then(m => m.BenchmarksModule),
  },
  {
    path: 'crawler',
    loadChildren: () => import('./crawler/crawler.module').then(m => m.CrawlerModule),
  },
  {
    path: 'reconstructor',
    loadChildren: () => import('./reconstructor/reconstructor.module').then(m => m.ReconstructorModule),
  },
  {
    path: 'extractor',
    loadChildren: () => import('./extractor/extractor.module').then(m => m.ExtractorModule),
  },
  {
    path: 'explore',
    loadChildren: () => import('./explore/explore.module').then(m => m.ExploreModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
