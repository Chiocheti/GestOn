import {
    Center,
    Heading,
    Text,
    SimpleGrid,
    Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import "keen-slider/keen-slider.min.css"
import NavbarLogOn from '../components/navbarLogOnFornecedor';
import Router from "next/router";


function goEditProduct() {
    Router.push('/editProduct');
}

export default function App() {

    function isLista() {
        const elementLista = document.getElementById("Lista");
        elementLista.hidden = false;

        const elementGrid = document.getElementById("Grid");
        elementGrid.hidden = true;
    }

    function isGrid() {
        const elementLista = document.getElementById("Lista");
        elementLista.hidden = true;

        const elementGrid = document.getElementById("Grid");
        elementGrid.hidden = false;
    }

    return (
        <>
            <NavbarLogOn />
            <Center>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}>
                    <Text as={'span'} color={'green.400'}>
                        EDIÇÃO DE PRODUTO
                    </Text>
                </Heading>
            </Center>
            <Center>
                <br /><br /><br /><br /><br /><br />
                <Text color={'gray.500'}>
                    Escolha o produto que deseja editar
                </Text>
            </Center>
            <div id='Grid' style={{ margin: '100px', paddingRight: '5px' }} hidden>
                <Button bg={'blue.400'}
                    color={'white'}

                    _hover={{
                        bg: 'blue.500',
                    }} size='xs' onClick={isLista}>
                    LISTADO:
                </Button>
                <br />
                <br />
                <SimpleGrid columns={5} spacing={2}>
                    <img onClick={() => goEditProduct()} src='https://i.imgur.com/iLripy4.png' alt='JS' height='80px'></img>
                    <img onClick={() => goEditProduct()} src='https://i.imgur.com/iLripy4.png' alt='JS' height='80px'></img>
                    <img onClick={() => goEditProduct()} src='https://i.imgur.com/iLripy4.png' alt='JS' height='80px'></img>
                    <img onClick={() => goEditProduct()} src='https://i.imgur.com/iLripy4.png' alt='JS' height='80px'></img>
                    <img onClick={() => goEditProduct()} src='https://i.imgur.com/iLripy4.png' alt='JS' height='80px'></img>
                    <img onClick={() => goEditProduct()} src='https://i.imgur.com/iLripy4.png' alt='JS' height='80px'></img>
                    <img onClick={() => goEditProduct()} src='https://i.imgur.com/iLripy4.png' alt='JS' height='80px'></img>
                    <img onClick={() => goEditProduct()} src='https://i.imgur.com/iLripy4.png' alt='JS' height='80px'></img>
                    <img onClick={() => goEditProduct()} src='https://i.imgur.com/iLripy4.png' alt='JS' height='80px'></img>
                </SimpleGrid>
            </div>
            <div id='Lista' style={{ margin: '100px', paddingRight: '5px' }} >
                <Button bg={'blue.400'}
                    color={'white'}

                    _hover={{
                        bg: 'blue.500',
                    }} size='xs' onClick={isGrid}>
                    LADO A LADO:
                </Button>
                <br /><br />
                <SimpleGrid columns={1} spacingX='20px' spacingY='20px'>
                    <img onClick={() => goEditProduct()} src='https://i.imgur.com/iLripy4.png' alt='JS' height='80px'></img>
                    <img onClick={() => goEditProduct()} src='https://i.imgur.com/iLripy4.png' alt='JS' height='80px'></img>
                    <img onClick={() => goEditProduct()} src='https://i.imgur.com/iLripy4.png' alt='JS' height='80px'></img>
                    <img onClick={() => goEditProduct()} src='https://i.imgur.com/iLripy4.png' alt='JS' height='80px'></img>
                    <img onClick={() => goEditProduct()} src='https://i.imgur.com/iLripy4.png' alt='JS' height='80px'></img>
                    <img onClick={() => goEditProduct()} src='https://i.imgur.com/iLripy4.png' alt='JS' height='80px'></img>
                    <img onClick={() => goEditProduct()} src='https://i.imgur.com/iLripy4.png' alt='JS' height='80px'></img>
                </SimpleGrid>
            </div>
        </>
    )
}