import Actions from "../constants/actions";
import FilterMockData from '../mocks/filterMock.json';

const getFilterLinks = () => {
    return {
        type: Actions.Filter.GET,
        data: FilterMockData
    }
}

export default getFilterLinks;