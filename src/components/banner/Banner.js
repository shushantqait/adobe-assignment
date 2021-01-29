import React from 'react';
import {
    Flex,
    Image
} from "@adobe/react-spectrum";
import websiteLogo from '../../assets/banner.jpg';

function Banner() {
    return (
        <div className="Banner">
            <Flex direction="row" wrap alignItems="center" justifyContent="center" width="100%">
                <Image objectFit="cover" src={websiteLogo} alt="Adobe Banner" UNSAFE_className="Banner__image" width="100%" />
            </Flex>
        </div>
    );
}

export default Banner;