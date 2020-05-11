import { createStore, combineReducers, applyMiddleware } from "redux";
import user from "../_reducers/user";
import article from "../_reducers/article";
import transaction from "../_reducers/transaction";
import beneficiary from "../_reducers/beneficiary";
import category from "../_reducers/category";
import { logger, promise } from "../middleware";

const middleware = [logger, promise];

const rootReducer = combineReducers({
    user,
    article,
    transaction,
    beneficiary,
    category,
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;