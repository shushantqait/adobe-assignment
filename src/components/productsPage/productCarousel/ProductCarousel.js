import {
    Text,
    View,
    Heading,
    Tooltip,
    ActionButton,
    TooltipTrigger
} from "@adobe/react-spectrum";

function ProductCarousel({ carouselLink }) {
    return (
        <View backgroundColor="gray-50" gridArea="footer" UNSAFE_className="card-footer px-3 pt-3">
            <TooltipTrigger>
                <ActionButton aria-label="Name" UNSAFE_className="border-0 bg-white display-grid">
                    <Heading level={6} UNSAFE_className="font-weight-bold text-black">{carouselLink.title}</Heading>
                </ActionButton>
                <Tooltip>{carouselLink.title}</Tooltip>
            </TooltipTrigger>
            <Text UNSAFE_className="d-block">{carouselLink.publisher}</Text>
        </View>
    )
}

export default ProductCarousel