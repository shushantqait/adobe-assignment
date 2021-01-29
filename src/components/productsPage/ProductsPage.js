import Filter from './filter';
import ProductCard from './productCard';
import ProductCarousel from './productCarousel';
import {
    connect,
    useDispatch
} from 'react-redux';
import {
    useEffect,
    useState
} from 'react';
import details from '../../actions/productDetails';
import {
    without,
    uniq
} from 'ramda';
import {
    Grid,
    Flex,
    Text,
    Link,
    Button,
    Content,
    ProgressCircle
} from "@adobe/react-spectrum";

function ProductPage({ cardDetails }) {
    const dispatch = useDispatch();
    const getWindowSize = useWindowSize();
    const [buttonToggle, setButtonToggle] = useState(true);
    const handleChangeClick = () => {
        setButtonToggle(prevState => !prevState);
    }
    const windowSizeChecker = getWindowSize.width < 750;

    useEffect(() => {
        if (windowSizeChecker && buttonToggle) {
            setButtonToggle(false);
        } else {
            setButtonToggle(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowSizeChecker]);

    useEffect(()=>{
        dispatch(details.getDetails())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="ProductPage mx-4 my-5 px-3">
            <Grid
                columns={['15%', '83%']}
                rows={['100%']}
                gap="3%"
                justifyContent="left"
                UNSAFE_className="ProductPage__grid-box"
            >
                {buttonToggle ? <Filter /> : ""}

                <Button variant="cta" marginBottom="20px" onClick={() => handleChangeClick()} UNSAFE_className="ProductPage__toggle-button">
                    {!buttonToggle ? 'Filter' : 'Done'}
                </Button>

                <div className="d-block">
                    <ProductList getCardDetails={cardDetails} />
                </div>
            </Grid>
        </div>
    )
}

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

            setFilterData(uniq(arr)); // getting unique values using Ramda uniq function
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterKey])

    if (!labelsForInitialRender) {
        return <Flex justifyContent="center" UNSAFE_className="my-5"><ProgressCircle aria-label="Loading…" size="L" value={60} isIndeterminate /></Flex>;
    }

    if (filteredKeyWithoutAllElement && filteredKeyWithoutAllElement.length > 0) {
        return (
            <div className="mb-3">
                <Flex direction="row" wrap justifyContent="space-between" width="100%" UNSAFE_className="ProductsPage__filter-card-box">
                    <Text UNSAFE_className="d-block font-weight-bold ProductPage__card-font-20 mb-1">
                        {filteredKeyWithoutAllElement.join(", ")} Apps
                    </Text>
                </Flex>
                <Flex direction="row" wrap justifyContent="start" width="100%" gap="size-200" UNSAFE_className="ProductsPage__filter-card-box">
                    {
                        filterData ?
                            filterData.map((productDetails, index) => <Flex data-index={index} key={`ProductCard_${productDetails.id}`} ><ProductCard {...productDetails} /></Flex> )
                            : <Flex justifyContent="center" UNSAFE_className="my-5"><ProgressCircle aria-label="Loading…" size="L" value={60} isIndeterminate /></Flex>
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
                    <div key={`LabelDetails_${labelDetails.id}`} className="mb-3">
                        <Flex direction="row" wrap justifyContent="space-between" width="100%">
                            <Text UNSAFE_className="d-block font-weight-bold ProductPage__card-font-20 mb-1">
                                {labelDetails.name}
                            </Text>
                            <Link UNSAFE_className="py-2 pr-4 text-dark">
                                <a href="\#">
                                    View all
                                </a>
                            </Link>
                        </Flex>
                        <ProductCarousel category={labelDetails.category} {...getCardDetails} />
                    </div>
                )
            )
        : <Flex justifyContent="center" UNSAFE_className="my-5"><ProgressCircle aria-label="Loading…" size="L" value={60} isIndeterminate /></Flex>
    )
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

const mapStateToProps = (state) =>{
    return {
       cardDetails: state.cardDetailsReducer
    }
}

export default connect(mapStateToProps)(ProductPage);