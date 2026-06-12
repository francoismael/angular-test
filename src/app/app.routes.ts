import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './auth/component/login/login.component';
import { UserListComponent } from './user/component/user-list/user-list.component';
import { authGuard } from './auth/guards/auth.guard';

export const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: '', 
            redirectTo: 'login',
            pathMatch: 'full'
        },
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'users',
            component: UserListComponent,
            canActivate: [authGuard]
        }
    ]
}];
