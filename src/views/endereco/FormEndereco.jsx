import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Form, Message, Icon } from 'semantic-ui-react';
import axios from 'axios';
import MenuSistema from '../../MenuSistema';

export default function FormEndereco() {
    const location = useLocation();
    const navigate = useNavigate();
    const clienteId = location.state?.clienteId;

    const [endereco, setEndereco] = useState({
        rua: '',
        numero: '',
        bairro: '',
        cep: '',
        cidade: '',
        estado: '',
        complemento: ''
    });

    const [mensagem, setMensagem] = useState({ sucesso: '', erro: '' });

    const handleChange = (e, { name, value }) => {
        setEndereco({ ...endereco, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            await axios.post(
                `http://localhost:8081/api/cliente/endereco/${clienteId}`,
                endereco
            );
            setMensagem({ sucesso: 'Endereço cadastrado com sucesso!', erro: '' });
            setTimeout(() => navigate('/clientes'), 1500);
        } catch (error) {
            console.error(error);
            setMensagem({ sucesso: '', erro: 'Erro ao cadastrar endereço.' });
        }
    };

    return (
        <div>
            <MenuSistema tela='Cliente' />
            <h2> <span style={{ color: 'darkgray' }}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Endereço</h2>
            <Form
                onSubmit={handleSubmit}
                success={!!mensagem.sucesso}
                error={!!mensagem.erro}
                // style={{ maxWidth: 700, margin: '0 auto' }}
            >
                <Form.Input
                    label='Rua'
                    name='rua'
                    value={endereco.rua}
                    onChange={handleChange}
                    required
                />

                <Form.Group widths='equal'>
                    <Form.Input
                        label='Número'
                        name='numero'
                        value={endereco.numero}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input
                        label='Complemento'
                        name='complemento'
                        value={endereco.complemento}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input
                        label='Bairro'
                        name='bairro'
                        value={endereco.bairro}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input
                        label='CEP'
                        name='cep'
                        value={endereco.cep}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input
                        label='Cidade'
                        name='cidade'
                        value={endereco.cidade}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input
                        label='Estado'
                        name='estado'
                        value={endereco.estado}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button type='submit' color='blue'>Salvar Endereço</Button>
                <Button type='button' onClick={() => navigate(-1)} color='grey' style={{ marginLeft: '10px' }}>
                    Voltar
                </Button>

                <Message success content={mensagem.sucesso} />
                <Message error content={mensagem.erro} />
            </Form>
        </div>
    );
};
