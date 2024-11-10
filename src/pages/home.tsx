import * as React from "react";
//@ts-ignore
import * as Quote from 'inspirational-quotes'
import {
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
    AccordionToggleEventHandler,
    Button,
    makeStyles,
} from "@fluentui/react-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {useNavigate} from "react-router-dom";
import {toolSet} from "../components/AppSideNav";
import {setSelectedNavValue} from "../redux/slices/AppUiSlice";

const resolveAsset = (asset: string) => {
    const ASSET_URL =
        "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

    return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({

    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    accordion: {
        minHeight: "80%",
        width: "80%"
    },
    appGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
        padding: '16px',
        width: '100%',
        boxSizing: 'border-box',
        overflow: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    appItem: {
        height: '60px',
        width: '200px',
    }

});

export default function Home() {
    const styles = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {theme} = useSelector((state: RootState) => state.appUi);

    const [openItems, setOpenItems] = React.useState(["crypto", "live_preview", "web_tools", "generators", "maths", "text"]);
    const handleToggle: AccordionToggleEventHandler<string> = (event, data) => {
        setOpenItems(data.openItems);
    };

    function handleItemClick(value: string, link: string) {
        dispatch(setSelectedNavValue(value));
        navigate(link);
    }


    return (
        <div className={styles.root}>
            <Accordion
                className={styles.accordion}
                defaultChecked
                openItems={openItems}
                onToggle={handleToggle}
                multiple
                collapsible
            >
                <h3>All Tools</h3>
                {
                    toolSet.toolCategories.map((category: any, index: number) => {
                        return (
                            <AccordionItem value={category.value}>
                                <AccordionHeader>{category.name}</AccordionHeader>
                                <AccordionPanel className={styles.appGrid}>
                                    {
                                        category.tools.map((tool: any, index: number) => {
                                            return (<Button onClick={() => handleItemClick(tool.value, tool.link)}
                                                            className={styles.appItem}
                                                            shape={"square"}
                                                            icon={<tool.icon/>}>{tool.name}</Button>);
                                        })
                                    }
                                </AccordionPanel>
                            </AccordionItem>
                        );
                    })
                }
            </Accordion>
        </div>
    );
};
