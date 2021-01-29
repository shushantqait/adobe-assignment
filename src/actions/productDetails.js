import Actions from "../constants/actions";
import ProductCardMock from '../mocks/productCardMock.json';

export const getDetails = () => {
    return {
        type: Actions.Card.GET,
        data: ProductCardMock
    }
}

export const getFilterProducts = (key) => {
    return {
        type: Actions.Card.GET,
        data: { ...ProductCardMock, 'filterKey': key }
    }
}