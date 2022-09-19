import {
    Box,
    Image,
    Badge,
    StarIcon,
    Flex,
    Heading,
    Spacer,
    ButtonGroup,
    Button,
    AvatarGroup,
    Avatar,
    Collapse,
    Center,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
    PopoverFooter
} from '@chakra-ui/react'

import { FcLike, FcCurrencyExchange , FcInfo} from "react-icons/fc";
import { useToast } from '@chakra-ui/react'
import React from 'react';


export default function cardProduto() {

    const [show, setShow] = React.useState(false)

    const handleToggle = () => setShow(!show)

    const toast = useToast()

    const property = {
        nome: "Saca de grãos de milho",
        descricaoLonga: "Saca de 20k de grão de milho americanos",
        descricaoCurta: "Saca de 20k de milho",
        linkImg: "https://agristore.com/image/cache/catalog/Di%20Solo/milho-ipanema-20kg-1200x1200.png",
        marca: "Milho Ipanema",
        preco: "R$99,99"

    }

    function salvarNosFavoritos() {
        toast({
            title: 'Salvo nos Favoritos',
            description: "Este produto esta disponivel em sua tela de favoritos",
            status: 'success',
            duration: 4000,
            isClosable: true,
        })
    }

    return (
        <Box w='200px' borderWidth='1px' borderRadius='lg' overflow='hidden' margin='10px' padding='10px'>
            <Center>
                <Image
                    margin='10px'
                    boxSize='90%'
                    objectFit='cover'
                    src={property.linkImg}
                />
            </Center>
            <Flex>
                <Badge borderRadius='full' colorScheme='teal'  fontSize='10px'>
                    Agricola
                </Badge>
                <Badge borderRadius='full' colorScheme='teal' fontSize='10px'>
                    Milho
                </Badge>
                <Badge borderRadius='full' colorScheme='teal' fontSize='10px'>
                    Plantio
                </Badge>
            </Flex>
            <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
            >
                {property.nome}
            </Box>
            <Spacer></Spacer>
            <Box>
                {property.preco}
            </Box>
            <Flex marginTop='10px'>
                <Popover>
                    <PopoverTrigger>
                        <Button w='4rem' h='em' fontSize='18px' bg='teal.1000' leftIcon={<FcInfo fontSize='1.5rem' />} >Info</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>{property.descricaoCurta}</PopoverHeader>
                        <PopoverBody>{property.descricaoLonga}</PopoverBody>
                        <PopoverFooter>Marca: {property.marca}</PopoverFooter>
                    </PopoverContent>
                </Popover>
                <Spacer />
                <AvatarGroup spacing='.5rem'>
                    <Avatar bg='teal.1000' icon={<FcLike fontSize='1.5rem' />} onClick={() => { salvarNosFavoritos() }} />
                    <Avatar bg='teal.1000' icon={<FcCurrencyExchange fontSize='1.5rem' />} />
                </AvatarGroup>
            </Flex>
        </Box>
    )
}
/*


       <Collapse startingHeight={20} in={show} onClick={handleToggle}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum necessitatibus autem recusandae commodi nemo voluptas! Maiores eum nulla sequi reiciendis nostrum cum molestiae quam nam minus, blanditiis delectus sint tenetur.
                </Collapse>

*/