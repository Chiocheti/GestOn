import {
    Tag,
} from '@chakra-ui/react';
import Axios from 'axios';
import { useState } from 'react';

export default function item({ tag }) {
    const [nomeDaCategoria, setNomeDaCategoria] = useState(() => null);

    async function loadTags() {
        const options = {
            method: 'GET',
            url: `http://localhost:3000/api/categoria/${tag}`
        };
        await Axios.request(options).then(function (response) {
            console.log(response.data);
            var categoria = response.data;
            loadNameTag(categoria)
        }).catch(function (error) {
            console.log("Erro do sistema: " + error);
        });
    }

    async function loadNameTag(categoria){
        setNomeDaCategoria(() => categoria.nome)
    }
    loadTags()
    return (
        <>
            <Tag ml='1' colorScheme='green'>
                {nomeDaCategoria}
            </Tag>
        </>
    )
}