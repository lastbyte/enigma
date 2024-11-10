import {NavDrawer, NavDrawerBody, NavDrawerHeader, NavItem, NavSectionHeader} from "@fluentui/react-nav-preview";
import {
    ArrowCircleDownUpRegular,
    ArrowSwap20Regular,
    BookNumber20Regular,
    Code24Regular,
    Color24Regular,
    Dismiss24Regular,
    MathFormulaRegular,
    Password24Regular,
    Settings20Regular,
    Timer24Regular,
    Toolbox24Regular
} from "@fluentui/react-icons";
import * as React from "react";
import {Button, Divider, DrawerHeaderTitle, makeStyles} from "@fluentui/react-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {setSelectedCategory, setSelectedNavValue, toggleDrawer} from "../redux/slices/AppUiSlice";
import {useNavigate} from "react-router-dom";
import {PATH_NAMES} from "../common/pathUtils";
import {FaLink} from "react-icons/fa";
import {TbFileTextAi, TbLetterCaseToggle, TbNumber123, TbQuotes} from "react-icons/tb";
import {GoGraph} from "react-icons/go";
import {MdKey} from "react-icons/md";
import {VscRegex} from "react-icons/vsc";


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

export const toolSet = {
    toolCategories: [
        {
            name: "Crypto",
            value: "crypto",
            tools: [
                {
                    name: "Hashers",
                    value: "hashing",
                    icon: BookNumber20Regular,
                    link: PATH_NAMES.HASHERS
                },
                {
                    name: "HMAC",
                    value: "hmac",
                    icon: Settings20Regular,
                    link: PATH_NAMES.HMAC
                },
                {
                    name: "PBKDF2",
                    value: "pbkdf2",
                    icon: Settings20Regular,
                    link: PATH_NAMES.PBKDF2
                },
                {
                    name: 'Ciphers',
                    value: "ciphers",
                    icon: Settings20Regular,
                    link: PATH_NAMES.CIPHERS
                },
                {
                    name: "Encoders",
                    value: "encoding_decoding",
                    icon: ArrowSwap20Regular,
                    link: PATH_NAMES.ENCODERS,
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
                    "link": PATH_NAMES.HTML_PREVIEW
                },
                {
                    "name": "Readme Preview",
                    "value": "readme_preview",
                    "icon": Settings20Regular,
                    "link": PATH_NAMES.README_PREVIEW
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
                    "link": PATH_NAMES.COLORS
                },
                {
                    "name": "Url Encoder/Decoder",
                    "value": "url_encoder_decoder",
                    "icon": Settings20Regular,
                    "link": PATH_NAMES.URL_ENCODE_DECODE
                },
                {
                    "name": "URL Parser",
                    "value": "url_parser",
                    "icon": FaLink,
                    "link": PATH_NAMES.URL_PARSER
                },
                {
                    "name": "JSON explorer",
                    "value": "json_explorer",
                    "icon": Code24Regular,
                    "link": PATH_NAMES.JSON_EXPLORER
                },
                {
                    "name": "Time Converter",
                    "value": "time_converter",
                    "icon": Timer24Regular,
                    "link": PATH_NAMES.TIME_CONVERTER
                }
            ]
        },
        {
            "name": "Text",
            "value": "text",
            "tools": [
                {
                    "name": "Regex Tester",
                    "value": "regex_tester",
                    "icon": VscRegex,
                    "link": PATH_NAMES.LOREM
                },
                {
                    "name" : "Escape quotes",
                    "value" : "escape_quotes",
                    "icon" : TbQuotes,
                    "link" : PATH_NAMES.LOREM
                },
                {
                    "name" : "Text Case Converter",
                    "value" : "text_case_converter",
                    "icon" : TbLetterCaseToggle,
                    "link" : PATH_NAMES.LOREM
                }
            ]
        },
        {
            "name": "Generators",
            "value": "generators",
            "tools": [
                {
                    "name": "Password",
                    "value": "password",
                    "icon": Password24Regular,
                    "link": PATH_NAMES.PASSWORD
                },
                {
                    "name": "UUID Generator",
                    "value": "uuid_generator",
                    "icon": MdKey,
                    "link": PATH_NAMES.UUID
                },
                {
                    "name": "Random Number",
                    "value": "random_number",
                    "icon": TbNumber123,
                    "link": PATH_NAMES.RANDOM_NUMBER
                },
                {
                    "name": "Lorem Ipsum",
                    "value": "lorem_ipsum",
                    "icon": TbFileTextAi,
                    "link": PATH_NAMES.LOREM
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
                    "link": PATH_NAMES.BASE_CONVERTER
                },
                {
                    "name": "Unit Converter",
                    "value": "unit_converter",
                    "icon": ArrowCircleDownUpRegular,
                    "link": PATH_NAMES.UNIT_CONVERTER
                },
                {
                    "name": "Expression evaluator",
                    "value": "expression_evaluator",
                    "icon": MathFormulaRegular,
                    "link": PATH_NAMES.EXPRESSION_EVALUATOR
                },
                {
                    "name": "Graph Plotter",
                    "value": "graph_plotter",
                    "icon": GoGraph,
                    "link": PATH_NAMES.GRAPH_PLOTTER
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
        dispatch(toggleDrawer())
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
                                    icon={<Dismiss24Regular/>}
                                    onClick={() => dispatch(toggleDrawer())}
                                />
                            }
                        >
                            <div style={{
                                display: "flex",
                                gap: "8px",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer"
                            }}
                                 onClick={() => {navigate(PATH_NAMES.HOME);dispatch(toggleDrawer()) }}>
                                <Toolbox24Regular/> <code>ToolChain</code>
                            </div>

                        </DrawerHeaderTitle>
                    </NavDrawerHeader>
                    <Divider/>
                    {
                        toolSet.toolCategories.map((category: any, index: number) => {
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
