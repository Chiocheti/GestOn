import {
    Button,
    Divider,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    useToast,
    Input,
    Stack,
} from '@chakra-ui/react';
import Axios from 'axios';


export default function SplitScreen() {
    const toast = useToast()

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

    function cadastraADM() {

        const nome = document.getElementById("nome").value;
        const idFuncionario = document.getElementById("idFuncionario").value;
        const telefone = document.getElementById("telefone").value;
        const telefoneFormatado = formatadorDeTelefone(telefone);
        const senha = document.getElementById("senha").value;
        const confirmeSenha = document.getElementById("confirmeSenha").value;

        console.log(telefoneFormatado);
        console.log(telefone);


        if (senha != confirmeSenha) {
            toast({
                title: 'Senha Incorreta',
                description: "Senhas não Conferem",
                status: 'warning',
                duration: 3000,
                isClosable: true,
            })
        } else {
            if (telefone.length != 11 || isNaN(telefone) || !testaTelefone(telefoneFormatado)) {

                toast({
                    title: 'Telefone invalido',
                    description: "Insira um numero de Telefone valido",
                    status: 'warning',
                    duration: 3000,
                    isClosable: true,
                })
            } else {
                if (nome.length < 1) {
                    toast({
                        title: 'Nome Invalido',
                        description: "O Campo não esta preenchido",
                        status: 'warning',
                        duration: 3000,
                        isClosable: true,
                    })
                } else {
                    if (idFuncionario.length < 1 || isNaN(idFuncionario)) {
                        toast({
                            title: 'ID Invalido',
                            description: "Digite um identificador valido",
                            status: 'warning',
                            duration: 3000,
                            isClosable: true,
                        })
                    } else {

                        const telefoneParaSalvar = formataPraSalvar(telefoneFormatado)

                        const options = {
                            method: 'POST',
                            url: "http://localhost:3000/api/adm",
                            headers: { 'Content-Type': 'application/json' },
                            data: { nome: nome, idFuncionario: idFuncionario, telefone: telefoneParaSalvar, senha: senha }
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
                            const nome = document.getElementById("nome").value="";
                            const idFuncionario = document.getElementById("idFuncionario").value="";
                            const telefone = document.getElementById("telefone").value="";
                            const senha = document.getElementById("senha").value="";
                            const confirmeSenha = document.getElementById("confirmeSenha").value="";
                        }).catch(function (error) {
                            console.log(error);
                        })
                    }
                }
            }
        }
    }
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Heading fontSize={'2xl'}>Logar como Administrador</Heading>
                    <FormControl >
                        <FormLabel>ID do Funcionario</FormLabel>
                        <Input />
                    </FormControl>
                    <FormControl >
                        <FormLabel>Senha</FormLabel>
                        <Input />
                    </FormControl>
                    <Stack spacing={6}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}>
                        </Stack>
                        <Button colorScheme={'blue'} variant={'solid'}>
                            Login
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Center>

                <Divider orientation='vertical' />

            </Center>
            <Flex flex={1}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={4} w={'full'} maxW={'md'}>
                        <Heading fontSize={'2xl'}>Cadastrar Administrador</Heading>
                        <Heading fontSize={'l'}>Prossiga Preenchendo os Dados</Heading>
                        <FormControl i>
                            <FormLabel>Nome</FormLabel>
                            <Input id='nome' />
                        </FormControl>
                        <FormControl >
                            <FormLabel>ID do Funcionario</FormLabel>
                            <Input id='idFuncionario' />
                        </FormControl>
                        <FormControl >
                            <FormLabel>Telefone</FormLabel>
                            <Input id='telefone' />
                        </FormControl>
                        <FormControl >
                            <FormLabel>Senha</FormLabel>
                            <Input id='senha' />
                        </FormControl>
                        <FormControl >
                            <FormLabel>Confirme sua Senha</FormLabel>
                            <Input id='confirmeSenha' />
                        </FormControl>
                        <Stack spacing={6}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                            </Stack>
                            <Button colorScheme={'blue'} variant={'solid'} onClick={() => { cadastraADM() }} >
                                Criar Conta
                            </Button>
                        </Stack>
                    </Stack>
                </Flex>
            </Flex>
        </Stack>
    );
}