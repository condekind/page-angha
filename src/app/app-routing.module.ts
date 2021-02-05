import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'


const routes: Routes = [
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
    path: 'extractor',
    loadChildren: () => import('./extractor/extractor.module').then(m => m.ExtractorModule),
  },
  {
    path: 'explore',
    loadChildren: () => import('./explore/explore.module').then(m => m.ExploreModule),
  },
  {
    path: 'chordAnalysis',
    loadChildren: () => import('./chordAnalysis/chordAnalysis.module').then(m => m.ChordAnalysisModule),
  },
  {
    path: 'staticProperties',
    loadChildren: () => import('./staticProperties/staticProperties.module').then(m => m.StaticPropertiesModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  },
  {
    path : '',
    redirectTo : '/home',
    pathMatch : 'full',
  },
  {
    path : '**',
    redirectTo : 'home',
    pathMatch : 'full',
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
