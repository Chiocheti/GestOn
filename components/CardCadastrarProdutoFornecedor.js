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
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Input,
    FormControl,
    FormLabel,
    useToast
} from '@chakra-ui/react'

import UseAuth from '../hooks/useAuth'
import { FcInfo } from "react-icons/fc";
import React from 'react';
import { EditIcon } from '@chakra-ui/icons'
import NavbarLogOn from '../components/navbarLogOnFornecedor';
import Axios from 'axios';

export default function cardProduto({ produto }) {

    console.log(produto)

    const { user, signin, signout } = UseAuth();
    var usuario;

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const toast = useToast()

    const options = {
        method: 'GET',
        url: `http://localhost:3000/api/usuario/cadastro/${user.email}/fornecedor`
    };
    Axios.request(options).then(function (response) {
        console.log(response.data);
        usuario = response.data;
        console.log("Usuario: ");
        console.log(usuario);
    }).catch(function (error) {
        console.log(error);
    });

    function salvaProduto() {

        var preco = document.getElementById("preco").value;

        const options = {
            method: 'POST',
            url: "http://localhost:3000/api/produtoDoFornecedor",
            headers: { 'Content-Type': 'application/json' },
            data: { idFornecedor:usuario.id , idProduto:produto.idProduto , preco:preco , mostrar:true }
        };
        Axios.request(options).then(function (response) {
            console.log(response.data);
            toast({
                title: 'Conta Criada com sucesso',
                description: "faça agora seu login",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }).catch(function (error) {
            console.log(error);
        })
    }

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Registro de Produto</DrawerHeader>

                    <DrawerBody>
                        <Center>
                            <Box fontSize={32} > {produto.nome} </Box>
                        </Center>
                        <Image
                            src={produto.linkImg}
                            mt={10}
                            mb={10}
                            borderRadius={10}
                        />
                        <FormControl>
                            <FormLabel>Preço</FormLabel>
                            <Input type='text' id='preco'/>
                        </FormControl>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue' onClick={()=>{salvaProduto()}} >Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

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
                            <Button
                                w='6rem'
                                h='em'
                                fontSize='16px'
                                bg='teal.1000'
                                leftIcon={<FcInfo fontSize='2.0rem' />}
                            >
                                Info
                            </Button>
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
                        <EditIcon
                            w={7}
                            h={7}
                            color="lightgray"
                            onClick={() => { onOpen() }}
                            ref={btnRef}
                        />
                    </AvatarGroup>
                </Flex>
            </Box>
        </>
    )
}