import {
    Flex,
    Tag,
    Input,
    Avatar,
    Button,
    Stack,
    IconButton,
    ButtonGroup,
    Heading,
    Editable,
    EditableInput,
    EditablePreview,
    useEditableControls,
    keyframes,
    Center,
} from '@chakra-ui/react';

import UseAuth from '../hooks/useAuth'
import NavbarLogOn from '../components/navbarLogOnFornecedor';
import Cartao from '../components/cardProduto';
import { useToast } from '@chakra-ui/react'
import React, { useState } from 'react';
import Axios from 'axios';
import Router from "next/router";

export default function editProdrutro() {

    const { user, signin, signout } = UseAuth();
    console.log(user);

    const [nomeProduto, setNomeProduto] = useState(() => " ");
    const [descricaoProduto, setDescricaoProduto] = useState(() => " ");
    const [descricaoLongaProduto, setDescricaoLongaProduto] = useState(() => " ");
    const [marcaProduto, setMarcaProduto] = useState(() => " ");
    const [imageProduto, setImageProduto] = useState(() => "https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif");

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

    const prodruto = {
        nome: nomeProduto,
        descricaoLonga: descricaoLongaProduto,
        descricaoCurta: descricaoProduto,
        linkImg: imageProduto,
        marca: marcaProduto
    }

    function save() {

        var nome = document.getElementById("nome").value;
        var descricao = document.getElementById("descricao").value;
        var descricaolonga = document.getElementById("descricaolonga").value;
        var marca = document.getElementById("marca").value;
        var imagem = document.getElementById("imagem").value;

        if (nome == null || nome == "") {
            toast({
                title: 'Ocorreu um erro no formulário!',
                description: `Por favor, insira um nome!`,
                status: 'warning',
                duration: 3000,
                isClosable: true,
            })
        } else if (descricao == null || descricao == "") {
            toast({
                title: 'Ocorreu um erro no formulário!',
                description: `Por favor, insira uma descrição!`,
                status: 'warning',
                duration: 3000,
                isClosable: true,
            })
        } else if (descricaolonga == null || descricaolonga == "") {
            toast({
                title: 'Ocorreu um erro no formulário!',
                description: `Por favor, insira uma descrição longa!`,
                status: 'warning',
                duration: 3000,
                isClosable: true,
            })
        } else if (marca == null || marca == "") {
            toast({
                title: 'Ocorreu um erro no formulário!',
                description: `Por favor, insira uma marca!`,
                status: 'warning',
                duration: 3000,
                isClosable: true,
            })
        } else if (imagem == null || imagem == "") {
            toast({
                title: 'Ocorreu um erro no formulário!',
                description: `Por favor, insira uma imagem!`,
                status: 'warning',
                duration: 3000,
                isClosable: true,
            })
        } else {
            setNomeProduto(nome)
            setDescricaoLongaProduto(descricaolonga)
            setDescricaoProduto(descricao)
            setImageProduto(imagem)
            setMarcaProduto(marca)
            // Cadastra o produto 
            var options = {
                method: 'POST',
                url: 'http://localhost:3000/api/produto',
                headers: { 'Content-Type': 'application/json' },
                data: { nome: nome, descricaoCurta: descricao, descricaoLonga: descricaolonga, linkImg: imagem, marca: marca }
            };
            console.log(options);
            Axios.request(options).then(function (response) {
                console.log(response.data);
                toast({
                    title: 'Produto cadastrado com sucesso!',
                    description: "Edite as tags dele para que ele apareça na lista de produtos!",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
            }).catch(function (error) {
                console.error(error);
            });
        }
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
                        <Heading fontSize={'2xl'}>Nome do Produto</Heading>
                        <Input placeholder="nome do produto" id="nome" />
                        <Stack spacing={6}>

                            <Heading fontSize={'2xl'}>Descrição</Heading>
                            <Input placeholder="Descrição" id="descricao" />

                            <Heading fontSize={'2xl'}>Descrição Longa</Heading>
                            <Input placeholder="Descrição longa" id="descricaolonga" />

                            <Heading fontSize={'2xl'}>Marca</Heading>
                            <Input placeholder="Marca" id="marca" />

                            <Heading fontSize={'2xl'}>Imagem:</Heading>
                            <Input placeholder="https://imgur.com/ÓUMIO" id="imagem" />

                            <Button
                                colorScheme='teal'
                                variant='solid' onClick=
                                {() => { save() }}>Save
                            </Button>
                        </Stack>
                    </Stack>
                </Flex>
                <Flex flex={1}>
                    <Cartao property={prodruto} />
                </Flex>
            </Stack>
        </>
    )
}