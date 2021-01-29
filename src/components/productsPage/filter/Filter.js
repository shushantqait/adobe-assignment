import {
    filter
} from 'ramda';
import {
    useState,
    useEffect
} from 'react';
import {
    connect,
    useDispatch
} from 'react-redux';
import {
    faTwitter,
    faFacebook
} from '@fortawesome/free-brands-svg-icons';
import {
    Text,
    Item,
    Link,
    Flex,
    Button,
    Divider,
    ListBox,
    Checkbox,
    CheckboxGroup,
    ProgressCircle
} from "@adobe/react-spectrum";
import getFilterLinks from '../../../actions/filterLinks';
import details from '../../../actions/productDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Filter({ filterLinks }) {
    const dispatch = useDispatch();
    const [selectedList, setSelectedList] = useState([]);
    const [selectedCheckbox, setSelectedCheckbox] = useState([]);
    const { view_by_product, popular_tags, resources } = filterLinks;

    const removeParticularFilter = (filterName) => {
        let filteredData = [...selectedCheckbox];
        filteredData = filter((item) => item !== filterName, filteredData);
        setSelectedCheckbox(filteredData);
    }

    useEffect(()=>{
        dispatch(getFilterLinks())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(()=>{
        dispatch(details.getFilterProducts([...selectedList, ...selectedCheckbox]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCheckbox, selectedList])

    if (!filterLinks || !view_by_product || !popular_tags || !resources) {
        return <Flex justifyContent="center" UNSAFE_className="my-5"><ProgressCircle aria-label="Loading…" size="L" value={60} isIndeterminate /></Flex>;
    }

    return (
        <div className="Filter">
            <Text UNSAFE_className="Filter__label">{view_by_product && view_by_product.title}</Text>
            <ListBox
                width="auto"
                items={view_by_product ? view_by_product.tags : {}}
                aria-label={view_by_product ? view_by_product.tags : {}}
                selectionMode="single"
                selectedKeys={selectedList}
                defaultSelectedKeys="All"
                onSelectionChange={(selected) => setSelectedList(Array.from(selected))}
            >
                {(item) => <Item key={item.name}>{item.name}</Item>}
            </ListBox>
            <Divider size="M" marginTop="10px" marginBottom="15px" />
            {selectedCheckbox && selectedCheckbox.length > 0 ? (
                <Flex direction="column" justifyContent="start" marginBottom="10px">
                    <Flex direction="row" wrap justifyContent="start" gap="size-100" marginBottom="10px" width="100%">
                        {selectedCheckbox.map(item => 
                            <div key={`Filter__with-cross-${item}`} className="Filter__with-cross" onClick={() => removeParticularFilter(item)}>
                                <Text>
                                    {item}
                                </Text>
                            </div>
                        )}
                    </Flex>
                    <Button variant="primary" isQuiet onClick={() => setSelectedCheckbox([])}>
                        Clear Filter
                    </Button>
                </Flex>
            ): null}
            <CheckboxGroup label={popular_tags.title} value={selectedCheckbox} onChange={setSelectedCheckbox}>
                {popular_tags.tags.map(tag => <Checkbox key={`popular_tag_${tag.id}`} value={tag.name}>{tag.name}</Checkbox>)}
            </CheckboxGroup>
            <Divider size="M" marginTop="10px" marginBottom="15px" />
            <Flex direction="column" wrap justifyContent="space-between" width="100%">
                <Text UNSAFE_className="Filter__label pb-2">{resources.title}</Text>
                {resources.tags.map(tag => (
                    <Link key={`Filter_link_${tag.id}`} UNSAFE_className="py-2">
                        <a href={tag.url}>
                            {tag.name}
                        </a>
                    </Link>
                ))}
            </Flex>
            <Divider size="M" marginTop="10px" marginBottom="15px" />
            <Flex direction="column" wrap justifyContent="space-between" width="100%">
                <Flex direction="row" wrap width="100%" UNSAFE_className="pl-2 pb-3 Filter__social-box">
                    <FontAwesomeIcon icon={faTwitter} className="Filter__font-16" />
                    <Text UNSAFE_className="Filter__label">
                        Follow us on Twitter
                    </Text>
                </Flex>
                <Flex direction="row" wrap width="100%" UNSAFE_className="pl-2 pb-3 Filter__social-box">
                    <FontAwesomeIcon icon={faFacebook} className="Filter__font-16" />
                    <Text UNSAFE_className="Filter__label">
                        Follow us on Facebook
                    </Text>
                </Flex>
            </Flex>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
       filterLinks: state.filterDetailsReducer
    }
}

export default connect(mapStateToProps)(Filter);