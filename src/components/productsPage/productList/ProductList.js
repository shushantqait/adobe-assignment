import Loader from '../../loader';
import { without, uniq } from 'ramda';
import ProductCard from '../productCard';
import { useEffect, useState } from 'react';
import ProductCardCarousel from '../productCardCarousel';
import {
    Flex,
    Text,
    Link,
    Content
} from "@adobe/react-spectrum";

function ProductList({ getCardDetails }) {
    const [filterData, setFilterData] = useState([]);
    const { cardDetails, labelsForInitialRender, filterKey } = getCardDetails;
    const filteredKeyWithoutAllElement = filterKey && without('All', filterKey);

    useEffect(() => {
        if (filterKey && filterKey.length > 0) {

            let arr = [];
            cardDetails && cardDetails.map(productDetails => {
                return filterKey.map(item => {
                    if (productDetails.productTags.includes(item)) {
                        arr.push(productDetails);
                    }

                    return null;                    
                })
            });

            setFilterData(uniq(arr));
        }
    }, [filterKey, cardDetails])

    if (!labelsForInitialRender) {
        return <Loader />;
    }

    if (filteredKeyWithoutAllElement && filteredKeyWithoutAllElement.length > 0) {
        return (
            <div className="mb-3">
                <Flex direction="row" wrap justifyContent="space-between" width="100%" UNSAFE_className="ProductsPage__filter-card-box">
                    <Text UNSAFE_className="d-block text-black font-weight-bold font-18 mb-4">
                        {filteredKeyWithoutAllElement.join(", ")} Apps
                    </Text>
                </Flex>
                <Flex direction="row" wrap justifyContent="start" width="100%" gap="size-200" UNSAFE_className="ProductsPage__filter-card-box">
                    {
                        filterData ?
                            filterData.map((productDetails, index) => <Flex data-index={index} key={`ProductCard_${productDetails.id}`} ><ProductCard {...productDetails} /></Flex> )
                            : <Loader />
                    }
                    {
                        filterData && filterData.length === 0 && <Content UNSAFE_className="mt-3">No application found. Please select different product/tags from filter.</Content>
                    }
                </Flex>
            </div>
        )
    }

    return (
        labelsForInitialRender ?
            labelsForInitialRender.map(
                labelDetails => (
                    <div key={`LabelDetails_${labelDetails.id}`} className="mb-4">
                        <Flex direction="row" wrap justifyContent="space-between" width="100%">
                            <Text UNSAFE_className="d-block text-black font-weight-bold font-18 mb-4">
                                {labelDetails.name}
                            </Text>
                            <Link UNSAFE_className="py-2 pr-4 text-dark">
                                <a href="\#">
                                    View all
                                </a>
                            </Link>
                        </Flex>
                        <ProductCardCarousel category={labelDetails.category} {...getCardDetails} />
                    </div>
                )
            )
        : <Loader />
    )
}

export default ProductList