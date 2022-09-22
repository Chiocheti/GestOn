
import UseAuth from "../hooks/useAuth"
import {
    Flex,
    Spacer,
    Box,
    Heading,
    ButtonGroup,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Wrap,
    WrapItem,
    Avatar,
    useToast
  } from '@chakra-ui/react'
  
import Axios from 'axios';
import Router from "next/router";

export default function indexFornecedor(){
    const{ user , signout } = UseAuth()
    const Toast = useToast();
    var usuarioLogado = null

    const options = {
        method: 'GET',
        url: `http://localhost:3000/api/usuario/${user.email}`,
        headers: {'Content-Type': 'application/json'}
    };
        Axios.request(options).then(function (response) {
            usuarioLogado = response.data
            const options2 = {
            method: 'GET',
            url: `http://localhost:3000/api/fornecedor/${user.email}`,
            headers: {'Content-Type': 'application/json'}
        };
        Axios.request(options2).then(function (response) {
            console.log("Segundo requiest");
            console.log(response.data);
            usuarioLogado = Object.assign(usuarioLogado , response.data )
            console.log(usuarioLogado);
            Toast({
                title: 'Que bom ver voce aqui novamente',
                description: `Bem Vindo ${usuarioLogado.nomeFantasia} !!!`,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        }).catch(function (error) {
            console.error(error);
            Toast({
                title: 'Essa conta não existe',
                description: `Tente entrar com outro email`,
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
            Router.push("/")
          }); 
        }).catch(function (error) {
        console.error(error);
        Toast({
            title: 'Essa conta não existe',
            description: `Tente entrar com outro email`,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
          Router.push("/")
      }); 
    return(
    <Flex minWidth='max-content' alignItems='center' gap='2' >
        <Box p='2'>
        <Heading fontSize='40px' ml='100'>I-Tiplace</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
        <Button colorScheme='blue'>Home</Button>
        <Button colorScheme='blue'> Mercado </Button>
        <Button colorScheme='blue'> Padaria </Button>
        <Button colorScheme='blue'> Açougue </Button>
        <Button colorScheme='blue'> Farmacia </Button>
        </ButtonGroup>
        <Menu>
        <MenuButton as={Button} >
            Actions
        </MenuButton>
        <MenuList>
            <MenuItem onClick={ () => signout()}> Deslogar </MenuItem>
        </MenuList>
        </Menu>
        <Wrap>
        <WrapItem onClick={ () => Toast({
                title: `Ola ${usuarioLogado.nomeFantasia}`,
                description: "Vamos fazer algumas compras ???",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })}>
                { user && <Avatar name='User' src={user.photoURL} />}
            </WrapItem>
        </Wrap>
    </Flex>
    )
}
