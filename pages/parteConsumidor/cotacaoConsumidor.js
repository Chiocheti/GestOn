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

import Component from "../../components/cotacao/gridCotacao"

import { FcSearch } from "react-icons/fc";

export default function cotacaoConsumidor() {

    const { user, signin, signout } = UseAuth();

    var [produtosFinal, setProdutosFinal] = useState(() => [1, 2])
    var [produtosNoCarrinho, setProdutosNoCarrinho] = useState(() => [1, 2])
    var [carrinho, setCarrinho] = useState("Default")

    function loadUsuario() {
        const options = {
            method: 'GET',
            url: `http://localhost:3000/api/usuario/cadastro/${user.email}/consumidor`
        };
        Axios.request(options).then(function (response) {
            console.log(response.data);
            var usuario = response.data;

            loadConsumidor(usuario);
            getCarrinho(usuario)
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

        }).catch(function (error) {
            console.log("Erro do sistema: " + error);
        });
    }

    function getCarrinho(usuario) {
        const options = {
            method: 'GET',
            url: `http://localhost:3000/api/carrinho/consumidor/${usuario.id}`
        };
        Axios.request(options).then(function (response) {
            var getCarrinho = response.data[0]
            console.log("Carrinho -----------------")
            console.log(getCarrinho)
            getProdutosDoCarrinho(getCarrinho.idCarrinho)
            getProdutosNoCarrinho(getCarrinho.idCarrinho)
            setCarrinho(() => getCarrinho)
        }).catch(function (error) {
            console.log("Erro do sistema: " + error);
        });
    }

    function getProdutosDoCarrinho(idCarrinho) {
        const options = {
            method: 'GET',
            url: `http://localhost:3000/api/produto/produtosCotados/${idCarrinho}`
        };
        Axios.request(options).then(function (response) {
            var listProdutosNoCarrinho = response.data
            console.log("Produtos -----------------")
            console.log(listProdutosNoCarrinho)
            setProdutosFinal(listProdutosNoCarrinho)
            console.log("ProdutosFinal--------------------")
            console.log(produtosFinal)
        }).catch(function (error) {
            console.log("Erro do sistema: " + error);
        });
        document.getElementById("componente").hidden = false
    }

    function getProdutosNoCarrinho(idCarrinho) {
        const options = {
            method: 'GET',
            url: `http://localhost:3000/api/produtoNoCarrinho/carrinho/${idCarrinho}`
        };
        Axios.request(options).then(function (response) {
            var listProdutosNoCarrinho = response.data
            setProdutosNoCarrinho(listProdutosNoCarrinho)
        }).catch(function (error) {
            console.log("Erro do sistema: " + error);
        });
        document.getElementById("componente").hidden = false
    }

    return (
        <>
            <NavbarLogOn />
            <Box marginTop={10} marginBottom={10}>
                <Center>
                    <Text fontSize='6xl'> Cotação </Text>
                </Center>
                <Center>
                    <Text fontSize='2xl'> Clique aqui para mostrar seus produtos para cotação </Text>
                </Center>
                <Center>
                    <IconButton
                        width={100}
                        aria-label='Search database'
                        icon={<FcSearch />}
                        onClick={() => {
                            loadUsuario();
                        }} />
                </Center>
            </Box>
            <Divider />
            <Box margin={10}>
                <div id='componente' hidden>
                    <Component produtos={produtosFinal} carrinho={carrinho} produtosNoCarrinho={produtosNoCarrinho} />
                </div>
            </Box>
        </>
    )
}