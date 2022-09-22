import {
    Button
} from '@chakra-ui/react';

import React from 'react';
import { FcApprove } from "react-icons/fc";

export default function butao() {

    return (
        <><Button
            leftIcon={<FcApprove />}
            colorScheme='teal'
            variant='solid'>Save
        </Button>
        </>
    )
}