import React from 'react';
import {
    Navbar
} from 'react-bootstrap';
import {
    Text,
    Flex,
    Image,
    Button,
    Divider,
    SearchField
} from "@adobe/react-spectrum";
import TabsContainer from '../tabsContainer';
import websiteLogo from '../../assets/logo.svg';

const tabs = [
    { id: 1, name: 'Creative Cloud' },
    { id: 2, name: 'Experience Cloud' },
    { id: 3, name: 'Document Cloud' }
];

function Header() {
    return (
        <div className="Header">
            <Navbar bg="white" expand="lg" className="pb-1 pt-0">
                <Navbar.Brand href="#" className="d-flex col-2 col-sm-10 col-md-4 col-lg-3 col-xl-2 pr-0 m-0 ml-1 justify-content-center">
                    <Image width="size-300" alignSelf="auto" marginEnd="size-75" bottom="size-10" position="relative" justifySelf="auto" src={websiteLogo} alt="Adobe Logo" UNSAFE_className="d-flex vertical-align-middle" />
                    <Text marginStart="size-100" UNSAFE_className="Header__icon-label d-flex vertical-align-middle font-weight-bold">Adobe Exchange</Text>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="col-lg-10 col-md-12 col-sm-12 pl-0 ml-0 pr-0 Header__navbar-flex-wrap justify-content-between">
                    <TabsContainer tabs={tabs} />
                    <Flex direction="row" wrap justifyContent="space-between" width="30%" UNSAFE_className="Header__responsive-box">
                        <SearchField
                            isQuiet
                            placeholder="Search App"
                            UNSAFE_className="search-border-none"
                        />
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