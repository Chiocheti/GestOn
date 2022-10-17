import {
    Button,
    Flex,
    Input,
    Stack,
    FormControl,
    FormLabel,
    Heading,
    Center,
    Divider,
    useDisclosure,
    useToast,
    Tag,
    SimpleGrid
} from '@chakra-ui/react';

import React, { useState } from 'react';
import { FcPhoneAndroid } from "react-icons/fc";
import Axios from 'axios';
import Card from '../components/cardTags.js';

export default function telaDoADM() {

    const toast = useToast()

    console.log("Inicio da pagina")

    var [validado, setValidado] = useState(() => false)
    var [idFuncionario, setIdFuncionario] = useState(() => "idFuncionario preset");
    var [nome, setNome] = useState(() => 'nome preset');
    var [telefone, setTelefone] = useState(() => 'telefone preset');
    var [senha, setSenha] = useState(() => 'senha preset');
    var [tags, setTags] = useState([1, 2]);

    console.log("idFuncionario")
    console.log(idFuncionario)
    console.log("nome")
    console.log(nome)
    console.log("telefone")
    console.log(telefone)
    console.log("senha")
    console.log(senha)

    function loadTags() {

        var lista = document.getElementById('tags');
        lista.hidden = false;

        const options = {
            method: 'GET',
            url: `http://localhost:3000/api/categoria`
        };

        Axios.request(options).then(function (response) {
            var tag = response.data
            setTags(() => tag);
            console.log("tags: ")
            console.log(tags);

        }).catch(function (error) {
            console.log("Erro do sistema: " + error);
        });
    }

    function formatadorDeTelefone(telefone) {
        telefone = telefone.replace(/^(\d{2})(\d)/g, "($1)$2"); //Coloca parênteses em volta dos dois primeiros dígitos
        var novoTelefone = telefone.replace(/(\d)(\d{5})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
        console.log('Telefone formatado:')
        console.log(novoTelefone)
        return novoTelefone;
    }

    function formataPraSalvar(telefone) {
        let part1 = telefone.slice(0, 8)
        console.log(part1)
        let part2 = telefone.slice(9, 10)
        console.log(part2)
        let part3 = telefone.slice(10,)
        console.log(part3)
        console.log("Telefone para salvar: ")
        let telefoneParaSalvar = `${part1}${part2}-${part3}`
        console.log(telefoneParaSalvar)
        return telefoneParaSalvar
    }

    function testaTelefone(telefone) {
        var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
        console.log("Teste do Telefone:")
        console.log(regex.test(telefone))
        return regex.test(telefone);
    }

    function mudaNome() {
        var novoNome = document.getElementById('nome').value;

        if (novoNome.length < 1) {
            toast({
                title: 'Insira um nome valido',
                description: "Nome invalido",
                status: 'warning',
                duration: 9000,
                isClosable: true,
            })
        } else {

            var options = {
                method: 'PUT',
                url: `http://localhost:3000/api/adm/${idFuncionario}`,
                headers: { 'Content-Type': 'application/json' },
                data: { nome: novoNome, telefone: telefone, senha: senha },
            };

            Axios.request(options).then(function (response) {
                console.log(response.data);
                toast({
                    title: 'Nome Alterado com sucesso',
                    description: `Novo nome: ${novoNome}`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
            }).catch(function (error) {
                console.error(error);
                toast({
                    title: 'Falha ao Alterar o nome',
                    description: `Erro ao alterar o nome !!!`,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            });
        }
    }

    function mudaTelefone() {
        var novoTelefone = document.getElementById('telefone').value;
        var telefoneFormatado = formatadorDeTelefone(novoTelefone);

        if (novoTelefone.length != 11 || isNaN(novoTelefone || !testaTelefone(telefoneFormatado))) {
            toast({
                title: 'Insira um Numero de Telefone valido',
                description: "Valor de Telefone invalido",
                status: 'warning',
                duration: 9000,
                isClosable: true,
            })
        } else {
            var telefoneParaSalvar = formataPraSalvar(telefoneFormatado)
            var options = {
                method: 'PUT',
                url: `http://localhost:3000/api/adm/${idFuncionario}`,
                headers: { 'Content-Type': 'application/json' },
                data: { nome: nome, telefone: telefoneParaSalvar, senha: senha },
            };

            Axios.request(options).then(function (response) {
                console.log(response.data);
                toast({
                    title: 'Telefone Alterado com sucesso',
                    description: `Novo Telefone: ${novoTelefone}`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
            }).catch(function (error) {
                console.error(error);
                toast({
                    title: 'Falha ao Alterar o telefone',
                    description: `Erro ao alterar o telefone !!!`,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            });
        }
    }

    function mudaSenha() {
        var novaSenha = document.getElementById('senha').value
        var confirmaSenha = document.getElementById('confirmaSenha').value

        if (novaSenha != confirmaSenha || novaSenha.length <= 1) {
            toast({
                title: 'Senha não confere',
                description: "Verifique se a senha possui mais de 1 digito",
                status: 'warning',
                duration: 9000,
                isClosable: true,
            })
        } else {
            var options = {
                method: 'PUT',
                url: `http://localhost:3000/api/adm/${idFuncionario}`,
                headers: { 'Content-Type': 'application/json' },
                data: { nome: nome, telefone: telefone, senha: novaSenha },
            };

            Axios.request(options).then(function (response) {
                console.log(response.data);
                toast({
                    title: 'Senha Alterada com sucesso',
                    description: `Nova senha: ${novaSenha}`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
            }).catch(function (error) {
                console.error(error);
                toast({
                    title: 'Falha ao Alterar a senha',
                    description: `Erro ao alterar a senha !!!`,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            });
        }
    }

    function fazerLogin() {

        var idFuncionarioLido = document.getElementById("validaIdFuncionario").value
        console.log(idFuncionarioLido)
        var senhaLida = document.getElementById("validaSenha").value
        console.log(senhaLida)

        const options = {
            method: 'GET',
            url: `http://localhost:3000/api/adm/valida/${idFuncionarioLido}/${senhaLida}`
        };
        Axios.request(options).then(function (response) {
            const resp = response.data;
            console.log("Response data")
            console.log(response.data);

            setIdFuncionario(() => resp.idFuncionario)
            console.log(resp.idFuncionario)
            setNome(() => resp.nome)
            console.log(resp.nome)
            setTelefone(() => resp.telefone)
            console.log(resp.telefone)
            setSenha(() => resp.senha)
            console.log(resp.senha)
            setValidado(() => true)

            toast({
                title: 'Validado',
                description: `Olá ${resp.nome} voce foi validado com sucesso `,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })

            document.getElementById("parteDeLogin").hidden = true
            document.getElementById("posLogin").hidden = false

            console.log(idFuncionario)
            console.log(nome)
            console.log(telefone)
            console.log(senha)

        }).catch(function (error) {
            console.log("Erro do sistema: " + error)
            toast({
                title: 'Id ou Senha incorretos',
                description: `O id: [${idFuncionarioLido}] não confere com a Senha: [${senhaLida}]`,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        });
    }

    async function cadastraCategoria() {
        var nomeCategoria = document.getElementById("nomeCategoria").value
        console.log("Nome Categoria: " + nomeCategoria)

        if (validado) {
            console.log("Cadastro de Tag validado true")
            if (!nomeCategoria == "") {
                const options = {
                    method: 'POST',
                    url: 'http://localhost:3000/api/categoria',
                    headers: { 'Content-Type': 'application/json' },
                    data: { idFuncionario: idFuncionario, nome: nomeCategoria }
                };
                await Axios.request(options).then(function (response) {
                    console.log(response.data);
                }).catch(function (error) {
                    console.error(error);
                });
            }
        } else {
            console.log("Cadastro de Tag validado false")
            onOpen();
            console.log('false')
        }
    }

    return (
        <div>
            <Center>
                <div id='parteDeLogin'>
                    <Stack spacing={4} w={'full'} maxW={'md'}>
                        <Heading fontSize={'2xl'}>Logar como Administrador</Heading>
                        <FormControl >
                            <FormLabel>ID do Funcionario</FormLabel>
                            <Input id="validaIdFuncionario" />
                        </FormControl>
                        <FormControl >
                            <FormLabel>Senha</FormLabel>
                            <Input id="validaSenha" />
                        </FormControl>
                        <Stack spacing={6}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                            </Stack>
                            <Button colorScheme={'blue'} variant={'solid'} onClick={fazerLogin}>
                                Login
                            </Button>
                        </Stack>
                    </Stack>
                </div>
            </Center>

            <div id='posLogin' hidden>
                <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                    <Flex
                        p={8}
                        flex={1}
                        lign={'center'}
                        justify={'center'}
                    >
                        <div id='atualizarRegistro'>
                            <Stack spacing={4} w={'full'} maxW={'md'}>
                                <Stack direction={['column', 'row']} spacing={6}>
                                    <Center w="full">
                                        <Heading colorScheme='teal' w="full">
                                            ADMINISTRADOR
                                        </Heading>
                                    </Center>
                                </Stack>
                                <Divider />
                                <FormControl >
                                    <Heading>ID :</Heading>
                                </FormControl>
                                <FormLabel> Nome:
                                </FormLabel>
                                <Input
                                    placeholder={nome} id="nome"
                                />
                                <Button
                                    leftIcon={<FcPhoneAndroid />}
                                    colorScheme='teal'
                                    variant='solid'
                                    onClick={() => mudaNome()}
                                >
                                    Save
                                </Button>
                                <FormLabel> Telefone:
                                </FormLabel>
                                <Input
                                    placeholder={telefone} id='telefone'
                                />
                                <Button
                                    leftIcon={<FcPhoneAndroid />}
                                    colorScheme='teal'
                                    variant='solid'
                                    onClick={() => mudaTelefone()}
                                >
                                    Save
                                </Button>
                                <FormControl >
                                    <Heading>Senha:</Heading>
                                </FormControl>
                                <FormLabel> nova Senha:
                                </FormLabel>
                                <Input
                                    placeholder='********' id="senha"
                                />
                                <FormLabel> Confirme a nova Senha:
                                </FormLabel>
                                <Input
                                    placeholder='********' id="confirmaSenha"
                                />
                                <Button
                                    leftIcon={<FcPhoneAndroid />}
                                    colorScheme='teal'
                                    variant='solid'
                                    onClick={() => mudaSenha()}

                                >
                                    Save
                                </Button>
                            </Stack>
                        </div>
                        <Heading>Editar dados de Administrador</Heading>
                    </Flex>
                    <Center>
                        <Divider orientation='vertical' />
                    </Center>
                    <Flex flex={1}>
                        <Stack >
                            <Flex >
                                <Stack >
                                    <FormControl >
                                        <Heading>Cadastrar Categoria</Heading>
                                        <Input id='nomeCategoria' placeholder='Nome da Categoria: ' />
                                    </FormControl>
                                    <Stack spacing={6}>
                                        <Stack
                                            direction={{ base: 'column', sm: 'row' }}
                                            align={'start'}
                                            justify={'space-between'}>
                                        </Stack>
                                        <Button colorScheme={'teal'} variant={'solid'} onClick={() => { cadastraCategoria() }}>
                                            Cadastrar
                                        </Button>
                                        <Divider />
                                        <Stack>
                                            <Flex>
                                                <Stack>
                                                    <Heading>Lista de Categoria</Heading>
                                                </Stack>
                                                <Button
                                                    leftIcon={<FcPhoneAndroid />}
                                                    colorScheme='teal'
                                                    variant='solid'
                                                    onClick={() => { loadTags(idFuncionario) }}
                                                >
                                                    Mostrar Tags cadastradas
                                                </Button>
                                            </Flex>
                                            <div id='tags' hidden={true} >
                                                <Card tags={tags} />
                                            </div>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Flex>
                        </Stack>
                    </Flex>
                </Stack>
                <Center>
                    <Divider />
                </Center>
            </div>
        </div >
    )
}