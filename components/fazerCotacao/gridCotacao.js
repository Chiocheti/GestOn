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

export default function gridProduto({ carrinho,  fornecedores }) {

    console.log("Tela GridProduto ---------")
    console.log(carrinho)
    console.log(fornecedores)

    return (
        <>
                <SimpleGrid columns={1} spacing={10} marginX={10}>
                    {
                        fornecedores.map((fornecedor) => (
                            <Item key={fornecedor} fornecedor={fornecedor} carrinho={carrinho}/>
                        ))
                    }
                </SimpleGrid>  
        </>
    )
}