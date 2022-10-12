import {
    Center,
    Heading,
    Text,
    Flex,
    Input,
    Button,
} from '@chakra-ui/react';
import ListaCarrozel from '../components/carrozel';
import Router from "next/router";
import NavbarLogOn from '../components/navbarLogOnFornecedor';
import { React, useState } from 'react';
import Axios from 'axios';

function goCreateProduct() {
    Router.push('/createProduct');
}
export default function editProdrutro() {
    var [produtos, setProdutos] = useState([1, 2]);

    var options = { method: 'GET', url: 'http://localhost:3000/api/produto' };

    async function loadProduct() {
        Axios.request(options).then(function (response) {
            console.log(response.data);
            setProdutos(response.data);
            document.getElementById('lista_produto').hidden = false;
        }).catch(function (error) {
            console.error(error);
        });

    }
    return (
        <>
            <NavbarLogOn />
            <br /><br /><br /><br />
            <Center>
                <Heading
                    fontWeight={300}
                    fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}>
                    <Text as={'span'} color={'green.400'}>
                        Sugestões de Produtos
                    </Text>
                </Heading>
            </Center>

            <div style={{ margin: '150px', paddingRight: '2px' }} >
                <Flex>
                    <Input
                        rounded="3xl" padding="5px"
                        placeholder='Pesquise por produtos'
                        _placeholder={{ opacity: 1, color: 'gray.500' }}
                    />
                    <Button rounded="2xl" ml='15px' padding="20px" onClick={() => goCreateProduct()} >
                        Cadastrar Produto Inexistente
                    </Button>
                </Flex>
                <br />
                <Button rounded="2xl" ml='15px' padding="20px" onClick={() => loadProduct()} >
                    Listar produtos
                </Button>
                <div id='lista_produto' hidden>
                    <ListaCarrozel produtos={produtos} />
                </div>
            </div>
        </>
    )
}