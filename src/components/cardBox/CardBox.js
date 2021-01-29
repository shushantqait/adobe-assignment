import React from 'react'
import {
    Grid,
    View,
    Image
} from "@adobe/react-spectrum";

function CardBox({image, children, customSetting, classNames }) {
    const defaultSetting = {
        areas: ['header  header', 'footer  footer'],
        columns: ['1fr'],
        rows: ['170px', 'auto'],
        justifyContent: "center",
        height: "250px",
        gap: "size-0"
    };

    return (
        <Grid
            {...defaultSetting}
            {...customSetting}
            UNSAFE_className={classNames ? classNames : "border-grey mx-2"}
        >
            {image && (
                <View gridArea="header">
                    <Image objectFit="fill" height="170px" src={image} alt='Logo' />
                </View>
            )}
            {children}
        </Grid>
    )
}

export default CardBox
