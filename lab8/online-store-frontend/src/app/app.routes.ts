import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductItemComponent } from './components/product-item/product-item';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
    },
    {
        path: 'products',
        component: ProductListComponent,
    },
    {
        path: 'products/:id',
        component: ProductItemComponent,
    },
];
