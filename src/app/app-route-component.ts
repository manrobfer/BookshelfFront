import { RouterModule, Routes } from "@angular/router";
import { CategoryComponent } from "./category/category.component";
import { AuthorComponent } from "./author/author.component";
import { PressComponent } from "./Press/press.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";


const router: Routes = [
    {path: 'category', component: CategoryComponent},
    {path: 'author', component: AuthorComponent},
    {path: 'press', component: PressComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '', component: DashboardComponent}

  ]

  @NgModule({
      declarations: [],
      imports: [RouterModule.forRoot(router)],
      exports: [RouterModule]
  })


  export class AppRouterComponent {}