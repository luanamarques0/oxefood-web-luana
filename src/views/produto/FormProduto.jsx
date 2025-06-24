import React, { useState, useEffect } from "react";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";

export default function FormProduto() {
    const [titulo, setTitulo] = useState();
    const [codigo, setCodigo] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoEntregaMinimo, setEntregaMinimo] = useState();
    const [tempoEntregaMaximo, setEntregaMaximo] = useState();

    const [listaCategoria, setListaCategoria] = useState([]);
    const [idCategoria, setIdCategoria] = useState();


    const { state } = useLocation();
    const [idProduto, setIdProduto] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8081/api/produto/" + state.id)
                .then((response) => {
                    setIdProduto(response.data.id)
                    setTitulo(response.data.titulo)
                    setCodigo(response.data.codigo)
                    setDescricao(response.data.descricao)
                    setValorUnitario(response.data.valorUnitario)
                    setEntregaMinimo(response.data.tempoEntregaMinimo)
                    setEntregaMaximo(response.data.tempoEntregaMaximo)
                    setIdCategoria(response.data.categoria.id)
                })
        }

        axios.get("http://localhost:8081/api/produto/categoria")
            .then((response) => {
                const dropDownCategorias = response.data.map(c => ({ text: c.descricao, value: c.id }));
                setListaCategoria(dropDownCategorias);
            })

    }, [state])


    function salvar() {

        let produtoRequest = {
            idCategoria: idCategoria,
            titulo: titulo,
            codigo: codigo,
            descricao: descricao,
            valorUnitario: valorUnitario,
            tempoEntregaMinimo: tempoEntregaMinimo,
            tempoEntregaMaximo: tempoEntregaMaximo
        }

        if (idProduto != null) {
            axios.put("http://localhost:8081/api/produto/" + idProduto, produtoRequest)
                .then((response) => { console.log('Produto alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alterar um Produto.') })

        } else {
            axios.post("http://localhost:8081/api/produto", produtoRequest)
                .then((response) => {
                    console.log('Produto cadastrado com sucesso.')
                    // console.log(produtoRequest)
                })
                .catch((error) => {
                    console.log("Erro ao inclui um produto")
                })
        }

    }

    return (
        <div>
            <MenuSistema tela='produto' />
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified' >
                    {idProduto === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idProduto !== undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />
                    <div style={{ marginTop: '4%' }}>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Título:'
                                    maxLength="100"
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='Código de Produto: '
                                    maxLength="200"
                                    value={codigo}
                                    onChange={e => setCodigo(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group widths="equal">
                                <Form.Select
                                    required
                                    fluid
                                    tabIndex='3'
                                    placeholder='Selecione'
                                    label='Categoria'
                                    options={listaCategoria}
                                    value={idCategoria}
                                    onChange={(e, { value }) => {
                                        setIdCategoria(value)
                                    }}
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    required={false}
                                    fluid
                                    label='Descrição: '
                                    maxLength="500"
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitário: '
                                    maxLength="10"
                                    value={valorUnitario}
                                    onChange={e => setValorUnitario(e.target.value)}
                                />
                                <Form.Input
                                    required={false}
                                    fluid
                                    label='Tempo de Entrega Mínimo em Minutos: '
                                    maxLength="10"
                                    value={tempoEntregaMinimo}
                                    onChange={e => setEntregaMinimo(e.target.value)}
                                />
                                <Form.Input
                                    required={false}
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos: '
                                    maxLength="10"
                                    value={tempoEntregaMaximo}
                                    onChange={e => setEntregaMaximo(e.target.value)}
                                />
                            </Form.Group>
                        </Form>

                        <div style={{ marginTop: '4%' }}>
                            <Link to={'/list-produto'}>
                                <Button
                                    type="button"
                                    inverted
                                    circular
                                    color='orange'
                                    icon
                                    labelPosition="left"
                                >
                                    <Icon name='reply' />
                                    Listar
                                </Button>
                            </Link>

                            <Button
                                type="button"
                                inverted
                                circular
                                color='blue'
                                icon
                                labelPosition="left"
                                floated="right"
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>
                        </div>
                    </div>

                </Container>
            </div>
        </div>
    );
}