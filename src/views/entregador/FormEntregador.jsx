import InputMask from "comigo-tech-react-input-mask/lib/react-input-mask.development";
import React, { useState } from "react";
import { Button, Container, Divider, Form, FormSelect, Icon } from 'semantic-ui-react';

export default function FormEntregador() {

    const [ativo, setAtivo] = useState('');

    const handleChange = (e, { value }) => { setAtivo(value); };

    const options = [
        { key: 'AC', text: 'AC', value: 'AC' },
        { key: 'AL', text: 'AL', value: 'AL' },
        { key: 'AP', text: 'AP', value: 'AP' },
        { key: 'AM', text: 'AM', value: 'AM' },
        { key: 'BA', text: 'BA', value: 'BA' },
        { key: 'CE', text: 'CE', value: 'CE' },
        { key: 'DF', text: 'DF', value: 'DF' },
        { key: 'ES', text: 'ES', value: 'ES' },
        { key: 'GO', text: 'GO', value: 'GO' },
        { key: 'MA', text: 'MA', value: 'MA' },
        { key: 'MT', text: 'MT', value: 'MT' },
        { key: 'MS', text: 'MS', value: 'MS' },
        { key: 'MG', text: 'MG', value: 'MG' },
        { key: 'PA', text: 'PA', value: 'PA' },
        { key: 'PB', text: 'PB', value: 'PB' },
        { key: 'PR', text: 'PR', value: 'PR' },
        { key: 'PE', text: 'PE', value: 'PE' },
        { key: 'PI', text: 'PI', value: 'PI' },
        { key: 'RJ', text: 'RJ', value: 'RJ' },
        { key: 'RN', text: 'RN', value: 'RN' },
        { key: 'RS', text: 'RS', value: 'RS' },
        { key: 'RO', text: 'RO', value: 'RO' },
        { key: 'RR', text: 'RR', value: 'RR' },
        { key: 'SC', text: 'SC', value: 'SC' },
        { key: 'SP', text: 'SP', value: 'SP' },
        { key: 'SE', text: 'SE', value: 'SE' },
        { key: 'TO', text: 'TO', value: 'TO' },
    ];

    return (
        <div>
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified' >
                    <h2><span style={{ color: 'darkgray' }}>Entregador &nbsp;<Icon name="angle double right" size="small"></Icon></span> Cadastro</h2>
                    <Divider />
                    <div style={{ marginTop: '4%' }}>
                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    width={8}
                                    label='Nome:'
                                    maxLength="100"
                                />
                                <Form.Input
                                    required
                                    fluid
                                    width={4}
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    />
                                </Form.Input>
                                <Form.Input
                                    required={false}
                                    fluid
                                    width={4}
                                    label='RG:'>
                                    <InputMask
                                        required={false}
                                        mask="9.999.999"
                                    />
                                </Form.Input>
                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required={false}
                                    fluid
                                    width={6}
                                    label='DT Nascimento:'>
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                    />
                                </Form.Input>

                                <Form.Input
                                    required={false}
                                    fluid
                                    width={6}
                                    label='Fone Fixo:'>
                                    <InputMask
                                        mask="(99) 99999.9999"
                                    />
                                </Form.Input>
                                <Form.Input
                                    required
                                    fluid
                                    width={6}
                                    label='Fone Celular:'>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>
                                <Form.Input
                                    required={false}
                                    fluid
                                    width={6}
                                    label='QTD Entregas Realizadas:'
                                />
                                <Form.Input
                                    required={false}
                                    fluid
                                    width={6}
                                    label='Valor por Frete:'
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    required={false}
                                    fluid
                                    width={10}
                                    label='Rua:'
                                    maxLength="100"
                                />
                                <Form.Input
                                    required={false}
                                    fluid
                                    width={4}
                                    label='Número:'
                                    maxLength="10"
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    required={false}
                                    fluid
                                    width={8}
                                    label='Bairro:'
                                    maxLength="100"
                                />
                                <Form.Input
                                    required={false}
                                    fluid
                                    width={8}
                                    label='Cidade:'
                                    maxLength="100"
                                />
                                <Form.Input
                                    required={false}
                                    fluid
                                    width={3}
                                    label='CEP:'>
                                    <InputMask
                                        mask="99999-999"
                                        maskChar={null}
                                    />
                                </Form.Input>
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <FormSelect
                                    required={false}
                                    fluid
                                    label='UF:'
                                    placeholder="Selecione"
                                    search
                                    options={options}
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    required={false}
                                    fluid
                                    label='Complemento:'
                                    maxLength="100"
                                />
                            </Form.Group>

                            <Form.Group inline>
                                <label>Ativo: </label>
                                <Form.Radio
                                    label='Sim'
                                    value='sim'
                                    checked={ativo === 'sim'}
                                    onChange={(e, { value }) => setAtivo(value)}
                                />
                                <Form.Radio
                                    label='Não'
                                    value='nao'
                                    checked={ativo === 'nao'}
                                    onChange={(e, { value }) => setAtivo(value)}
                                />
                            </Form.Group>
                        </Form>
                    </div>
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
                            Voltar
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
                </Container>
            </div>
        </div>
    );
}