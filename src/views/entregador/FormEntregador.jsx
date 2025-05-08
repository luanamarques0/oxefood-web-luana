import InputMask from "comigo-tech-react-input-mask/lib/react-input-mask.development";
import React, { useState } from "react";
import { Button, Container, Divider, Form, FormSelect, Icon } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";

export default function FormEntregador() {

    const [ativo, setAtivo] = useState('');
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

    function salvar(){
        let entregadorRequest = {
            nome: nome,
            cpf: cpf,
            rg: rg,
            dataNascimento: dataNascimento,
            foneCelular: foneCelular,
            foneFixo: foneFixo,
            qteEntregasRealizadas: qteEntregasRealizadas,
            valorFretes: valorFretes,
            enderecoRua: enderecoRua,
            enderecoComplemento: enderecoComplemento,
            enderecoNumero: enderecoNumero,
            enderecoBairro: enderecoBairro,
            enderecoCidade: enderecoCidade,
            enderecoCep: enderecoCep,
            enderecoUf: enderecoUf
        }
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
                                    onChange={e=> setNome(e.target.value)}
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
                                    onChange={e=> setRg(e.target.value)}
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
                                    onChange={e=> setDataNascimento(e.target.value)}
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
                                    onChange={e=> setFoneFixo(e.target.value)}
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
                                    onChange={e=> setFoneCelular(e.target.value)}
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
                                    onChange={e=> setQtdEntregasRealizadas(e.target.value)}
                                />
                                <Form.Input
                                    required={false}
                                    fluid
                                    width={6}
                                    label='Valor por Frete:'
                                    value={valorFretes}
                                    onChange={e=> setValorFretes(e.target.value)}
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
                                    onChange={e=> setEnderecoRua(e.target.value)}
                                />
                                <Form.Input
                                    required={false}
                                    fluid
                                    width={4}
                                    label='Número:'
                                    maxLength="10"
                                    value={enderecoNumero}
                                    onChange={e=> setEnderecoNumero(e.target.value)}
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
                                    onChange={e=> setEnderecoBairro(e.target.value)}
                                />
                                <Form.Input
                                    required={false}
                                    fluid
                                    width={8}
                                    label='Cidade:'
                                    maxLength="100"
                                    value={enderecoCidade}
                                    onChange={e=> setEnderecoCidade(e.target.value)}
                                />
                                <Form.Input
                                    required={false}
                                    fluid
                                    width={3}
                                    value={enderecoCep}
                                    onChange={e=> setEnderecoCep(e.target.value)}
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
                                    onChange={e=> setEderecoUf(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    required={false}
                                    fluid
                                    label='Complemento:'
                                    maxLength="100"
                                    value={enderecoComplemento}
                                    onChange={e=> setEnderecoComplemento(e.target.value)}
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