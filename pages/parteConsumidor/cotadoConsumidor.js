import {
    SimpleGrid,
    Flex,
    Button,
    Box,
    Center,
    Input
} from '@chakra-ui/react';

import React, { useState } from 'react';
import UseAuth from '../../hooks/useAuth'
import Axios from 'axios';

import NavbarLogOn from '../../components/navbarLogOnConsumidor';
import Router from "next/router";

import Component from "../../components/fazerCotacao/gridCotacao"

export default function cotadoConsumidor() {

    const { user, signin, signout } = UseAuth();

    const [fornecedores, setFornecedores] = useState(() => [1, 2])
    const [carrinho, setCarrinho] = useState(() => 0)

    function loadUsuario() {
        const options = {
            method: 'GET',
            url: `http://localhost:3000/api/usuario/cadastro/${user.email}/consumidor`
        };
        Axios.request(options).then(function (response) {
            var usuario = response.data;
            loadValues(usuario)
        }).catch(function (error) {
            console.log(error);
            Router.push('/cadastro');
        });
    }

    function loadValues(usuario) {
        var getCarrinho = 0
        var getFornecedores = 0
        const options01 = {
            method: 'GET',
            url: `http://localhost:3000/api/carrinho/consumidor/${usuario.id}`
        };
        Axios.request(options01).then(function (response) {
            getCarrinho = response.data[0].idCarrinho
            console.log("Get carrinho")
            console.log(getCarrinho)

            setCarrinho(() => getCarrinho)

            const options02 = {
                method: 'GET',
                url: `http://localhost:3000/api/fornecedor/id`
            };
            Axios.request(options02).then(function (response) {
                getFornecedores = response.data
                console.log("getFornecedores")
                console.log(getFornecedores)
                setFornecedores(() => getFornecedores)
                document.getElementById("componente").hidden = false
            }).catch(function (error) {
                console.log("Erro do sistema: " + error);
            });

        }).catch(function (error) {
            console.log("Erro do sistema: " + error);
        });
    }

    return (
        <>
            <NavbarLogOn />
            <Center>
                <Button
                    onClick={() => loadUsuario()}
                    marginY={10}
                    colorScheme={'orange'}
                    bg={'orange.400'}
                    _hover={{ bg: 'orange.500' }}
                    fontSize="md"
                    width={200}>
                    COTAR
                </Button>
            </Center>
            <div id='componente' hidden >
                <Component carrinho={carrinho} fornecedores={fornecedores} />
            </div>
        </>
    )
}