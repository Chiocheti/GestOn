import {
SimpleGrid,
Box
} from '@chakra-ui/react'

import Item from './itemTags.js'


export default function card({ tags }) {
    return (
        <>
            <Box margin={'10px'}>
                <SimpleGrid columns={2} spacing={10}>
                    {
                        tags.map((tag) => (
                            <Item key={tag.idCategoria} tag={tag} />
                        ))
                    }
                </SimpleGrid>
            </Box>
        </>
    )
} 