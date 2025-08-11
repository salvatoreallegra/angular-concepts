import { Routes } from '@angular/router';

// NOTE: each import includes the nested folder the CLI created
import { HomeComponent } from './features/home/home/home.component';
import { BindingComponent } from './features/binding/binding/binding.component';
import { DirectivesComponent } from './features/directives/directives/directives.component';
import { PipesComponent } from './features/pipes/pipes/pipes.component';
import { LifecycleComponent } from './features/lifecycle/lifecycle/lifecycle.component';
import { HttpDemoComponent } from './features/http/http-demo/http-demo.component';
import { FormsDemoComponent } from './features/forms/forms-demo/forms-demo.component';
import { SignalsPageComponent } from './features/signals/signals-page/signals-page.component';
import { FastListComponent } from './features/perf/fast-list/fast-list.component';

// Guard/Resolver files were generated flat under features/admin

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'binding', component: BindingComponent, title: 'Binding' },
  { path: 'directives', component: DirectivesComponent, title: 'Directives' },
  { path: 'pipes', component: PipesComponent, title: 'Pipes' },
  { path: 'lifecycle', component: LifecycleComponent, title: 'Lifecycle' },
  { path: 'http', component: HttpDemoComponent, title: 'HTTP' },
  { path: 'forms', component: FormsDemoComponent, title: 'Forms' },

  { path: 'signals', component: SignalsPageComponent, title: 'Signals' },
  { path: 'perf', component: FastListComponent, title: 'Perf' },
  {
    path: 'lazy',
    title: 'Lazy',
    loadComponent: () =>
      import('./features/lazy/demo-lazy/demo-lazy.component').then(
        (m) => m.DemoLazyComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
