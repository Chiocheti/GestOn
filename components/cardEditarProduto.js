import {
    Box,
    Image,
    Flex,
    Spacer,
    Button,
    AvatarGroup,
    Avatar,
    Center,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
    PopoverFooter
} from '@chakra-ui/react'

import { FcLike, FcCurrencyExchange , FcInfo} from "react-icons/fc";
import React from 'react';


export default function cardProduto() {
    const property = {
        nome: "Milhão",
        descricaoLonga: "descricaoLongaProduto",
        descricaoCurta: "descricaoProduto",
        linkImg: "https://agristore.com/image/cache/catalog/Di%20Solo/milho-ipanema-20kg-1200x1200.png",
        marca: "marcaProduto"
    }
    return (
        <Box w='700px' borderWidth='1px' borderRadius='lg' overflow='hidden' margin='10px' padding='10px'>
            <Center>
                <Image
                    margin='10px'
                    boxSize='90%'
                    objectFit='cover'
                    src={property.linkImg}
                />
            </Center>
            <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
            >
                {property.nome}
            </Box>
            <Spacer></Spacer>
            <Box>
                {property.preco}
            </Box>
            <Flex marginTop='10px'>
                <Popover>
                    <PopoverTrigger>
                        <Button w='6rem' h='em' fontSize='23px' bg='teal.1000' leftIcon={<FcInfo fontSize='2.5rem' />} >Info</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>{property.descricaoCurta}</PopoverHeader>
                        <PopoverBody>{property.descricaoLonga}</PopoverBody>
                        <PopoverFooter>Marca: {property.marca}</PopoverFooter>
                    </PopoverContent>
                </Popover>
                <Spacer />
                <AvatarGroup spacing='.5rem'>
                    <Avatar bg='teal.1000' icon={<FcLike fontSize='2.5rem' />} />
                    <Avatar bg='teal.1000' icon={<FcCurrencyExchange fontSize='2.5rem' />} />
                </AvatarGroup>
            </Flex>
        </Box>
    )
}