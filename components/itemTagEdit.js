import {
    Button,
    useToast
} from '@chakra-ui/react';
import Axios from 'axios';

export default function item({ tag, produto }) {
    const toast = useToast()

    async function cadastrar() {
        const getCategoria = {
            method: 'GET',
            url: `http://localhost:3000/api/categoriasDoProduto/categoria/${tag.idCategoria}`
        };
        var postCategoria = {
            method: 'POST',
            url: 'http://localhost:3000/api/categoriasDoProduto',
            data: { idProdutoDoFornecedor: produto.idProdutoDoFornecedor, idCategoria: tag.idCategoria }
        };
        var delCategoria = {
            method: 'DELETE',
            url: `http://localhost:3000/api/categoriasDoProduto/categoria/${tag.idCategoria}`,
          };

        await Axios.request(getCategoria).then(function (response) {
            console.log(response.data)
            if (response.data == "" || response.data == null) {
                Axios.request(postCategoria).then(function (response) {
                    console.log(response.data);
                    toast({
                        title: 'SUCESSO!',
                        description: "Voce adicionou está categoria do produto com sucesso!",
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                    })
                }).catch(function (error) {
                    console.error(error);
                });
            } else {
                Axios.request(delCategoria).then(function (response) {
                    console.log(response.data);
                    toast({
                        title: 'SUCESSO!',
                        description: "Voce apagou está categoria do produto sucesso!",
                        status: 'error',
                        duration: 3000,
                        isClosable: true,
                    })
                }).catch(function (error) {
                    console.error(error);
                });
            };
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <>
            <Button variant='solid' colorScheme='teal' onClick={cadastrar}>
                {tag.nome}
            </Button>
        </>
    )
}