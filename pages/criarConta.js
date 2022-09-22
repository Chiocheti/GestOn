import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Stack,
    Checkbox,
    Button,
    useToast,
} from '@chakra-ui/react'

import React, { useState } from 'react';
import UseAuth from '../hooks/useAuth'
import Axios from 'axios';
import Router from "next/router";

import NavbarLogOff from '../components/navbarLogOff';

export default function criarConta() {

    const { user, signin, signout } = UseAuth();

    const[ cadastro , setCadastro ] = useState('consumidor');

    const toast = useToast()

    console.log("Usuario->")
    console.log(user)
    console.log("---------");

    function isFornecedor() {
        const elementFornecedor = document.getElementById("fornecedor");
        elementFornecedor.hidden = false;

        const elementConsumidor = document.getElementById("consumidor");
        elementConsumidor.hidden = true;

        setCadastro("fornecedor");
    }

    function isConsumidor() {
        const elementFornecedor = document.getElementById("fornecedor");
        elementFornecedor.hidden = true;

        const elementConsumidor = document.getElementById("consumidor");
        elementConsumidor.hidden = false;

        setCadastro("consumidor");
    } 
    
    function verificaFornecedor(){
        const email = user.email
        const telefone = document.getElementById("telefoneFornecedor").value;
        const cnpj = document.getElementById("cnpj").value;
        const nomeFantasia = document.getElementById("nomeFantasia").value;
        if(cnpj.length != 18){
            toast({
                title: 'Insira um CNPJ valido',
                description: "Valor de CNPJ invalido",
                status: 'warning',
                duration: 9000,
                isClosable: true,
              })
        }else{
            if(telefone.length != 11){
                toast({
                    title: 'Insira um Numero de Telefone valido',
                    description: "Valor de Telefone invalido",
                    status: 'warning',
                    duration: 9000,
                    isClosable: true,
                  })
            }else{
                const options = {
                    method: 'GET',
                    url: `http://localhost:3000/api/fornecedor/${email}`,
                    headers: {'Content-Type': 'application/json'}
                  };
                  
                  Axios.request(options).then(function (response) {
                      console.log(response.data);
                      console.log("Esse email ja esta em uso !!!");
                      toast({
                          title: 'Email Ja em uso',
                          description: "Tente cadastrar com outro email",
                          status: 'error',
                          duration: 9000,
                          isClosable: true,
                        })
                    }).catch(function (error) {
                    console.error(error);
                    toast({
                        title: 'Conta Criada com Sucesso',
                        description: `Bem Vindo a familia ${nomeFantasia}`,
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                      })
                    registerFornecedor();
                  }); 
            }
        }

        
    }

    function verificaConsumidor(){
        const email = user.email
        const cpf = document.getElementById("cpf").value;
        const telefone = document.getElementById("telefoneConsumidor").value;
        const nomeConsumidor = document.getElementById("nomeConsumidor").value;
        if(cpf.length != 11){
            toast({
                title: 'Insira um CPF valido',
                description: "Valor de CPF invalido",
                status: 'warning',
                duration: 9000,
                isClosable: true,
              })
        }else{
            if(telefone.length != 11){
                toast({
                    title: 'Insira um Numero de Telefone valido',
                    description: "Valor de Telefone invalido",
                    status: 'warning',
                    duration: 9000,
                    isClosable: true,
                  })
            }else{
                const options = {
                    method: 'GET',
                    url: `http://localhost:3000/api/consumidor/${email}`,
                    headers: {'Content-Type': 'application/json'}
                  };
                  Axios.request(options).then(function (response) {
                      console.log(response.data);
                      console.log("Esse email ja esta em uso !!!");
                        
                      toast({
                          title: 'Email Ja em uso',
                          description: "Tente cadastrar com outro email",
                          status: 'error',
                          duration: 9000,
                          isClosable: true,
                        })
                    }).catch(function (error) {
                    console.error(error);
                    toast({
                        title: 'Conta Criada com Sucesso',
                        description: `Bem Vindo ao I-Tiplace ${nomeConsumidor} !!!`,
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                      })
                    registerConsumidor();
                  }); 
                }  
            }
    }
    
    function registerUsuario(){
        // Cadastra o usuario 
        var options = {
            method: 'POST',
            url: 'http://localhost:3000/api/usuario',
            headers: { 'Content-Type': 'application/json' },
            data: { email: user.email, cadastro: cadastro}
        };

        Axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    function registerConsumidor() {

        const nome = document.getElementById("nomeConsumidor").value;
        const cpf = document.getElementById("cpf").value;
        const telefone = document.getElementById("telefoneConsumidor").value;

        console.log("Email: " + user.email)
        console.log("Nome: " + nome)
        console.log("CPF: " + cpf)
        console.log("Telefone: " + telefone)
        
        // Cadastra o usuario
        registerUsuario();

        // Cadastra o consumidor
        const options = {
            method: 'POST',
            url: 'http://localhost:3000/api/consumidor',
            headers: { 'Content-Type': 'application/json' },
            data: { emailUsuario: user.email, nome: nome, cpf: cpf, telefone: telefone }
        };

        Axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        Router.push("/")
    }

    function registerFornecedor() {

        const nomeFantasia = document.getElementById("nomeFantasia").value;
        const cnpj = document.getElementById("cnpj").value;
        const telefone = document.getElementById("telefoneFornecedor").value;
        const hora_abre = document.getElementById("hora_abre").value;
        const hora_fecha = document.getElementById("hora_fecha").value;

        console.log("emailUsuario: " + user.email)
        console.log("nomeFantasia: " + nomeFantasia)
        console.log("CNPJ: " + cnpj)
        console.log("Telefone: " + telefone)
        console.log("hora_abre: " + hora_abre)
        console.log("hora_fecha: " + hora_fecha)

        // Cadastra o usuario
        registerUsuario();

        // Cadastra o fornecedor
        const options = {
            method: 'POST',
            url: 'http://localhost:3000/api/fornecedor',
            headers: { 'Content-Type': 'application/json' },
            data: { emailUsuario: user.email , nomeFantasia: nomeFantasia, cnpj: cnpj, telefone: telefone, hora_abre: hora_abre, hora_fecha: hora_fecha }
        };

        Axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        Router.push("/")
    }
    return (
        <>
            <div>
                    <NavbarLogOff />
                    <FormControl isRequired>
                        <FormLabel> Email: </FormLabel>
                        <Input id='email' type='email' value={user.email} readOnly />
                    </FormControl>
            </div>

            <div id='fornecedor' hidden={true}>
                <Stack spacing={5} direction='row'>
                    <Button colorScheme='teal' size='xs' onClick={isConsumidor}>
                        Criar Conta Consumidor:
                    </Button>
                </Stack>
                <FormControl isRequired>
                    <FormLabel> Nome Fantasia: </FormLabel>
                    <Input placeholder='Nome: ' id='nomeFantasia' />
                    <FormLabel> CNPJ: </FormLabel>
                    <Input placeholder='Ex: XXXXXXXXXXXXXXXXXX' id='cnpj' />
                    <FormLabel> Telefone: </FormLabel>
                    <Input placeholder='Ex: 19999999999' id='telefoneFornecedor' />
                    <FormLabel> Hora Abre: </FormLabel>
                    <Input placeholder='Ex: 08:00:00 ' id='hora_abre' />
                    <FormLabel> Hora Fecha: </FormLabel>
                    <Input placeholder='Ex: 20:00:00 ' id='hora_fecha' />
                    <Button colorScheme='teal' variant='outline' onClick={() => {verificaFornecedor()}}>
                        Criar Conta
                    </Button>
                </FormControl>
            </div>

            <div id='consumidor'>
                <Stack spacing={5} direction='row'>
                    <Button colorScheme='teal' size='xs' onClick={isFornecedor}>
                        Criar Conta Fornecedor:
                    </Button>
                </Stack>
                <FormControl isRequired>
                    <FormLabel> Nome: </FormLabel>
                    <Input placeholder='Nome: ' id='nomeConsumidor' />
                    <FormLabel> CPF: </FormLabel>
                    <Input placeholder='Ex: 12345678911' id='cpf' />
                    <FormLabel> Telefone: </FormLabel>
                    <Input placeholder='Ex: 19999999999' id='telefoneConsumidor' />
                    <Button colorScheme='teal' variant='outline' onClick={() => {verificaConsumidor()}}>
                        Criar Conta
                    </Button>
                </FormControl>
            </div>
        </>
    )
}