import {
    SimpleGrid,
    Flex,
    Button,
    Box,
    Center,
    Input
} from '@chakra-ui/react';

import Item from './itemCotacaoComponent';

import { FaArrowRight } from "react-icons";

export default function gridProduto({ produtos }) {

    console.log("TELA GRID component ")
    console.log(produtos)

    return (
        <>
            <SimpleGrid columns={3} spacing={10} marginX={10}>
                {
                    produtos.map((produto) => (
                        <Item key={produto.idProduto} produto={produto} />
                    ))
                }
            </SimpleGrid>
        </>
    )
}