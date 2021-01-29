import React from 'react'
import {
    Flex,
    ProgressCircle
} from "@adobe/react-spectrum";

function Loader() {
    return (
        <Flex justifyContent="center" UNSAFE_className="my-5">
            <ProgressCircle aria-label="Loading…" size="L" value={60} isIndeterminate />
        </Flex>
    )
}

export default Loader
