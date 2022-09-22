import {
    Flex,
    Tag,
    Input,
    Avatar,
    FormControl,
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
    FormLabel,
    Switch,
    Checkbox,
    CheckboxGroup,
} from '@chakra-ui/react';

import UseAuth from '../hooks/useAuth'
import NavbarLogOn from '../components/navbarLogOnFornecedor';
import Saporra from '../components/cardProduto';
import { useToast } from '@chakra-ui/react'
import React from 'react';
import Axios from 'axios';
import Router from "next/router";
import { EditIcon, CheckIcon, CloseIcon, FcLike, FcCurrencyExchange, FcInfo } from '@chakra-ui/icons';

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
                        <Stack spacing={6}>

                            <Heading fontSize={'2xl'}>Valor</Heading>
                            <Editable
                                textAlign='center'
                                defaultValue='100,00 conto'
                                fontSize='2xl'
                                isPreviewFocusable={false}>
                                <EditablePreview />
                                <Input as={EditableInput} />
                                <EditableControls />
                            </Editable>
                            <Heading fontSize={'2xl'}>Defina as categorias</Heading>
                            <CheckboxGroup colorScheme='green' defaultValue={['agricola']}>
                                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                                    <Checkbox value='agricola'>Agricola</Checkbox>
                                    <Checkbox value='milho'>Milho</Checkbox>
                                    <Checkbox value='plantio'>Plantio</Checkbox>
                                </Stack>
                            </CheckboxGroup>
                            <FormControl display='flex' alignItems='center'>
                                <FormLabel htmlFor='Sumemo' mb='1'>
                                    Produto em estoque?
                                </FormLabel>
                                <Switch id='Sumemo' />
                            </FormControl>
                        </Stack>
                    </Stack>
                </Flex>
                <Flex flex={1}>
                    <Saporra />
                </Flex>
            </Stack>
        </>
    )
}