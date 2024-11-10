import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setBreadcrumbs} from "../redux/slices/AppUiSlice";

export default function Favourites() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setBreadcrumbs([{name : "Favourites", link : "/favourites"}]))
    }, []);
    return (
        <div>
            Favourites
        </div>
    )
}
