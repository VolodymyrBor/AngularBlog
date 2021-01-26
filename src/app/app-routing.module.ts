import {RouterModule, Routes} from '@angular/router'
import {NgModule} from '@angular/core'
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';

const routes: Routes = [
    {
        path: '', component: MainLayoutComponent, children: [

        ]
    },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
