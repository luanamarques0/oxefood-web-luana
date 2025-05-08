import React, { useState } from "react";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";

export default function FormProduto() {
    const [titulo, setTitulo] = useState();
    const [codigo, setCodigo] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoEntregaMinimo, setEntregaMinimo] = useState();
    const [tempoEntregaMaximo, setEntregaMaximo] = useState();

    function salvar(){

        let produtoRequest = {
            titulo: titulo,
            codigo: codigo,
            descricao: descricao,
            valorUnitario: valorUnitario,
            tempoEntregaMinimo: tempoEntregaMinimo,
            tempoEntregaMaximo: tempoEntregaMaximo
        }

        axios.post("http://localhost:8080/api/produto", produtoRequest)
        .then((response) => {
            console.log('Produto cadastrado com sucesso.')
        })
        .catch((error) => {
            console.log("Erro ao inclui um produto")
        })
    }

    return (
        <div>
            <MenuSistema tela='produto' />
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified' >
                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name="angle double right" size="small" /> </span> Cadastro </h2>
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
                                    onChange={e=> setTitulo(e.target.value)}
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
                                    onChange={e=> setEntregaMaximo(e.target.value)}
                                />
                            </Form.Group>
                        </Form>

                        <div style={{ marginTop: '4%' }}>
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

                            <Button
                                type="button"
                                inverted
                                circular
                                color='blue'
                                icon
                                labelPosition="left"
                                floated="right"
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