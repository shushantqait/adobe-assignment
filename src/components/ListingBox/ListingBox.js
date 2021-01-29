import React from 'react'
import {
    Item,
    ListBox
} from "@adobe/react-spectrum";

function ListingBox({ handleSelectionChange, productDetails = {}, selectedList = [], selectionMode = "single" }) {

    return (
        <ListBox
            width="auto"
            items={productDetails}
            selectionMode={selectionMode}
            selectedKeys={selectedList}
            defaultSelectedKeys="All"
            UNSAFE_className="cursor-pointer"
            onSelectionChange={(selected) => handleSelectionChange(Array.from(selected))}
        >
            {(item) => <Item key={item.name}>{item.name}</Item>}
        </ListBox>
    )
}

export default ListingBox
