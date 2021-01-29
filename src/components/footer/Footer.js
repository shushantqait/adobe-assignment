import React from 'react';
import FooterMock from '../../mocks/footerMock.json';
import { Provider, Flex, View, Link, Heading, Grid } from '@adobe/react-spectrum';

function FooterLinks() {
    const { NavLinks } = FooterMock;

    return (
        NavLinks.map(footerDetails => {
            return (
                <View height="auto" marginTop="size-700" key={`footer_${footerDetails.id}`} UNSAFE_className="col-12 col-lg-12 col-md-12 col-sm-12">
                    <Flex direction="column" width="100%" gap="size-200">
                        <Heading level={6} UNSAFE_className="font-weight-bold text-white">{footerDetails.heading}</Heading>
                        {footerDetails.titles.map(footerLink => {
                            return (
                                <Link key={`link_${footerLink.id}`}>
                                    <a href={footerLink.url}>
                                        {footerLink.name}
                                    </a>
                                </Link>
                            );
                        })}
                    </Flex>
                </View>
            );
        })
    );
}

function SocialIcons() {
    const { socialLinks } = FooterMock;

    return (
        socialLinks.map(socialLink => {
            return (
                <Link key={`footer_${socialLink.id}`}>
                    <a href={socialLink.url}>
                        {socialLink.name}
                    </a>
                </Link>
            );
        })
    );
}

function Footer() {

    return (
        <Provider colorScheme="dark" UNSAFE_className="Footer">
            <Grid
                columns={['auto', 'auto', 'auto', 'auto', 'auto']}
                rows={['200px', 'auto']}
                justifyContent="space-around"
                height="auto"
                UNSAFE_className="grid-box mx-2 mb-5"
            >
                <FooterLinks />
            </Grid>
            <Grid
                columns={['35%', '40%', '20%']}
                rows={['auto']}
                height="auto"
                justifyContent="space-between"
                UNSAFE_className="ml-5 pb-5 Footer__social-grid"
                gap="size-200"
            >
                <Flex direction="row" gap="size-400" marginStart="2%" wrap>
                    <Heading level={6} UNSAFE_className="font-weight-bold text-white">Follow Us On</Heading>
                    <SocialIcons />
                </Flex>
                <View height="auto" marginTop="size-700" UNSAFE_className="">
                    Copyright <span>@</span> 2019 Adobe. All rights reserved.
                </View>
            </Grid>
        </Provider>
    );
}

export default Footer;