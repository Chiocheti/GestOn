import {
    Tag 
} from '@chakra-ui/react';

export default function item({ tag }) {
    return (
        <>
            <Tag variant='solid' colorScheme='teal'>
                {tag.nome}
            </Tag>
        </>
    )
}