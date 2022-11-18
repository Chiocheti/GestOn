import {
    SimpleGrid
} from '@chakra-ui/react';

import Item from './itemProduto';

export default function gridProduto({produtos , consumidor}) {
    return (
        <>
            <SimpleGrid columns={5} spacing={10}>
                {
                    produtos.map((produto) => (
                        <Item key={produto.idProduto} produto={produto} consumidor={consumidor}/>
                    ))
                }
            </SimpleGrid>
        </>
    )
}