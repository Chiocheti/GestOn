import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Button,
  useToast
} from '@chakra-ui/react';
import { useState } from 'react';

import { FcCurrencyExchange, FcInfo, FcLike } from "react-icons/fc";

import Axios from 'axios';

export default function itemProduto({ produto, consumidor }) {

  const toast = useToast();

  var [texto, setTexto] = useState(() => produto.descricaoCurta)
  var [titulo, setTitulo] = useState(() => "Descrição")
  var [carrinho, setCarrinho] = useState(() => "Carrinho Default")

  async function getCarrinho() {
    const options = {
      method: 'GET',
      url: `http://localhost:3000/api/carrinho/consumidor/${consumidor.idConsumidor}`
    };
    await Axios.request(options).then(function (response) {
      var resposta = response.data[0]
      setCarrinho(() => { resposta })
      console.log("Response.data ---------------------")
      console.log(response.data)
      console.log("Resposta ---------------------")
      console.log(resposta)
      console.log("Carrinho ---------------------")
      console.log(carrinho)

      cadastraProduto(resposta);

    }).catch(function (error) {
      console.log("Erro do sistema: " + error);
    });
  }

  function cadastraProduto(carrinho) {
    var options = {
      method: 'POST',
      url: 'http://localhost:3000/api/produtoNoCarrinho',
      headers: { 'Content-Type': 'application/json' },
      data: { idProduto: produto.idProduto, idCarrinho: carrinho.idCarrinho, qtt: "1" }
    };
    Axios.request(options).then(function (response) {
      console.log(response.data);
      toast({
        title: 'Produto encaminhado para lista de cotação',
        description: `Este produto pode ser visualizado em sua tabela de cotação`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }).catch(function (error) {
      toast({
        title: 'Erro ao salvar produto',
        description: `Houve algum erro interno`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      console.error(error);
    });
  }

  return (
    <div>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={produto.linkImg}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {produto.nome}
          </Heading>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {produto.marca}
          </Text>
        </Stack>
        <Popover>
          <PopoverTrigger>
            <Button
              padding={1}
              fontSize='23px'
              bg='teal.1000'
              leftIcon={<FcInfo fontSize='25px' />}>
              Info
            </Button>
          </PopoverTrigger>
          <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader pt={4} fontWeight='bold' border='0'>
              {titulo}
            </PopoverHeader>
            <PopoverBody border='0'
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              pb={4}>
              {texto}
            </PopoverBody>
            <PopoverFooter>
              <Center>
                <Button mr={2} onClick={() => {
                  setTexto(() => produto.descricaoCurta)
                  setTitulo(() => "Descrição")
                }}>
                  Descrição
                </Button>
                <Button mr={2} onClick={() => {
                  setTexto(() => produto.descricaoLonga)
                  setTitulo(() => "Detalhes")
                }}>
                  Detalhes
                </Button>
              </Center>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
        <Button
          onClick={() => getCarrinho()}
          padding={1}
          fontSize='23px'
          bg='teal.1000'
          leftIcon={<FcCurrencyExchange fontSize='25px' />}>
          Cotar
        </Button>
        <Button
          ml={10}
          padding={3}
          bg='teal.1000'
          leftIcon={<FcLike fontSize='25px' />}>
        </Button>
      </Box>
    </div>
  );
}