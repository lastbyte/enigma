import * as React from "react";
import {Fragment, useEffect} from "react";
//@ts-ignore
import * as Quote from 'inspirational-quotes'
import {Card, CardPreview, Field, makeStyles, SearchBox, Text, Theme, tokens,} from "@fluentui/react-components";
import {ArrowClockwise32Regular} from "@fluentui/react-icons";
import {useDispatch, useSelector} from "react-redux";
import {setBreadcrumbs} from "../redux/slices/AppUiSlice";
import {RootState} from "../redux/store";

const resolveAsset = (asset: string) => {
    const ASSET_URL =
        "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

    return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
    card: {
        margin: "auto",
        width: "720px",
        maxWidth: "100%",
        padding: "60px 30px",
        minHeight: "400px",
        minWidth: "600px",
        display: "flex",
    },
    fieldWrapper: {
        width : "600px",
        transform : "translateY(-100%)"
    },
    root : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        height : '100%',
        width : '100%'
    }

});

export default function Home() {
    const styles = useStyles();
    const dispatch = useDispatch();

    const {theme} = useSelector((state: RootState) => state.appUi);

    const [quote, setQuote] = React.useState<{ text: string, author: string }>({
        text: "",
        author: ""
    });

    useEffect(() => {
        getQuote();
        dispatch(setBreadcrumbs([{name: "Home", link: "/"}]))
    }, [])

    function getQuote() {
        const newQuote = Quote.getQuote();
        console.log(newQuote);
        setQuote(newQuote);
    }

    return (
        <div className={styles.root}>
            <Field className={styles.fieldWrapper} label="Search for the tool you need">
                <SearchBox size="large" style={{maxWidth : "unset"}}/>
            </Field>
        </div>
    );
};
