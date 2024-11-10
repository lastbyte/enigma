import {createHashRouter} from "react-router-dom";
import {lazy} from "react";
import {PATH_NAMES} from "./common/pathUtils";
import EncodingDecoding from "./pages/EncodingDecoding";

const HomePage = lazy(() => import("./pages/home"));
const FavouritesPage = lazy(() => import("./pages/favourites"));
const HashingPage = lazy(() => import("./pages/hashing"));
const HistoryPage = lazy(() => import("./pages/history"));
const EncodingDecodingPage = lazy(() => import("./pages/EncodingDecoding"));

const router =  createHashRouter([
    {
        path: PATH_NAMES.HOME,
        element: <HomePage/>,
    },
    {
        path: PATH_NAMES.FAVOURITES,
        element: <FavouritesPage/>,
    },
    {
        path : PATH_NAMES.HISTORY,
        element: <HistoryPage/>
    },
    {
        path: PATH_NAMES.HASHING,
        element: <HashingPage/>,
    },
    {
        path : PATH_NAMES.ENCODING_DECODING,
        element : <EncodingDecodingPage/>
    }
]);

export default router;
