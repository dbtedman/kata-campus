import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { mySaga } from "../saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {},
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(mySaga);

export default store;
