import React from 'react';
import CardBox from '../../cardBox';
import ProductName from '../productName';
import {
    Grid,
    Text,
    View,
    Flex,
    Image,
    Button,
    Heading,
    Divider
} from "@adobe/react-spectrum";
import ProductCardImage from "../../../assets/card-logo1.png";

function ProductCard(props) {
    const { title, publisherName, productNames, description, status } = props;

    const customSetting = {
        gap: "size-100",
        rows: ['100%'],
        height: "auto",
        justifyContent: "left",
        columns: status && status === "1" ? ['20%', '50%', '30%'] : ['20%', '80%']
    };

    return (
        <View borderWidth="thin" borderColor="dark" UNSAFE_className="ProductCard__card-box">
            <CardBox customSetting={customSetting} classNames="ProductCard__box">
                <View>
                    <Image width="size-700" src={ProductCardImage} alt="Card Logo" />
                </View>
                <View width="100%">
                    <Heading level={6} UNSAFE_className="pt-2 font-weight-bold text-black ProductCard__card-heading">
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
            </CardBox>
            <Grid
                columns={['auto']}
                rows={['100%']}
                justifyContent="left"
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
                    <ProductName productNames={productNames}></ProductName>
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

export default ProductCard;