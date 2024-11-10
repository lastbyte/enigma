import {useEffect, useId, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setBreadcrumbs} from "../redux/slices/AppUiSlice";
import {
    Accordion, AccordionHeader, AccordionItem, AccordionPanel,
    AccordionToggleEventHandler,
    Breadcrumb, BreadcrumbDivider, BreadcrumbItem, Button, Divider, Field,
    makeStyles, Popover, PopoverSurface, PopoverTrigger,
    Select,
    Switch,
    Text, Textarea,
    Theme
} from "@fluentui/react-components";
import {Options20Regular, Copy20Regular, ClipboardPaste20Filled} from "@fluentui/react-icons";
import {useNavigate, useNavigation, useParams} from "react-router-dom";
import {PATH_NAMES} from "../common/pathUtils";
import {RootState} from "../redux/store";
import * as React from "react";

//@ts-ignore
const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        height: "100%",
        width: "100%",
        boxSizing: "border-box"
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: "16px",
        fontSize: "1.5rem"
    },
    controlsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "16px 0px",
        boxSizing: "border-box"
    },
    selectContainer: {
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        alignItems: "center",
        marginRight: "16px"
    },
    controlText: {
        fontSize: "1rem"
    },
    switchContainer: {
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        alignItems: "center",
        marginRight: "16px"
    },
    textBoxGrid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
        width: "100%",
        boxSizing: "border-box",
    },
    hashingForm: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        padding: "16px 0",
        gap: "16px"
    },
    hashingFormFooter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "16px",
        width: "100%",
        boxSizing: "border-box",
        padding: "16px"
    },
    monospaceTextarea: {
        fontFamily: "monospace",
        minHeight: "400px",
        margin: "16px 0 0 0"
    }
})

type HashingMode = "hash" | "verify";
type HashingProps = {
    mode: HashingMode
}

export default function Hashing() {
    const selectId = useId();
    const styles = useStyles();
    const dispatch = useDispatch();
    const {selectedNavValue, breadcrumbs} = useSelector((state: RootState) => state.appUi);
    const navigate = useNavigate();

    const [mode, setMode] = useState<HashingMode>("hash");
    const [checked, setChecked] = useState(false);
    const [openHashingControls, setOpenHashingControls] = useState(false);

    useEffect(() => {
        const hashingType = new URL(window.location.href).searchParams.get("tool") || "";
        dispatch(setBreadcrumbs([{
            name: "Hashing",
            link: PATH_NAMES.HASHING.concat(`?tool=${hashingType}`)
        }]))
    }, [selectedNavValue]);

    function onChange() {
        setChecked(checked => !checked);
        setMode(mode === "hash" ? "verify" : "hash");
    }

    function handleHashingControlClick() {
        setOpenHashingControls(true);
    }

    return (
        // @ts-ignore
        <div className={styles.root}>
            <div className={styles.controlsContainer}>
                <Text className={styles.controlText}>Hashing</Text>
                <Popover trapFocus closeOnScroll positioning={"before-top"}>
                    <PopoverTrigger disableButtonEnhancement>
                        <Options20Regular/>
                    </PopoverTrigger>
                    <PopoverSurface style={{height: "400px", width: "400px"}}>

                    </PopoverSurface>
                </Popover>
            </div>
            <Divider style={{maxHeight: "2rem"}}/>
            <div className={styles.hashingForm}>
                <div className={styles.textBoxGrid}>
                    <Field size="large" label="Orignal text" style={{position : "relative"}}>
                        <Textarea className={styles.monospaceTextarea}
                                  style={{minHeight: "400px", margin: "16px 0 0 0"}}/>
                        <div style={{
                            display : "flex",
                            gap : "8px",
                            position : "absolute",
                            bottom : "16px",
                            right : "16px",
                        }}>
                            <Button icon={<Copy20Regular/>} style={{borderRadius: "50%"}}></Button>
                            <Button icon={<ClipboardPaste20Filled/>} style={{borderRadius: "50%"}}></Button>
                        </div>
                    </Field>
                    <Field size="large" label="Generated Hash" style={{position : "relative"}}>
                        <Textarea className={styles.monospaceTextarea}
                                  style={{minHeight: "400px", margin: "16px 0 0 0"}}/>
                        <div style={{
                            display : "flex",
                            gap : "8px",
                            position : "absolute",
                            bottom : "16px",
                            right : "16px",
                        }}>
                            <Button icon={<Copy20Regular/>} style={{borderRadius: "50%"}}></Button>
                            <Button icon={<ClipboardPaste20Filled/>} style={{borderRadius: "50%"}}></Button>
                        </div>
                    </Field>
                </div>
                <div className={styles.hashingFormFooter}>
                    <Button>Generate Hash</Button>
                </div>
            </div>
        </div>
    )
}
