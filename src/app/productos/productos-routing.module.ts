import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from '../components/productos/productos.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';

const routes: Routes = [
  { path: 'productos', component: ProductosComponent, children: [
    { path: 'editar', component: EditarProductoComponent },
    { path: 'agregar', component: AgregarProductoComponent },
    { path: 'listar', component: ListarProductosComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
