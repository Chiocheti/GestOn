import {
    Center,
    Heading,
    Text,
    SimpleGrid,
} from '@chakra-ui/react';
import React from "react"
import "keen-slider/keen-slider.min.css"
import Router from "next/router";


function goEditProduct() {
    Router.push('/editProduct');
}

export default function App() {
    return (
        <><br /><br /><br /><br />
            <Center><Heading
                fontWeight={300}
                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'}>
                <Text as={'span'} color={'green.400'}>
                    Sugestões de Produtos
                </Text>
            </Heading></Center>
            <div style={{ margin: '100px', paddingRight: '5px' }} >
                <SimpleGrid columns={4} spacing={2}>
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
        </>
    )
}