import {
    Text,
    Flex,
    Link
} from "@adobe/react-spectrum";

function ResourcesLink({ resources = [], title = "" }) {

    return (
        <Flex direction="column" wrap justifyContent="space-between" width="100%">
            <Text UNSAFE_className="Filter__label pl-0">{title}</Text>
            {resources.map(tag => (
                <Link key={`Filter_link_${tag.id}`} UNSAFE_className="py-2">
                    <a href={tag.url}>
                        {tag.name}
                    </a>
                </Link>
            ))}
        </Flex>
    );
}

export default ResourcesLink