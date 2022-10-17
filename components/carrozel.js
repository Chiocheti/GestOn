import { SimpleGrid } from "@chakra-ui/react";

import Item from './CardCadastrarProdutoFornecedor'

export default function Cazzorel({ produtos }) {
    return (
        <>
            <SimpleGrid columns={5} spacing={1}>
                {
                    produtos.map((produto) => (
                        <Item key={produto.id} produto={produto} />
                    ))
                }
            </SimpleGrid>
        </>
    )
}