import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setBreadcrumbs} from "../redux/slices/AppUiSlice";
import {PATH_NAMES} from "../common/pathUtils";

export default function Settings() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setBreadcrumbs([{name : "Settings", link : PATH_NAMES.SETTINGS}]))
    }, []);
    return (
        <div>
            Settings
        </div>
    )
}
