import {
    SimpleGrid,
    Box
    } from '@chakra-ui/react'
    
    import Item from './itemTagEdit'
    
    export default function card({ tags, produto }) {
        console.log(" - Secundario - ")
        console.log("-Tags-")
        console.log(tags)
        console.log("-Produto-")
        console.log(produto)

        return (
            <>
                <Box margin={'10px'}>
                    <SimpleGrid columns={2} spacing={10}>
                        {
                            tags.map((tag) => (
                                <Item key={tag.idCategoria} tag={tag} produto={produto}/>
                            ))
                        }
                    </SimpleGrid>
                </Box>
            </>
        )
    } 