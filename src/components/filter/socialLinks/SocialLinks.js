import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {
    Text,
    Flex
} from "@adobe/react-spectrum";

function SocialLinks() {
    return (
        <Flex direction="column" wrap justifyContent="space-between" width="100%">
            <Flex direction="row" wrap width="100%" UNSAFE_className="pl-2 pb-3 Filter__social-box">
                <FontAwesomeIcon icon={faTwitter} className="Filter__font-16" />
                <Text UNSAFE_className="Filter__label pl-3">
                    Follow us on Twitter
                </Text>
            </Flex>
            <Flex direction="row" wrap width="100%" UNSAFE_className="pl-2 pb-3 Filter__social-box">
                <FontAwesomeIcon icon={faFacebook} className="Filter__font-16" />
                <Text UNSAFE_className="Filter__label pl-3">
                    Follow us on Facebook
                </Text>
            </Flex>
        </Flex>
    )
}

export default SocialLinks
