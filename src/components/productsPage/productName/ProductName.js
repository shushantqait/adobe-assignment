import React from 'react'
import {
    Text,
    Link,
    Tooltip,
    Content,
    ActionButton,
    TooltipTrigger
} from "@adobe/react-spectrum";

function ProductName({ productNames }) {
    if (productNames.length > 1) {
        return (
            <Content UNSAFE_className="d-flex text-uppercase ProductCard__card-align-center ProductCard__custom-display-box ProductCard__display-title">
                <Text UNSAFE_className="d-flex text-uppercase ProductCard__card-align-center ProductCard__custom-display-box ProductCard__display-title">{productNames.slice(0, 1)}</Text>
                <TooltipTrigger>    
                    <ActionButton aria-label="Name" UNSAFE_className="border-0 bg-white ProductCard__custom-display-box">
                        <Link UNSAFE_className="pl-2 ProductCard__text-decoration-none ProductCard__display-title">
                            <a href="\#">
                                + {productNames.length - 1} MORE
                            </a>
                        </Link>
                    </ActionButton>
                    <Tooltip>{productNames.slice(1).join(", ")}</Tooltip>
                </TooltipTrigger>
            </Content>
        )
    } else if (productNames.length === 1) {
        return (
            <>
                <Text UNSAFE_className="d-flex text-uppercase ProductCard__card-align-center ProductCard__custom-display-box">{productNames.slice(0, 1)}</Text>
            </>
        )
    } else {
        return <></>;
    }
}

export default ProductName
