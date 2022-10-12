import {
    Box,
    Image,
    Flex,
    Spacer,
    Button,
    AvatarGroup,
    Center,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
} from '@chakra-ui/react'

import { FcInfo } from "react-icons/fc";
import React from 'react';
import { EditIcon } from '@chakra-ui/icons'
import Router from "next/router";

function goCreateMyProduct() {
    Router.push('/editProduct');
}

export default function cardProduto({ produto }) {

    return (
        <Box w='200px' borderWidth='1px' borderRadius='lg' overflow='hidden' margin='10px' padding='10px'>
            <Center>
                <Image
                    margin='10px'
                    boxSize='90%'
                    objectFit='cover'
                    src={produto.linkImg}
                />
            </Center>
            <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
            >
                {produto.nome}
            </Box>
            <Flex marginTop='10px'>
                <Popover>
                    <PopoverTrigger>
                        <Button w='6rem' h='em' fontSize='16px' bg='teal.1000' leftIcon={<FcInfo fontSize='2.0rem' />} >Info</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>{produto.descricaoCurta}</PopoverHeader>
                        <PopoverBody>{produto.descricaoLonga}</PopoverBody>
                        <PopoverFooter>Marca: {produto.marca}</PopoverFooter>
                    </PopoverContent>
                </Popover>
                <Spacer />
                <AvatarGroup spacing='.5rem'>
                    <EditIcon w={7} h={7} color="lightgray" onClick={() => { goCreateMyProduct() }} />
                </AvatarGroup>
            </Flex>
        </Box>
    )
}