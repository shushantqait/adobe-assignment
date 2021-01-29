import Loader from '../loader';
import { filter } from 'ramda';
import ListingBox from '../ListingBox';
import SocialLinks from './socialLinks';
import ResourcesLink from './resourcesLink';
import { useState, useEffect } from 'react';
import ShowSelectedFilters from './showSelectedFilters';
import {
    Text,
    Divider,
    Checkbox,
    CheckboxGroup
} from "@adobe/react-spectrum";

function Filter(props) {
    const [selectedList, setSelectedList] = useState([]);
    const [selectedCheckbox, setSelectedCheckbox] = useState([]);
    const { view_by_product, popular_tags, resources } = props.filterLinks;

    const removeParticularFilter = (filterName) => {
        let filteredData = [...selectedCheckbox];
        filteredData = filter((item) => item !== filterName, filteredData);
        setSelectedCheckbox(filteredData);
    }

    const handleSelectionChange = (value) => {
        setSelectedList(value);
    }

    const handleClearFilter = () => {
        setSelectedCheckbox([]);   
    }

    useEffect(()=>{
        props.getFilterProducts([...selectedList, ...selectedCheckbox])
    }, [props, selectedCheckbox, selectedList])

    if (!view_by_product || !popular_tags || !resources) {
        return <Loader />;
    }

    return (
        <div className="Filter">
            <Text UNSAFE_className="Filter__label">{view_by_product && view_by_product.title}</Text>
            <ListingBox productDetails={view_by_product ? view_by_product.tags : {}} selectedList={selectedList} handleSelectionChange={handleSelectionChange} />
            <Divider size="M" marginTop="10px" marginBottom="15px" />
            {selectedCheckbox && selectedCheckbox.length > 0 ? (
                <ShowSelectedFilters removeParticularFilter={removeParticularFilter} handleClearFilter={handleClearFilter} selectedCheckbox={selectedCheckbox} />
            ): null}
            <CheckboxGroup label={popular_tags.title} value={selectedCheckbox} onChange={setSelectedCheckbox}>
                {popular_tags.tags.map(tag => <Checkbox key={`popular_tag_${tag.id}`} value={tag.name} UNSAFE_className="cursor-pointer">{tag.name}</Checkbox>)}
            </CheckboxGroup>
            <Divider size="M" marginTop="10px" marginBottom="15px" />
            <ResourcesLink resources={resources && resources.tags} title={resources && resources.title} />
            <Divider size="M" marginTop="10px" marginBottom="15px" />
            <SocialLinks />
        </div>
    );
}

export default Filter