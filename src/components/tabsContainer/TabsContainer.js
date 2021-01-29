import React from 'react'
import { Flex } from "@adobe/react-spectrum";
import { Tabs, Item } from '@react-spectrum/tabs';

function TabsContainer({ tabs = [] }) {
    return (
        <Flex direction="row" wrap justifyContent="space-between">
            <Tabs
                defaultSelectedKey={2}
                className="mr-auto"
                maxWidth="auto"
                position="relative"
                aria-label="Main Tabs"
                items={tabs}
                UNSAFE_className="TabsContainer__tabs-hover cursor-pointer"
                isQuiet
            >
                {(item) => (
                    <Item title={item.name}>
                    </Item>
                )}
            </Tabs>
        </Flex>
    )
}

export default TabsContainer
