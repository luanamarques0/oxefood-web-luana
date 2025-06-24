import React, { useEffect, useState } from "react";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";

export default function FormComprador(){
    const [nome, setNome] = useState();
    const [enderecoComercial, setEnderecoComercial] = useState();
    const [enderecoResidencial, setEnderecoResidencial] = useState();
    const [comissao, setComissao] = useState();
    const [qtdComprasMediaMes, setQtdComprasMediaMes] = useState();
    const [contratadoEM, setContratadoEm] = useState();

    const [idSegmento, setIdSegmento] = useState();
    const [listaSegmentos, setListaSegmentos] = useState([]);

    const { state } = useLocation();
    const [idComprador, setIdComprador] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8081/api/comprador/" + state.id)
                .then((response) => {
                    setIdComprador(response.data.id)
                    setNome(response.data.nome)
                    setEnderecoComercial(response.data.enderecoComercial)
                    setEnderecoResidencial(response.data.enderecoResidencial)
                    setComissao(response.data.comissao)
                    setQtdComprasMediaMes(response.data.qtdComprasMediaMes)
                    setContratadoEm(response.data.contratadoEM)
                    setIdSegmento(response.data.segmento.id)
                })
            }

            axios.get("http://localhost:8081/api/segmento")
                    .then((response) => {
                        const dropDownSegmentos = response.data.map(c => ({ text: c.descricao, value: c.id }));
                        setListaSegmentos(dropDownSegmentos);
                    })

    }, [state])

    function salvar() {

        let compradorRequest = {
            idSegmento: idSegmento,
            nome: nome,
            enderecoComercial: enderecoComercial,
            enderecoResidencial: enderecoResidencial,
            comissao: comissao,
            qtdComprasMediaMes: qtdComprasMediaMes,
            contratadoEM: contratadoEM
        }

        if (idComprador != null) {
            axios.put("http://localhost:8081/api/comprador/" + idComprador, compradorRequest)
                .then((response) => { console.log('Comprador alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alterar um Comprador.') })

        } else {
            axios.post("http://localhost:8081/api/comprador", compradorRequest)
                .then((response) => {
                    console.log('comprador cadastrado com sucesso.')
                    // console.log(compradorRequest)
                })
                .catch((error) => {
                    console.log("Erro ao inclui um comprador")
                })
        }

        return (
        <div>
            <MenuSistema tela='comprador' />
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified' >
                    {idComprador === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Comprador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idComprador !== undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Comprador &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />
                    <div style={{ marginTop: '4%' }}>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Nome:'
                                    maxLength="100"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group widths="equal">
                                <Form.Select
                                    required
                                    fluid
                                    tabIndex='3'
                                    placeholder='Selecione'
                                    label='Segmento'
                                    options={listaSegmentos}
                                    value={idSegmento}
                                    onChange={(e, { value }) => {
                                        setIdSegmento(value)
                                    }}
                                />
                            </Form.Group>
                           
                        </Form>

                        <div style={{ marginTop: '4%' }}>
                            <Link to={'/list-comprador'}>
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

    
}


    // @ManyToOne
    // private Segmento segmento;

    // @Column
    // private String nome;

    // @Column
    // private String enderecoComercial;

    // @Column 
    // private String enderecoResidencial;

    // @Column
    // private Double comissao;

    // @Column
    // private Integer qtdComprasMediaMes;

    // @Column
    // private LocalDate contratadoEM;