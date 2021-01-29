import {
    Text,
    Flex,
    Button
} from "@adobe/react-spectrum";

function ShowSelectedFilters({ removeParticularFilter, handleClearFilter, selectedCheckbox = [] }) {

    return (
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
            <Button variant="primary" isQuiet onClick={() => handleClearFilter()}>
                Clear Filter
            </Button>
        </Flex>
    );
}

export default ShowSelectedFilters