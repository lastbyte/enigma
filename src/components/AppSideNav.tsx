import {NavDrawer, NavDrawerBody, NavDrawerHeader, NavItem, NavSectionHeader} from "@fluentui/react-nav-preview";
import {
    ArrowSwap20Regular,
    BookNumber20Regular,
    Code24Regular,
    Color24Regular,
    Dismiss24Regular,
    DrawText24Regular,
    NumberCircle124Regular,
    NumberSymbol24Regular,
    Password24Regular,
    Settings20Regular,
    Timer24Regular
} from "@fluentui/react-icons";
import * as React from "react";
import {Button, DrawerHeaderTitle, makeStyles} from "@fluentui/react-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {setSelectedCategory, setSelectedNavValue, toggleDrawer} from "../redux/slices/AppUiSlice";
import {useNavigate} from "react-router-dom";


const useStyles = makeStyles({
    root: {
        overflow: "hidden",
        display: "flex",
        minWidth: "320px",
        padding: '16px 8px',
        scrollbarWidth: 'none'
    },
    divider: {
        height: "32px",
        maxHeight: "32px"
    },
    navBarBody: {
        scrollbarWidth: 'none'
    },
});

const navSections = {
    toolCategories: [
        {
            name: "Crypto",
            value: "crypto",
            tools: [
                {
                    name: "Hashers",
                    value: "hashing",
                    icon: BookNumber20Regular,
                },
                {
                    name: "HMAC",
                    value: "hmac",
                    icon: Settings20Regular,
                },
                {
                    name: "PBKDF2",
                    value: "pbkdf2",
                    icon: Settings20Regular,
                },
                {
                    name: 'Ciphers',
                    value: "ciphers",
                    icon: Settings20Regular,
                },
                {
                    name: "Encoders",
                    value: "encoding_decoding",
                    icon: ArrowSwap20Regular,
                    link: "/",
                }
            ],

        },
        {
            "name": "Live Preview",
            "value": "live_preview",
            "tools": [
                {
                    "name": "HTML Preview",
                    "value": "html_preview",
                    "icon": Settings20Regular,
                    "link": "/html-preview"
                },
                {
                    "name": "Readme Preview",
                    "value": "readme_preview",
                    "icon": Settings20Regular,
                    "link": "/readme-preview"
                }
            ]
        },
        {
            "name": "Web Tools",
            "value": "web_tools",
            "tools": [
                {
                    "name": "Colors",
                    "value": "colors",
                    "icon": Color24Regular,
                    "link": "/colors"
                },
                {
                    "name": "Url Encoder/Decoder",
                    "value": "url_encoder_decoder",
                    "icon": Settings20Regular,
                    "link": "/url-encoder-decoder"
                },
                {
                    "name": "URL Parser",
                    "value": "url_parser",
                    "icon": Settings20Regular,
                    "link": "/url-parser"
                },
                {
                    "name": "JSON explorer",
                    "value": "json_explorer",
                    "icon": Code24Regular,
                    "link": "/json-explorer"
                },
                {
                    "name": "Time Converter",
                    "value": "time_converter",
                    "icon": Timer24Regular,
                    "link": "/time-converter"
                }
            ]
        },
        {
            "name": "Generators",
            "value": "generators",
            "tools": [
                {
                    "name": "Password Generator",
                    "value": "password_generator",
                    "icon": Password24Regular,
                    "link": "/password-generator"
                },
                {
                    "name": "UUID Generator",
                    "value": "uuid_generator",
                    "icon": NumberCircle124Regular,
                    "link": "/uuid-generator"
                },
                {
                    "name": "Random Number Generator",
                    "value": "random_number_generator",
                    "icon": NumberSymbol24Regular,
                    "link": "/random-number-generator"
                },
                {
                    "name": "Lorem Ipsum Generator",
                    "value": "lorem_ipsum_generator",
                    "icon": DrawText24Regular,
                    "link": "/lorem-ipsum-generator"
                }
            ]
        },
        {
            "name": "Maths",
            "value": "maths",
            "tools": [
                {
                    "name": "Base Converter",
                    "value": "base_converter",
                    "icon": Settings20Regular,
                    "link": "/base-converter"
                },
                {
                    "name": "Prime Number Checker",
                    "value": "prime_number_checker",
                    "icon": Settings20Regular,
                    "link": "/prime-number-checker"
                },
                {
                    "name": "Unit Converter",
                    "value": "unit_converter",
                    "icon": Settings20Regular,
                    "link": "/unit-converter"
                },
                {
                    "name": "Expression evaluator",
                    "value": "expression_evaluator",
                    "icon": Settings20Regular,
                    "link": "/expression-evaluator"
                },
                {
                    "name": "Graph Plotter",
                    "value": "graph_plotter",
                    "icon": Settings20Regular,
                    "link": "/graph-plotter"
                }
            ]
        }
    ],
    bottomSection: []
};

export default function AppSideNav() {
    const {isDrawerOpen} = useSelector((state: RootState) => state.appUi);
    const linkDestination = "/";
    const styles = useStyles();
    const dispatch = useDispatch();
    const {selectedNavValue, selectedCategory} = useSelector((state: RootState) => state.appUi);
    const navigate = useNavigate()

    function handleItemClick(value: string, link: string) {
        dispatch(setSelectedNavValue(value));
        navigate(link);
    }

    function handleSubItemClick(category: string, navItemValue: string, link: string) {
        dispatch(setSelectedNavValue(navItemValue))
        dispatch(setSelectedCategory(category));
        navigate(link);
    }

    return (
        <>
            <NavDrawer
                selectedValue={selectedNavValue}
                selectedCategoryValue={selectedCategory}
                open={isDrawerOpen}
                type={"overlay"}
                className={styles.root}
                multiple={true}
            >
                <NavDrawerBody className={styles.navBarBody}>
                    <NavDrawerHeader content={"Enigma"}>
                        <DrawerHeaderTitle
                            action={
                                <Button
                                    appearance="subtle"
                                    aria-label="Close"
                                    icon={<Dismiss24Regular />}
                                    onClick={() => dispatch(toggleDrawer())}
                                />
                            }
                        >
                            ToolChain
                        </DrawerHeaderTitle>
                    </NavDrawerHeader>
                    {
                        navSections.toolCategories.map((category: any, index: number) => {
                            return (
                                <React.Fragment key={index}>
                                    <NavSectionHeader>{category.name}</NavSectionHeader>
                                    {
                                        category.tools.map((tool: any, index: number) => {
                                            return (
                                                <NavItem onClick={() => {
                                                    handleItemClick(tool.value, tool.link)
                                                }} key={index} value={tool.value}
                                                         icon={<tool.icon/>}>
                                                    {tool.name}
                                                </NavItem>
                                            )
                                        })
                                    }
                                </React.Fragment>
                            )
                        })
                    }
                </NavDrawerBody>
            </NavDrawer>
        </>
    );
}
