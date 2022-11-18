import {
    SimpleGrid,
    Flex,
    Button,
    Box,
    Center,
    Input
} from '@chakra-ui/react';

import Item from './itemCotacao';

import { FaArrowRight } from "react-icons";

export default function gridProduto({ produtos , carrinho , produtosNoCarrinho }) {

    console.log("Tela do Meio ---------------")
    console.log(produtos)

    return (
        <>
            <Center>
                <SimpleGrid columns={3} spacing={10} marginX={10}>
                    {
                        produtos.map((produto) => (
                            <Item key={produto.idProduto} produto={produto} carrinho={carrinho} produtosNoCarrinho={produtosNoCarrinho}/>
                        ))
                    }
                </SimpleGrid>
            </Center>
        </>
    )
}