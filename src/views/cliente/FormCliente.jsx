import axios from 'axios';
import InputMask from 'comigo-tech-react-input-mask';
import React, { useState, useEffect } from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import { Link, useLocation } from "react-router-dom";
import FormEndereco from '../endereco/FormEndereco';
import { notifyError, notifySuccess } from '../../views/util/Util';

export default function FormCliente() {

    const { state } = useLocation();
    const [idCliente, setIdCliente] = useState();

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8081/api/cliente/" + state.id)
                .then((response) => {

                    console.log(response.data)

                    setIdCliente(response.data.id)
                    setNome(response.data.nome)
                    setCpf(response.data.cpf)
                    setDataNascimento(formatarData(response.data.dataNascimento))
                    setFoneCelular(response.data.foneCelular)
                    setFoneFixo(response.data.foneFixo)
                });
        }
    }, [state])

    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }


    function salvar() {

        let clienteRequest = {
            nome: nome,
            cpf: cpf,
            dataNascimento: dataNascimento,
            foneCelular: foneCelular,
            foneFixo: foneFixo
        }

        if (idCliente != null) {
            axios.put("http://localhost:8081/api/cliente/" + idCliente, clienteRequest)
                .then((response) => { console.log('Cliente alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alter um cliente.') })

        } else {

            axios.post("http://localhost:8081/api/cliente", clienteRequest)
                .then((response) => {

                    notifySuccess('Cliente cadastrado com sucesso.');
                })
                .catch((error) => {

                    if (error.response.data.errors !== undefined) {

                        for (let i = 0; i < error.response.data.errors.length; i++) {
                            notifyError(error.response.data.errors[i].defaultMessage);
                        }
                    } else {
                        notifyError(error.response.data.message);
                    }

                })
        }
    }

    return (

        <div>
            <MenuSistema tela='cliente' />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    {idCliente === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idCliente !== undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        value={cpf}
                                        onChange={e => setCpf(e.target.value)}
                                        mask="999.999.999-99"
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Fone Celular'

                                    width={6}>
                                    <InputMask
                                        value={foneCelular}
                                        onChange={e => setFoneCelular(e.target.value)}
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'

                                    width={6}>
                                    <InputMask
                                        value={foneFixo}
                                        onChange={e => setFoneFixo(e.target.value)}
                                        mask="(99) 99999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Data Nascimento'

                                    width={6}
                                >
                                    <InputMask
                                        value={dataNascimento}
                                        onChange={e => setDataNascimento(e.target.value)}
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                    />
                                </Form.Input>

                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>
                            <Link to={'/list-cliente'}>
                                <Button
                                    type="button"
                                    inverted
                                    circular
                                    icon
                                    labelPosition='left'
                                    color='orange'
                                >
                                    <Icon name='reply' />
                                    Voltar
                                </Button>
                            </Link>
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
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
