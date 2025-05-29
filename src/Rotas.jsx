import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import FormEntregador from './views/entregador/FormEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';
import ListCliente from './views/cliente/ListCliente';
import ListEntregador from './views/entregador/ListEntregador';
import FormCategoriaProduto from './views/categoriaProduto/FormCategoriaProduto';
import { ListCategoriaProduto } from './views/categoriaProduto/ListCategoriaProduto';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="list-produto" element={ <ListProduto/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="list-produto-categoria" element={ <ListCategoriaProduto/> } />
                <Route path="form-produto-categoria" element={ <FormCategoriaProduto/> } />
                <Route path="list-entregador" element={ <ListEntregador/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
            </Routes>
        </>
    )
}

export default Rotas;
