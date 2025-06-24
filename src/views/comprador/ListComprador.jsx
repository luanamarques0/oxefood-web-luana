import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table, Header, Modal } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListComprador() {

    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();

    useEffect(() => {
        carregarLista();
    }, [])

    function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
    }

    function carregarLista() {

        axios.get("http://localhost:8081/api/comprador")
            .then((response) => {
                setLista(response.data)
            })
            .catch((error) => {
                console.log("Erro ao carregar a lista.")
            })
    }

    async function remover() {

        await axios.delete('http://localhost:8081/api/comprador/' + idRemover)
            .then((response) => {

                console.log('Comprador removido com sucesso.')

                axios.get("http://localhost:8081/api/comprador")
                    .then((response) => {
                        setLista(response.data)
                    })
            })
            .catch((error) => {
                console.log('Erro ao remover um comprador.')
            })
        setOpenModal(false)
    }


    return (
        <div>
            <MenuSistema tela={'comprador'} />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> Comprador </h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-comprador'
                        />
                        <br /><br /><br />

                        <Table color='orange' sortable celled>

                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Nome</Table.HeaderCell>
                                    <Table.HeaderCell>Segmento</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {lista.map(comprador => (

                                    <Table.Row key={comprador.id}>
                                        <Table.Cell>{comprador.titulo}</Table.Cell>
                                        <Table.Cell>{comprador.codigo}</Table.Cell>
                                        <Table.Cell textAlign='center'>

                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste comprador'
                                                icon>
                                                <Link to="/form-comprador" state={{ id: comprador.id }} style={{ color: 'green' }}> <Icon name='edit' /> </Link>

                                            </Button> &nbsp;

                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este comprador'
                                                icon
                                                onClick={e => confirmaRemover(comprador.id)}>
                                                <Icon name='trash' />
                                            </Button>

                                        </Table.Cell>
                                    </Table.Row>
                                ))}

                            </Table.Body>
                        </Table>
                    </div>
                </Container>
            </div>
            <Modal
                basic
                onClose={() => setOpenModal(false)}
                onOpen={() => setOpenModal(true)}
                open={openModal}
            >
                <Header icon>
                    <Icon name='trash' />
                    <div style={{ marginTop: '5%' }}> Tem certeza que deseja remover esse comprador? </div>
                </Header>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                        <Icon name='remove' /> Não
                    </Button>
                    <Button color='green' inverted onClick={() => remover()}>
                        <Icon name='checkmark' /> Sim
                    </Button>
                </Modal.Actions>
            </Modal>

        </div>
    )
}