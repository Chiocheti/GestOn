import {
    Box,
    Center,
    Image,
    Button,
    Spacer,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    Avatar,
    AvatarGroup,
    Flex,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Checkbox,
    useToast
} from '@chakra-ui/react';

import { FcCurrencyExchange, FcInfo } from "react-icons/fc";
import { FcOrganization, FcApproval, FcCancel, FcCableRelease } from "react-icons/fc";

import React, { useState } from 'react';
import Tagss from './cardTagsEdit';
import Axios from 'axios';

export default function cardMyProductsGrid({ produtoDoFornecedor }) {
    var [tags, setTags] = useState([1, 2]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    function loadTags() {
        document.getElementById('tagss').hidden = false;

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
                    <DrawerHeader>Editando: {produtoDoFornecedor.nome}</DrawerHeader>
                    <Button leftIcon={<FcCableRelease />} variant='outline' mr={3} onClick={loadTags}>
                        Mostrar Tags
                    </Button>
                    <br/>
                    <Checkbox defaultChecked>Produto em Estoque?</Checkbox>
                    <DrawerBody>
                        <div id='tagss' hidden>
                        <Tagss tags={tags} produto={produtoDoFornecedor} />
                        </div>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button leftIcon={<FcCancel />} variant='outline' mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button leftIcon={<FcApproval />} colorScheme='green' onClick={onClose}>Salvar</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            <Box w='250px' borderWidth='1px' borderRadius='lg' overflow='hidden' margin='10px' padding='10px'>
                <Center>
                    <Image
                        margin='10px'
                        boxSize='90%'
                        objectFit='cover'
                        borderRadius={10}
                        src={produtoDoFornecedor.linkImg}
                    />
                </Center>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                    marginLeft={3}
                >
                    {produtoDoFornecedor.nome}
                </Box>
                <Box
                    marginLeft={3}>
                    R$ {produtoDoFornecedor.preco}
                </Box>

                <Flex marginTop='10px'>
                    <Popover>
                        <PopoverTrigger>
                            <Button w='6rem' h='em' fontSize='23px' bg='teal.1000' leftIcon={<FcInfo fontSize='2.5rem' />} >Info</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>{produtoDoFornecedor.descricaoCurta}</PopoverHeader>
                            <PopoverBody>{produtoDoFornecedor.descricaoLonga}</PopoverBody>
                            <PopoverFooter>Marca: {produtoDoFornecedor.marca}</PopoverFooter>
                        </PopoverContent>
                    </Popover>
                    <Spacer />
                    <AvatarGroup spacing='.5rem'>
                        <Avatar bg='teal.1000' icon={<FcOrganization fontSize='2.5rem' />} onClick={onOpen} />
                        <Avatar bg='teal.1000' icon={<FcCurrencyExchange fontSize='2.5rem' />} />
                    </AvatarGroup>
                </Flex>
            </Box>
        </>
    )
}