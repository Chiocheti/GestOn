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
} from '@chakra-ui/react'

import React, { useState } from 'react';
import { FcCancel, FcUp, FcDown } from "react-icons/fc";
import Axios from 'axios';
import Component from './gridCotacaoComponent';

export default function itemCotacaoComponente({ produto }) {

    const toast = useToast();

    console.log("Tela itemContaçãoComponente ---------")
    console.log(produto)

    return (
        <>
        <>
            <Flex
                margin={5}
                borderWidth={2}
                borderRadius={10}
                width={600}
            >
                <Box
                    marginRight={5}
                >
                    <Image
                        src={produto.linkImg}
                        width="200px"
                        height="200px"
                        borderRadius={10}
                    />
                </Box>
                <Box>
                    <Heading>
                        {produto.nome}
                    </Heading>
                    <Divider marginY={3} />
                    <Heading size='md'>
                        {produto.descricaoCurta}
                    </Heading>
                </Box>
            </Flex>
        </>
        </>
    )
}