import React from 'react';
import {
    Grid,
    Text,
    View,
    Link,
    Flex,
    Image,
    Button,
    Tooltip,
    Content,
    Heading,
    Divider,
    ActionButton,
    TooltipTrigger
} from "@adobe/react-spectrum";
import ProductCardImage from "../../../assets/card-logo1.png";

function ProductCard(props) {
    const { title, publisherName, productNames, description, status } = props;

    return (
        <View borderWidth="thin" borderColor="dark" UNSAFE_className="ProductCard__card-box">
            <Grid
                gap="size-100"
                rows={['100%']}
                justifyContent="left"
                columns={status && status === "1" ? ['20%', '50%', '30%'] : ['20%', '80%']}
            >
                <View>
                    <Image width="size-700" src={ProductCardImage} alt="Card Logo" />
                </View>
                <View width="100%">
                    <Heading level={6} UNSAFE_className="pt-2 font-weight-bold ProductCard__card-heading">
                        {
                            (status && status === "1" && title.length > 25) ?
                                title.substring(0, 25) + "..." :
                                title.length > 45 ?
                                    title.substring(0, 45) + "..." :
                                    title
                        }
                    </Heading>
                    <Text UNSAFE_className="d-block ProductCard__card-publisher-name">{publisherName}</Text>
                </View>
                {
                    status && status === "1" ?
                        <View>
                            <span className="badge badge-primary ProductCard__card-border-primary bg-white text-primary px-2 py-2 text-uppercase">verified</span>
                        </View>
                    : ""
                }
            </Grid>
            <Grid
                columns={['auto']}
                rows={['100%']}
                justifyContent="left"
                marginTop="10px"
            >
                <View width="100%" height="60px" UNSAFE_className="ProductCard__card-description">
                    <Text UNSAFE_className="d-block">{description.length > 115 ? description.substring(0, 115) + "..." : description}</Text>
                </View>
            </Grid>
            <Divider size="M" marginTop="15px" />
            <Grid
                columns={['auto', 'auto']}
                rows={['100%']}
                justifyContent="space-between"
                marginTop="10px"
                UNSAFE_className="ProductCard__card-align-center"
            >
                <Flex width="100%">
                    {renderProductNames(productNames)}
                </Flex>
                <View>
                    <Button variant="primary">
                        Get
                    </Button>
                </View>
            </Grid>
        </View>
    );
}

function renderProductNames(productNames) {
    if (productNames.length > 1) {
        return (
            <Content UNSAFE_className="d-flex text-uppercase ProductCard__card-align-center ProductCard__display-grid ProductCard__display-title">
                <Text UNSAFE_className="d-flex text-uppercase ProductCard__card-align-center ProductCard__display-grid ProductCard__display-title">{productNames.slice(0, 1)}</Text>
                <TooltipTrigger>    
                    <ActionButton aria-label="Name" UNSAFE_className="border-0 bg-white ProductCard__display-grid">
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
                <Text UNSAFE_className="d-flex text-uppercase ProductCard__card-align-center ProductCard__display-grid">{productNames.slice(0, 1)}</Text>
            </>
        )
    } else {
        return <></>;
    }
}

export default ProductCard;