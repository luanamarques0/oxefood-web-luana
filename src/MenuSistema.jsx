import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { logout } from './views/util/AuthenticationService';

export default function MenuSistema(props) {

    return (
        <>
            <Menu inverted>

                <Menu.Item
                    className='navbar__item--mobile'
                    onClick={logout}
                    content='Sair'
                    as={Link}
                    to='/'
                />

                <Menu.Item
                    content='Home'
                    active={props.tela === 'home'}
                    as={Link}
                    to='/'
                />

                <Menu.Item
                    content='Cliente'
                    active={props.tela === 'cliente'}
                    as={Link}
                    to='/list-cliente'
                />

                <Menu.Item
                    content='Produto'
                    active={props.tela === 'produto'}
                    as={Link}
                    to='/list-produto'
                />

                <Menu.Item
                    content='categoria-produto'
                    active={props.tela === 'categoriaProduto'}
                    as={Link}
                    to='/list-produto-categoria'
                />

                <Menu.Item
                    content='Entregador'
                    active={props.tela === 'entregador'}
                    as={Link}
                    to='/list-entregador'
                />
                <Menu.Item
                    content='Comprador'
                    active={props.tela === 'comprador'}
                    as={Link}
                    to='/list-comprador'
                />

            </Menu>
        </>
    )
}
