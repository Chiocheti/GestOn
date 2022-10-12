import {
    Flex,
    Tag,
    Input,
    Avatar,
    FormControl,
    Stack,
    Center,
    FormLabel,
    Switch,
} from '@chakra-ui/react';

import UseAuth from '../hooks/useAuth'
import NavbarLogOn from '../components/navbarLogOnFornecedor';
import Cartao from '../components/createMyProduct';
import { useToast } from '@chakra-ui/react'
import React from 'react';
import Axios from 'axios';
import Router from "next/router";

export default function editProdrutro() {

    const { user, signin, signout } = UseAuth();
    console.log(user);

    const toast = useToast()

    const options = {
        method: 'GET',
        url: `http://localhost:3000/api/usuario/cadastro/${user.email}/fornecedor`
    };
    Axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.log(error);
        toast({
            title: 'Você não possuí uma conta',
            description: `Crie sua conta para ter acesso a esta area!`,
            status: 'warning',
            duration: 3000,
            isClosable: true,
        })
        Router.push('/cadastro');
    });

    const property = {
        nome: "Saca de grãos de milho",
        descricaoLonga: "Saca de 20k de grão de milho americanos",
        descricaoCurta: "Saca de 20k de milho",
        linkImg: "https://agristore.com/image/cache/catalog/Di%20Solo/milho-ipanema-20kg-1200x1200.png",
        marca: "Milho Ipanema",
        preco: "R$99,99"
    }

    return (
        <>
            <NavbarLogOn />
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex
                    p={8}
                    flex={1}
                    lign={'center'}
                    justify={'center'}
                    boxShadow={'lg'}
                >
                    <Stack spacing={4} w={'full'} maxW={'md'}>
                        <Stack direction={['column', 'row']} spacing={6}>
                            <Center>
                                <Flex>
                                    <Avatar size="xl" src={property.linkImg} />
                                </Flex>
                            </Center>
                            <Center w="full">
                                <Tag borderRadius='full' colorScheme='teal' fontSize='10px'>
                                    AGRICOLA
                                </Tag>
                                <Tag borderRadius='full' colorScheme='teal' fontSize='10px'>
                                    MILHO
                                </Tag>
                                <Tag borderRadius='full' colorScheme='teal' fontSize='10px'>
                                    PLANTIO
                                </Tag>
                            </Center>
                        </Stack>
                        <Stack spacing={6}>
                            <br /><br />
                            <Stack
                                direction={['column', 'row']}
                                spacing={6}
                                align={'center'}
                                justify={'center'}>
                                <center
                                    lineHeight={1.1}
                                    fontSize={{ base: '2xl', sm: '3xl' }}
                                >
                                    <FormControl isRequired>
                                        <FormLabel> VALOR:
                                        </FormLabel>
                                        <Input
                                            id='valor'
                                            type='number'
                                            placeholder='500 conto'
                                        />
                                    </FormControl><br/>
                                    <FormControl display='flex' alignItems='center'>
                                        <FormLabel htmlFor='Sumemo' mb='1'>
                                            Produto em estoque?
                                        </FormLabel>
                                        <Switch id='Sumemo' />
                                    </FormControl>
                                </center>
                            </Stack>
                        </Stack>
                    </Stack>
                </Flex>
                <Flex flex={1}>
                    <Cartao />
                </Flex>
            </Stack>
        </>
    )
}