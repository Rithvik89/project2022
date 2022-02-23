import { combineReducers } from "redux";

import LoaderReducer from "./reducers/Loader";
import searchBarReducer from "./reducers/SearchBar";
import newsArticlesReducer from "./reducers/news";
import AuthReducer from "./reducers/Auth"

const RootReducer=combineReducers({
    loaderReducer:LoaderReducer,
    searchBarReducer:searchBarReducer,
    newsArticlesReducer:newsArticlesReducer,
    authReducer:AuthReducer,
})

export default RootReducer