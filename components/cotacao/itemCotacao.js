import {
    Box,
    Flex,
    Image,
    Heading,
    Divider,
    IconButton,
    Input,
    useToast
} from '@chakra-ui/react'

import { FcCancel, FcUp, FcDown } from "react-icons/fc";
import Axios from 'axios';

export default function itemCotacao({ produto, carrinho, produtosNoCarrinho }) {

    const toast = useToast();

    console.log("Tela Item -----------------------------")
    console.log(produto)

    console.log("Carrinho -----------------------------")
    console.log(carrinho)

    function deleteProduto() {
        const options = {
            method: 'DELETE',
            url: `http://localhost:3000/api/produtoNoCarrinho/deletarThis/${produto.idProduto}/${carrinho.idCarrinho}`
        };
        Axios.request(options).then(function (response) {
            toast({
                title: 'Produto retirado da lista com sucesso',
                description: `Este produto não faz mais parte da sua cotação`,
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }).catch(function (error) {
            toast({
                title: 'Falha ao deletar produto',
                description: `Houve um problema ao deletar este produto!`,
                status: 'warning',
                duration: 3000,
                isClosable: true,
            })
            console.log("Erro do sistema: " + error);
        });
    }

    return (
        <>
            <Flex
                margin={5}
                borderWidth={2}
                borderRadius={10}
                width={600}
            >
                <Box
                    marginRight={5}
                >
                    <Image
                        src={produto.linkImg}
                        width="200px"
                        height="200px"
                        borderRadius={10}
                    />
                </Box>
                <Box>
                    <Heading>
                        {produto.nome}
                    </Heading>
                    <Divider marginY={3} />
                    <Heading size='md'>
                        {produto.descricaoCurta}
                    </Heading>
                    <IconButton
                        marginTop={5}
                        onClick={() => deleteProduto()}
                        width={300}
                        height={50}
                        fontSize='50px'
                        colorScheme='red'
                        aria-label='Call Segun'
                        size='lg'
                        icon={<FcCancel />}
                    />
                </Box>
            </Flex>
        </>
    )
}