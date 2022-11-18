import {
    SimpleGrid,
    Box,
    Badge
} from '@chakra-ui/react'

import Item from './itemMyTagEdit'

export default function card({ categorias }) {
    return (
        <>
            <Box margin={'1px'}>
                <SimpleGrid columns={2} spacing={1}>
                    {
                        categorias.map((categoria) => (
                            <Item key={categoria.idCategoriasDoProduto} tag={categoria.idCategoria} />
                        ))
                    }
                </SimpleGrid>
            </Box>
        </>
    )
} 