import {
    Button,
    Divider,
    Box,
    Text,
    Center,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
} from '@chakra-ui/react';

export default function SplitScreen() {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Heading fontSize={'2xl'}>Logar como ADM</Heading>
                    <FormControl id="email">
                        <FormLabel>ID</FormLabel>
                        <Input type="email" />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Senha</FormLabel>
                        <Input type="password" />
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
                        <Heading fontSize={'2xl'}>Criar ADM</Heading>
                        <Heading fontSize={'l'}>Prociga Preenchendo os Dados</Heading>
                        <FormControl id="email">
                            <FormLabel>Nome</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>ID</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Telefone</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Senha</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={6}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                            </Stack>
                            <Button colorScheme={'blue'} variant={'solid'}>
                                Criar Conta
                            </Button>
                        </Stack>
                    </Stack>
                </Flex>
            </Flex>
        </Stack>
    );
}