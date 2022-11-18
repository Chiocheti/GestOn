import {
    Button,
    Center,
    Divider,
    Box,
    IconButton,
    Input,
    Text
} from '@chakra-ui/react'

import React, { useState } from 'react';
import UseAuth from '../../hooks/useAuth'
import Axios from 'axios';

import NavbarLogOn from '../../components/navbarLogOnConsumidor';
import Router from "next/router";

import Component from "../../components/mostarProdutosParaConsumidor/GridProduto"

import { FcSearch } from "react-icons/fc";

export default function indexConsumidor() {

    const { user, signin, signout } = UseAuth();

    var [produtos, setProdutos] = useState(() => [1, 2]);
    var [consumidor, setConsumidor] = useState(() => "Default");

    function loadUsuario() {
        const options = {
            method: 'GET',
            url: `http://localhost:3000/api/usuario/cadastro/${user.email}/consumidor`
        };
        Axios.request(options).then(function (response) {
            console.log(response.data);
            var usuario = response.data;
            console.log("Usuario: ");
            console.log(usuario);

            loadConsumidor(usuario);
        }).catch(function (error) {
            console.log(error);

            Router.push('/cadastro');
        });
    }

    function loadConsumidor(usuario) {
        const options = {
            method: 'GET',
            url: `http://localhost:3000/api/consumidor/${usuario.id}`
        };
        Axios.request(options).then(function (response) {
            const resp = response.data;
            console.log("Response data")
            console.log(response.data);

            setConsumidor(() => resp)

        }).catch(function (error) {
            console.log("Erro do sistema: " + error);
        });
    }

    function getProdutos() {
        var pesquisa = document.getElementById("pesquisa").value.trim()
        const options = {
            method: 'GET',
            url: `http://localhost:3000/api/produto/nome/${pesquisa}`
        };
        Axios.request(options).then(function (response) {
            document.getElementById("componente").hidden = false
            var produtos = response.data
            setProdutos(() => produtos)

        }).catch(function (error) {
            console.log("Erro do sistema: " + error);
        });
    }

    return (
        <>
            <NavbarLogOn />
            <Box marginTop={10} marginBottom={10}>
                <Center>
                    <Text fontSize='6xl'> Faça sua PESQUISA aqui </Text>
                </Center>
                <Center marginX={500}>
                    <Input placeholder='Faça sua Pesquisa aqui' variant='filled' id='pesquisa' />
                    <IconButton 
                        aria-label='Search database' 
                        icon={<FcSearch />}
                        fontSize={100}
                        onClick={() => {
                            getProdutos();
                            loadUsuario();
                        }}/>
                </Center>
            </Box>
            <Divider />
            <Box margin={10}>
                <div id='componente' hidden>
                    <Component produtos={produtos} consumidor={consumidor} />
                </div>
            </Box>
        </>
    )
}