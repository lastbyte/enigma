import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setBreadcrumbs} from "../redux/slices/AppUiSlice";

export default function EncodingDecoding() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setBreadcrumbs([ {name : "Encoding/Decoding", link : "/encoding-decoding"}]))
    }, []);
    return (
        <div>
        </div>
    )
}
