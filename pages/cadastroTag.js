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

} from '@chakra-ui/react';

import React from 'react';
import { FcPhoneAndroid } from "react-icons/fc";

export default function autentificado(text) {


    return (
        <div>

            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex
                    p={8}
                    flex={1}
                    lign={'center'}
                    justify={'center'}
                >
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
                            placeholder='Ex: Biruleibe'
                        />
                        <Button
                            leftIcon={<FcPhoneAndroid />}
                            colorScheme='teal'
                            variant='solid'
                        >
                            Save
                        </Button>
                        <FormLabel> Telefone:
                        </FormLabel>
                        <Input
                            placeholder='Ex: 16578493521'
                        />
                        <Button
                            leftIcon={<FcPhoneAndroid />}
                            colorScheme='teal'
                            variant='solid'
                        >
                            Save
                        </Button>
                        <FormControl >
                            <Heading>Senha:</Heading>
                        </FormControl>
                        <FormLabel> nova Senha:
                        </FormLabel>
                        <Input
                            placeholder='********'
                        />
                        <FormLabel> Confirme a nova Senha:
                        </FormLabel>
                        <Input
                            placeholder='********'
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

                <Center>

                    <Divider orientation='vertical' />

                </Center>


                <Flex flex={1}>
                    <Stack >
                        <Flex >
                            <Stack >
                                <FormControl >
                                    <Heading>Cadastrar Categoria</Heading>
                                    <Input />
                                </FormControl>
                                <Stack spacing={6}>
                                    <Stack
                                        direction={{ base: 'column', sm: 'row' }}
                                        align={'start'}
                                        justify={'space-between'}>
                                    </Stack>
                                    <Button colorScheme={'teal'} variant={'solid'}>
                                        Cadastrar
                                    </Button>
                                    <Divider />
                                    <Stack>
                                        <Flex>
                                            <Stack>
                                                <Heading>Lista de Categoria</Heading>
                                            </Stack>
                                        </Flex>
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
    )
}