import React from 'react';
import {
    Navbar
} from 'react-bootstrap';
import {
    Tabs,
    Item
} from '@react-spectrum/tabs';
import {
    Text,
    Flex,
    Image,
    Button,
    Divider
} from "@adobe/react-spectrum";
import websiteLogo from '../../assets/logo.svg';
import Search from '@spectrum-icons/workflow/Search';

const tabs = [
    { id: 1, name: 'Creative Cloud' },
    { id: 2, name: 'Experience Cloud' },
    { id: 3, name: 'Document Cloud' }
];

function Header() {
    return (
        <div className="Header">
            <Navbar bg="white" expand="lg" className="pb-1 pt-0">
                <Navbar.Brand href="#" className="d-flex col-2 pr-0 m-0 ml-1">
                    <Image width="size-300" alignSelf="auto" marginEnd="size-75" bottom="size-10" position="relative" justifySelf="auto" src={websiteLogo} alt="Adobe Logo" UNSAFE_className="d-flex vertical-align-middle" />
                    <Text marginStart="size-100" UNSAFE_className="Header__icon-label d-flex vertical-align-middle font-weight-bold">Adobe Exchange</Text>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="col-lg-10 col-md-12 col-sm-12 pl-0 ml-0 pr-0 d-flex Header__navbar-flex-wrap">
                    <Flex direction="row" wrap justifyContent="space-between" width="100%">
                        <Tabs
                            defaultSelectedKey={2}
                            className="mr-auto"
                            maxWidth="auto"
                            position="relative"
                            aria-label="Main Tabs"
                            items={tabs}
                            UNSAFE_className="Header__tabs-hover Header__cursor-pointer"
                            isQuiet
                        >
                            {(item) => (
                                <Item title={item.name}>
                                </Item>
                            )}
                        </Tabs>
                    </Flex>
                    <Flex direction="row" wrap justifyContent="space-between" width="15%" UNSAFE_className="Header__responsive-box">
                        <Search aria-label="Search" className="Header__cursor-pointer" />
                        <Button marginStart="size-400" variant="cta">
                            Sign In
                        </Button>
                    </Flex>
                </Navbar.Collapse>
            </Navbar>
            <Divider size="M" />
        </div>
    );
}

export default Header;