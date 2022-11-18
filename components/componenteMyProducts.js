import {
    Center,
    Heading,
    Text,
    SimpleGrid,
    Button,
    Box
} from '@chakra-ui/react';

import React from 'react';
import CardGrid from './cardMyProductsGrid'

export default function componenteMyProducts({ produtos }) {

    return (
        <>
            <div id='Grid' style={{ margin: '100px', paddingRight: '5px' }} >
                <SimpleGrid className='objetos' columns={5} spacing={2} mt={10} >
                    {
                        produtos.map((produto) => (
                            <CardGrid key={produto.idProdutoDoFornecedor} produtoDoFornecedor={produto}
                            />
                        ))
                    }
                </SimpleGrid>
            </div>
        </>
    )
}