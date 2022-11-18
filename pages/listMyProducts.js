import {
    Center,
    Heading,
    Text,
    SimpleGrid,
    Button,
} from '@chakra-ui/react';

import React, { useState } from 'react';
import NavbarLogOn from '../components/navbarLogOnFornecedor';
import Componente from "../components/componenteMyProducts"
import UseAuth from '../hooks/useAuth'
import Axios from 'axios';

export default function App() {

    const { user, signin, signout } = UseAuth();

    var [produtos, setProdutos] = useState(() => [1, 2]);
    var usuario = null;

    function carregaProdutos() {
        const options = {
            method: 'GET',
            url: `http://localhost:3000/api/usuario/cadastro/${user.email}/fornecedor`
        };

        Axios.request(options).then(function (response) {
            
            usuario = response.data;
            
            loadProdutos(usuario.id);
        }).catch(function (error) {
            console.log(error);
        });
    }

    function loadProdutos(id) {

        const options2 = {
            method: 'GET',
            url: `http://localhost:3000/api/produtoDoFornecedor/getProduto/${id}`
        };
        Axios.request(options2).then(function (response) {
            
            var produtosLidos = response.data;
            setProdutos(() => produtosLidos)
            

        }).catch(function (error) {
            console.log(error);
        });
        document.getElementById("componente").hidden = false;
    }

    return (
        <>
            <NavbarLogOn />
            <Center>
                <Heading
                    marginTop={10}
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}>
                    <Text as={'span'} color={'green.400'} >
                        EDIÇÃO DE PRODUTO
                    </Text>
                </Heading>
            </Center>

            <Center marginTop={10} marginBottom={10}>
                <Button bg={'blue.400'}
                    color={'white'}

                    _hover={{
                        bg: 'blue.500',
                    }} size='lg' onClick={() => carregaProdutos()}>
                    Carregar Produtos
                </Button>
            </Center>
            <Center>
                <Text color={'gray.500'} fontSize={35}>
                    Escolha o produto que deseja editar
                </Text>
            </Center>
            <div hidden id="componente">
                <Componente produtos={produtos}  />
            </div>
        </>
    )
}