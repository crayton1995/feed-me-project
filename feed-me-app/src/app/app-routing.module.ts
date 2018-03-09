import { loginComponent } from './login/login.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CookTypeComponent } from './cook-food-type/cook-type.compoment';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch:'full'},
    {path: 'login', component: loginComponent },
    {path: 'cooking-type', component: CookTypeComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}