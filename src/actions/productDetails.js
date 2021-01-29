import Actions from "../constants/actions";
import ProductCardMock from '../mocks/productCardMock.json';

const details = {
    getDetails: () => {
        return {
            type: Actions.Card.GET,
            data: ProductCardMock
        }
    },

    getFilterProducts: (key) => {
        return {
            type: Actions.Card.GET,
            data: { ...ProductCardMock, 'filterKey': key }
        }
    }
}

export default details;