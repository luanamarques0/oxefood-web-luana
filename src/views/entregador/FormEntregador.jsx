import InputMask from "comigo-tech-react-input-mask/lib/react-input-mask.development";
import React, { useState } from "react";
import { Button, Container, Divider, Form, FormSelect, Icon } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FormEntregador() {

    const [ativo, setAtivo] = useState();
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
    const [valorFretes, setValorFretes] = useState();
    const [enderecoRua, setEnderecoRua] = useState();
    const [enderecoComplemento, setEnderecoComplemento] = useState();
    const [enderecoNumero, setEnderecoNumero] = useState();
    const [enderecoBairro, setEnderecoBairro] = useState();
    const [enderecoCidade, setEnderecoCidade] = useState();
    const [enderecoCep, setEnderecoCep] = useState();
    const [enderecoUf, setEderecoUf] = useState();

    // const handleChange = (e, { value }) => { setAtivo(value); };

    const options = [
        { key: 'AC', text: 'Acre', value: 'AC' },
        { key: 'AL', text: 'Alagoas', value: 'AL' },
        { key: 'AP', text: 'Amapá', value: 'AP' },
        { key: 'AM', text: 'Amazonas', value: 'AM' },
        { key: 'BA', text: 'Bahia', value: 'BA' },
        { key: 'CE', text: 'Ceará', value: 'CE' },
        { key: 'DF', text: 'Distrito Federal', value: 'DF' },
        { key: 'ES', text: 'Espírito Santo', value: 'ES' },
        { key: 'GO', text: 'Goiás', value: 'GO' },
        { key: 'MA', text: 'Maranhão', value: 'MA' },
        { key: 'MT', text: 'Mato Grosso', value: 'MT' },
        { key: 'MS', text: 'Mato Grosso do Sul', value: 'MS' },
        { key: 'MG', text: 'Minas Gerais', value: 'MG' },
        { key: 'PA', text: 'Pará', value: 'PA' },
        { key: 'PB', text: 'Paraíba', value: 'PB' },
        { key: 'PR', text: 'Paraná', value: 'PR' },
        { key: 'PE', text: 'Pernambuco', value: 'PE' },
        { key: 'PI', text: 'Piauí', value: 'PI' },
        { key: 'RJ', text: 'Rio de Janeiro', value: 'RJ' },
        { key: 'RN', text: 'Rio Grande do Norte', value: 'RN' },
        { key: 'RS', text: 'Rio Grande do Sul', value: 'RS' },
        { key: 'RO', text: 'Rondônia', value: 'RO' },
        { key: 'RR', text: 'Roraima', value: 'RR' },
        { key: 'SC', text: 'Santa Catarina', value: 'SC' },
        { key: 'SP', text: 'São Paulo', value: 'SP' },
        { key: 'SE', text: 'Sergipe', value: 'SE' },
        { key: 'TO', text: 'Tocantins', value: 'TO' },
    ];

    function salvar() {
        let entregadorRequest = {
            nome: nome,
            cpf: cpf,
            rg: rg,
            dataNascimento: dataNascimento,
            foneCelular: foneCelular,
            foneFixo: foneFixo,
            qtdEntregasRealizadas: qtdEntregasRealizadas,
            valorFretes: valorFretes,
            enderecoRua: enderecoRua,
            enderecoComplemento: enderecoComplemento,
            enderecoNumero: enderecoNumero,
            enderecoBairro: enderecoBairro,
            enderecoCidade: enderecoCidade,
            enderecoCep: enderecoCep,
            enderecoUf: enderecoUf,
            ativo: ativo,
        }

        axios.post("http://localhost:8081/api/entregador", entregadorRequest)
            .then((response) => {
                console.log('Entregador cadastrado com sucesso.')
            })
            .catch((error) => {
                console.log("Erro ao cadastrar entregador.")
            })
    }

    return (
        <div>
            <MenuSistema tela='entregador' />
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
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />
                                <Form.Input
                                    required
                                    fluid
                                    width={4}
                                    value={cpf}
                                    onChange={e => setCpf(e.target.value)}
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
                                    value={rg}
                                    onChange={e => setRg(e.target.value)}
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
                                    value={dataNascimento}
                                    onChange={e => setDataNascimento(e.target.value)}
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
                                    value={foneFixo}
                                    onChange={e => setFoneFixo(e.target.value)}
                                    label='Fone Fixo:'>
                                    <InputMask
                                        mask="(99) 99999.9999"
                                    />
                                </Form.Input>
                                <Form.Input
                                    required
                                    fluid
                                    width={6}
                                    value={foneCelular}
                                    onChange={e => setFoneCelular(e.target.value)}
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
                                    value={qtdEntregasRealizadas}
                                    onChange={e => setQtdEntregasRealizadas(e.target.value)}
                                />
                                <Form.Input
                                    required={false}
                                    fluid
                                    width={6}
                                    label='Valor por Frete:'
                                    value={valorFretes}
                                    onChange={e => setValorFretes(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    required={false}
                                    fluid
                                    width={10}
                                    label='Rua:'
                                    maxLength="100"
                                    value={enderecoRua}
                                    onChange={e => setEnderecoRua(e.target.value)}
                                />
                                <Form.Input
                                    required={false}
                                    fluid
                                    width={4}
                                    label='Número:'
                                    maxLength="10"
                                    value={enderecoNumero}
                                    onChange={e => setEnderecoNumero(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    required={false}
                                    fluid
                                    width={8}
                                    label='Bairro:'
                                    maxLength="100"
                                    value={enderecoBairro}
                                    onChange={e => setEnderecoBairro(e.target.value)}
                                />
                                <Form.Input
                                    required={false}
                                    fluid
                                    width={8}
                                    label='Cidade:'
                                    maxLength="100"
                                    value={enderecoCidade}
                                    onChange={e => setEnderecoCidade(e.target.value)}
                                />
                                <Form.Input
                                    required={false}
                                    fluid
                                    width={3}
                                    value={enderecoCep}
                                    onChange={e => setEnderecoCep(e.target.value)}
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
                                    value={enderecoUf}
                                    onChange={e => setEderecoUf(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    required={false}
                                    fluid
                                    label='Complemento:'
                                    maxLength="100"
                                    value={enderecoComplemento}
                                    onChange={e => setEnderecoComplemento(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group inline>
                                <label>Ativo: </label>
                                <Form.Radio
                                    label='Sim'
                                    value='true'
                                    checked={ativo === 'true'}
                                    onChange={(e, { value }) => setAtivo(value)}
                                />
                                <Form.Radio
                                    label='Não'
                                    value='false'
                                    checked={ativo === 'false'}
                                    onChange={(e, { value }) => setAtivo(value)}
                                />
                            </Form.Group>
                        </Form>
                    </div>
                    <div style={{ marginTop: '4%' }}>
                        <Link to={'/list-entregador'}>
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
                </Container>
            </div>
        </div>
    );
}