import {
    Button,
    useToast
} from '@chakra-ui/react';
import Axios from 'axios';

export default function item({ tag, produto }) {
    const toast = useToast()

    console.log(" - Terciario - ")
    console.log("-produto-")
    console.log(produto)
    console.log("-tag-")
    console.log(tag)

    async function cadastrar() {
        var getCategoria = {
            method: 'GET',
            url: `http://localhost:3000/api/categoriasDoProduto/categoria/${tag.idCategoria}`
        };
        var getProduto = {
            method: 'GET',
            url: `http://localhost:3000/api/categoriasDoProduto/count/${produto.idProdutoDoFornecedor}`
        };
        var postCategoria = {
            method: 'POST',
            url: 'http://localhost:3000/api/categoriasDoProduto',
            data: { idProdutoDoFornecedor: produto.idProdutoDoFornecedor, idCategoria: tag.idCategoria }
        };
        await Axios.request(getProduto).then(function (response) {
            const cont = response.data[0].total;
            Axios.request(getCategoria).then(function (response) {
                if (response.data == "" || response.data == null) {
                    Axios.request(postCategoria).then(function (response) {
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
                    const resposta = response.data[0].idCategoriasDoProduto
                    console.log("00000000000000000000000000000000000000000000000000000000000000000000")
                    console.log(resposta)
                    var delCategoria = {
                        method: 'DELETE',
                        url: `http://localhost:3000/api/categoriasDoProduto/${resposta}`,
                    };
                    Axios.request(delCategoria).then(function (response) {
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
        }).catch(function (error) {
            console.error(error);
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