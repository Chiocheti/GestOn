import {
    Box,
    Flex,
    Image,
    Heading,
    Divider,
    IconButton,
    Input,
    Button,
    useToast,
    Center
} from '@chakra-ui/react'

import React, { useState } from 'react';
import { FcCancel, FcUp, FcDown } from "react-icons/fc";
import Axios from 'axios';
import Component from './gridCotacaoComponent';

export default function itemCotacao({ fornecedor, carrinho }) {

    const [produtos, setProdutos] = useState(() => [1, 2])
    const [valor, setValor] = useState(() => [1, 2])

    const toast = useToast();

    console.log("Tela itemContação ---------")
    console.log(carrinho)
    console.log(fornecedor.idFornecedor)

    function loadProdutos() {
        const options01 = {
            method: 'GET',
            url: `http://localhost:3000/api/produto/IdCarrinhoANDIdFornecedor/${carrinho}/${fornecedor.idFornecedor}`
        };
        Axios.request(options01).then(function (response) {
            var getProdutos = response.data
            console.log("GETPRODUTOS -----------------")
            console.log(getProdutos)
            if (getProdutos == "" || getProdutos == null) {
                document.getElementById("total").hidden = true
            }
            setProdutos(() => getProdutos)
            somarValores()
        }).catch(function (error) {
            console.log("Erro do sistema: " + error);
        });
    }

    function somarValores() {
        const options01 = {
            method: 'GET',
            url: `http://localhost:3000/api/produto/SUM/${carrinho}/${fornecedor.idFornecedor}`
        };
        Axios.request(options01).then(function (response) {
            var getValor = response.data
            console.log("getValor -----------------")
            console.log(getValor)
            setValor(() => getValor)
            document.getElementById("componente").hidden = false
        }).catch(function (error) {
            console.log("Erro do sistema: " + error);
        });
    }

    return (
        <div id='total'>
            <Box
                margint={5}
                borderWidth={2}
                borderRadius={10}>
                <Center>
                    <Button
                        colorScheme={'teal'}
                        bg={'teal.400'}
                        _hover={{ bg: 'teal.500' }}
                        fontSize="md"
                        marginY={5}
                        onClick={() => {
                            loadProdutos()
                        }}>
                        Clique aqui para fazer a cotacao
                    </Button>
                </Center>
                <div id='componente'>
                    <Heading marginLeft={10}>
                        Fornecedor: {valor[0].nomeFantasia}
                    </Heading>
                    <Heading marginLeft={10}>
                        Custo: R${valor[0].valor}
                    </Heading>
                    <Component produtos={produtos} />
                </div>
            </Box>
        </div>
    )
}