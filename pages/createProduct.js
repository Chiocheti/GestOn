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
import Carrozel from '../components/carrozel';
import Butao from '../components/butaoDeSalva';
import Saporra from '../components/cardProduto';
import { useToast } from '@chakra-ui/react'
import React from 'react';
import Axios from 'axios';
import Router from "next/router";
import { EditIcon, CheckIcon, CloseIcon, FcApprove } from '@chakra-ui/icons';

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

    function EditableControls() {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls()

        return isEditing ? (
            <ButtonGroup justifyContent='center' size='sm'>
                <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
                <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent='center'>
                <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
            </Flex>
        )
    }
    const size = '96px';
    const color = 'teal';

    const pulseRing = keyframes`
        0% {transform: scale(0.33);}
        40%,50% {opacity: 0;}
        100% {opacity: 0;}
    `;

    const [show, setShow] = React.useState(false)

    const handleToggle = () => setShow(!show)

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
                        <Heading fontSize={'2xl'}>Nome do Produto</Heading>
                        <Stack spacing={6}>
                            <Editable
                                spacing={6}
                                textAlign='center'
                                defaultValue='Milho Ipanema'
                                fontSize='1xl'
                                isPreviewFocusable={false}>
                                <EditablePreview />
                                <Input as={EditableInput} />
                                <EditableControls />
                            </Editable>

                            <Heading fontSize={'2xl'}>Descrição</Heading>

                            <Editable
                                textAlign='center'
                                defaultValue='Prantador de milho'
                                fontSize='1xl'
                                isPreviewFocusable={false}>
                                <EditablePreview />
                                <Input as={EditableInput} />
                                <EditableControls />
                            </Editable>

                            <Heading fontSize={'2xl'}>Descrição Longa</Heading>

                            <Editable
                                textAlign='center'
                                defaultValue='Prantador de milho'
                                fontSize='1xl'
                                isPreviewFocusable={false}>
                                <EditablePreview />
                                <Input as={EditableInput} />
                                <EditableControls />
                            </Editable>

                            <Heading fontSize={'2xl'}>Marca</Heading>

                            <Editable
                                textAlign='center'
                                defaultValue='SóMilho'
                                fontSize='1xl'
                                isPreviewFocusable={false}>
                                <EditablePreview />
                                <Input as={EditableInput} />
                                <EditableControls />
                            </Editable>
                            <Heading fontSize={'2xl'}>Imagem:</Heading>
                            <Editable
                                textAlign='center'
                                defaultValue='https://imgur.com/ÓUMIO'
                                fontSize='1xl'
                                isPreviewFocusable={false}>
                                <EditablePreview />
                                <Input as={EditableInput} />
                                <EditableControls />
                            </Editable>

                            <Butao />
                        </Stack>
                    </Stack>
                </Flex>
                <Flex flex={1}>
                    <Saporra />
                </Flex>
            </Stack>
                <Carrozel nome="tanto faz"/>
        </>
    )
}