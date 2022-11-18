import {
    Button,
    Flex,
    Input,
    Stack,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Box,
    Center,
    Divider,
    Text,
    useToast,
    Textarea,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react';

import React, { useState } from 'react';
import { FcPhoneAndroid } from "react-icons/fc";
import Axios from 'axios';
import Card from '../components/cardTags.js';
import NavbarADM from '../components/navbarADM.js';

export default function telaDoADM() {

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const { isOpen, onOpen, onClose } = useDisclosure()

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

        var lista = document.getElementById('tags').trim();
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
        var novoNome = document.getElementById('nome').value.trim();

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
                setNome(novoNome)
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
        var novoTelefone = document.getElementById('telefone').value.trim();
        var telefoneFormatado = formatadorDeTelefone(novoTelefone).trim();

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
                setTelefone(novoTelefone)
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
        var novaSenha = document.getElementById('senha').value.trim();
        var confirmaSenha = document.getElementById('confirmaSenha').value.trim();

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
                setSenha(novaSenha)
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

        var idFuncionarioLido = document.getElementById("validaIdFuncionario").value.trim();
        console.log(idFuncionarioLido)
        var senhaLida = document.getElementById("validaSenha").value.trim();
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
        var nomeCategoria = document.getElementById("nomeCategoria").value.trim()
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

    let [value, setValue] = React.useState('')

    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }


    return (
        <div>

            <Stack>

                <div id='parteDeLogin'>
                    <>
                        <NavbarADM />
                        <Center minHeight='100vh' width='full' align='center' justifyContent='center'>
                            <Box
                                borderWidth={1}
                                px={4}
                                width='full'
                                maxWidth='950px'
                                borderRadius={15}
                                textAlign='center'
                                boxShadow='lg'
                                my={140}>
                                <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                                        <Stack spacing={4} w={'full'} maxW={'md'}>
                                            <Heading fontSize={'2xl'}>Logar como Administrador</Heading>
                                            <FormControl >
                                                <FormLabel>ID do Funcionario</FormLabel>
                                                <Input id="validaIdFuncionario" />

                                            </FormControl>
                                            <FormControl >
                                                <FormLabel>Senha</FormLabel>
                                                <Input type="password" id="validaSenha" />
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

                                    </Flex>
                                    <Flex flex={1}>
                                        <Image
                                            objectFit={'cover'}
                                            rounded={'md'}
                                            borderRadius={15}
                                            alt={'feature image'}
                                            src={
                                                'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                                            }
                                        />
                                    </Flex>
                                </Stack>

                            </Box>
                        </Center>
                    </>
                </div>
            </Stack>

            <div id='posLogin' hidden>
                <NavbarADM />
                <Box textAlign="center">

                    <Heading as="h2" size="xl" mt={6} mb={2}>
                        Administrador
                    </Heading>
                </Box>
                <Center minHeight='100vh' width='full' justifyContent='center'>

                    <Box
                        px={4}
                        width='full'
                        maxWidth='1400px'
                        borderRadius={15}
                        textAlign='center'
                        boxShadow='lg'
                        my={25}>
                        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                            <Flex id='atualizarRegistro' p={8} flex={1} align={'center'} justify={'center'}>
                                <Stack w={'full'} maxW={'md'}>
                                    <FormLabel>
                                        <Heading >ID: {idFuncionario}</Heading>
                                    </FormLabel>

                                    <FormLabel> Nome:  {nome}
                                    </FormLabel>
                                    <FormLabel> Telefone:  {telefone}
                                    </FormLabel>
                                    <Divider />
                                    <FormLabel >
                                        <Heading>Atualizar Dados de Usuario</Heading>
                                    </FormLabel>

                                    <FormLabel> Nome:  {nome}
                                    </FormLabel>
                                    <Input
                                        id="nome"
                                    />
                                    <FormLabel> Telefone:  {telefone}
                                    </FormLabel>
                                    <Input
                                        id='telefone'
                                    />

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

                                    >
                                        Save
                                    </Button>
                                </Stack>
                            </Flex>
                            <Flex flex={1}>
                                <Image
                                    alt={'Login Image'}
                                    objectFit={'cover'}
                                    borderRadius={15}
                                    src={
                                        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                                    }
                                />
                            </Flex>
                        </Stack>
                    </Box>
                </Center>
                <Center>
                    <Divider />
                </Center>
                <Box textAlign="center">

                    <Heading as="h2" size="xl" mt={6} mb={2}>
                        Espaço de Funções
                    </Heading>
                </Box>
                <Box
                    borderWidth={0}
                    px={4}
                    width='full'
                    maxWidth='1400px'
                    borderRadius={15}
                    boxShadow='lg'
                    my={50}>
                    <Button onClick={onOpen}>Funções Categorias</Button>
                    <Modal
                        initialFocusRef={initialRef}
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>CATEGORIAS</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <Stack w={'full'} maxW={'md'}>
                                    <FormControl >
                                        <Heading>Cadastrar Categoria</Heading>
                                        <Input id='nomeCategoria' placeholder='Nome da Categoria: ' maxlength='20' />
                                    </FormControl>
                                    <Button colorScheme={'teal'} variant={'solid'} onClick={() => { cadastraCategoria() }}>
                                        Cadastrar
                                    </Button>
                                </Stack>
                                <Stack>
                                    <Flex>
                                        <Heading>Lista de Categoria</Heading>
                                    </Flex>
                                    <Flex>
                                        <Button
                                            colorScheme='teal'
                                            variant='solid'
                                            onClick={() => { loadTags(idFuncionario) }}>
                                            Mostrar/Atualizar Tags Cadastradas
                                        </Button>
                                    </Flex>
                                    <div id='tags' hidden={true} >
                                        <Card tags={tags} />
                                    </div>
                                </Stack>
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={onClose}>Fechar</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>
            </div>
        </div >
    )
}
