


import { legacy_createStore as createStore } from "redux";

import Logreducer from "./reducer/LoggedRed"

const store = createStore(Logreducer);

export default store;