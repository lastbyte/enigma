import {
    Button,
    Divider,
    FluentProvider,
    makeStyles,
    Popover,
    PopoverSurface,
    PopoverTrigger,
    Select,
    teamsDarkTheme,
    teamsLightTheme,
    tokens,
    Toolbar,
    Tooltip,
    webDarkTheme,
    webLightTheme
} from "@fluentui/react-components";
import * as React from "react";
import {useId} from "react";
import {AppItem, NavDrawerProps,} from "@fluentui/react-nav-preview";
import AppSideNav from "./components/AppSideNav";
import {useDispatch, useSelector} from "react-redux";
import {setTheme, toggleDrawer} from "./redux/slices/AppUiSlice";
import {RootState} from "./redux/store";
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/home";
import Favourites from "./pages/favourites";
import Hashing from "./pages/hashing";
import EncodingDecoding from "./pages/EncodingDecoding";
import {AppFolder20Regular, Settings20Regular} from "@fluentui/react-icons";
import {PATH_NAMES} from "./common/pathUtils";
import {BoxToolbox24Regular} from "@fluentui/react-icons/lib/fonts";
import Colors from "./pages/colors";


const useStyles = makeStyles({
    root: {
        "--baseFontFamily": "Poppins",
        overflow: "hidden",
        display: "flex",
        minHeight: "100vh",
        width: "100%",
    },
    main: {
        display: "flex",
        flexDirection: "column",
        flex: "1"
    },
    content: {
        flex: "1",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "100%",
        boxSizing: "border-box",
        alignItems: "flex-start",
    },
    brandName: {
        fontSize: "1.5rem",
        backgroundColor : "transparent",
        textTransform : "uppercase",
        "&:hover" : {
            backgroundColor : "transparent"
        }
    },
    toolbar: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        boxSizing: "border-box",
    },
    field: {
        display: "flex",
        marginTop: "4px",
        marginLeft: "8px",

        flexDirection: "column",
        gridRowGap: tokens.spacingVerticalS,
    },
});


const App = (props: Partial<NavDrawerProps>) => {

    const selectId = useId();
    const styles = useStyles();
    const dispatch = useDispatch();
    const {theme, selectedNavValue, breadcrumbs} = useSelector((state: RootState) => state.appUi);
    const navigate= useNavigate();


    const getTheme = (themeName : 'web_light' | 'web_dark' | 'teams_light' | 'teams_dark') => {
        switch(themeName) {
            case "teams_dark":
                return teamsDarkTheme;
            case "teams_light":
                return teamsLightTheme;
            case "web_dark":
                return webDarkTheme;
            case "web_light":
                return webLightTheme;
        }
    }


    return (
        <FluentProvider theme={getTheme(theme)}>
            <div className={styles.root}>
                <AppSideNav/>
                <div className={styles.main}>
                    <Toolbar size={"large"} className={styles.toolbar}>
                        <div style={{display: "flex", gap: "24px", alignItems: "center"}}>
                            <Tooltip content="Navigation" relationship="label">
                                <Button icon={<AppFolder20Regular/>} onClick={() => dispatch(toggleDrawer())}/>
                            </Tooltip>
                        </div>
                        <AppItem
                            icon={<BoxToolbox24Regular />}
                            as="a"
                            href={"/"}
                            className={styles.brandName}
                        >
                            Enigma
                        </AppItem>
                        <Popover trapFocus closeOnScroll positioning={"before-top"}>
                            <PopoverTrigger disableButtonEnhancement>
                                <Tooltip content="Settings" relationship="label">
                                    <Button icon={<Settings20Regular/>}/>
                                </Tooltip>
                            </PopoverTrigger>
                            <PopoverSurface style={{width: "300px"}}>
                                <div>
                                    <h3>Settings</h3>
                                    <Divider/>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "16px",
                                        paddingBlock : '16px',
                                        boxSizing: "border-box"
                                    }}>
                                        <div>
                                            <label  htmlFor={selectId}>Theme</label>
                                            <Select style={{marginTop : "8px"}} id={selectId} onChange={(e) => dispatch(setTheme(e.target.value))}>
                                                <option selected={theme==="web_light"} value={"web_light"}>Web Light</option>
                                                <option selected={theme === "web_dark"} value={"web_dark"}>Web Dark</option>
                                                <option selected={theme === "teams_light"} value={"teams_light"}>Teams Light</option>
                                                <option selected={theme === "teams_dark"} value={"teams_dark"}>Teams Dark</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </PopoverSurface>
                        </Popover>
                    </Toolbar>
                    <div className={styles.content}>
                        <Routes>
                            <Route path={PATH_NAMES.HOME} element={<Home/>}/>
                            <Route path={PATH_NAMES.FAVOURITES} element={<Favourites/>}/>
                            <Route path={PATH_NAMES.HISTORY} element={<Favourites/>}/>
                            <Route path={PATH_NAMES.SETTINGS} element={<Favourites/>}/>
                            <Route path={PATH_NAMES.HASHING} element={<Hashing/>}/>
                            <Route path={PATH_NAMES.ENCODING_DECODING} element={<EncodingDecoding/>}/>
                            <Route path={PATH_NAMES.COLORS} element={<Colors/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </FluentProvider>
    );
};

export default App;
