import React from "react";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";

export default function FormProduto() {
    return (
        <div>
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
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='Código de Produto: '
                                    maxLength="200"
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    required={false}
                                    fluid
                                    label='Descrição: '
                                    maxLength="500"
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitário: '
                                    maxLength="10"
                                />
                                <Form.Input
                                    required={false}
                                    fluid
                                    label='Tempo de Entrega Mínimo em Minutos: '
                                    maxLength="10"
                                />
                                <Form.Input
                                    required={false}
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos: '
                                    maxLength="10"
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