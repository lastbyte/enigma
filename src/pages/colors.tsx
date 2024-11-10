import {useId, useState} from "react";
import {HexAlphaColorPicker} from "react-colorful";
import {
    Body1,
    Button,
    Card,
    CardHeader,
    CardPreview,
    ColorSwatch,
    Divider,
    Field,
    Input,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableCellLayout,
    TableRow,
    Text,
    Toast,
    Toaster,
    ToastTitle,
    Tooltip,
    useToastController
} from "@fluentui/react-components";
import {Copy20Regular} from "@fluentui/react-icons";
import Color from "colorjs.io";
import {
    generateShades,
    generateTints,
    generateTones,
    getAnalogousColors,
    getClashColors,
    getColorName,
    getComplementaryColor,
    getFiveToneAColors,
    getFiveToneBColors,
    getFiveToneCColors,
    getFiveToneDColors,
    getFiveToneEColors,
    getFiveToneFColors,
    getFourToneCCWColors,
    getFourToneCWColors,
    getMonochromaticColors,
    getNeutralColors,
    getSevenToneColors,
    getSixToneCCWColors,
    getSixToneCWColors,
    getSplitComplementaryCCWColors,
    getSplitComplementaryColors,
    getSplitComplementaryCWColors,
    getSquareColors,
    getTetradicColors,
    getTriadicColors,
    toHexString,
    toHSLString,
    toRGBString
} from "../utils/colorss";
import parse from "color-parse";


const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '16px',
        width: "100%",
        height: "100%",
        boxSizing: "border-box"
    },
    hexInput: {
        width: "100%",
        marginTop: "8px",
        boxSizing: "border-box"
    },
    colorInputSection: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "32px",
        alignItems: "center"
    },
    conversionTableContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "8px",
        alignItems: "center"
    },
    picker: {
        display: "flex",
        flexDirection: "column",
        gap :"32px",
        fontSize  :"2rem"
    },
    colorHarmoniesContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "8px",
        alignItems: "center",
        boxSizing: "border-box"
    },
    harmoniesGrid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "8px",
        width: "100%",
        boxSizing: "border-box"
    },
    colorHarmoniesHeader: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "8px",
        alignItems: "flex-start"
    },
    swatches: {
        display: "grid !important",
        gridTemplateColumns: "repeat(auto-fill, 48px)",
        gap: "8px",
        boxSizing: "border-box",
        alignItems: "center",
        padding: "16px"
    },
    colorSwatch: {
        width: "48px",
        height: "48px",
        borderRadius: "8px",
        boxSizing: "border-box",
        cursor: "pointer"
    }
})


const columns = [
    {columnKey: "color_format", label: "Color Format"},
    {columnKey: "value", label: "Value"},
];

export default function Colors() {
    const styles = useStyles();
    const [color, setColor] = useState(new Color("#10ff0c"));
    const [colorInput, setColorInput] = useState("#10ff0c");

    const toasterId = useId();
    const {dispatchToast} = useToastController(toasterId);
    const notify = (color: string) =>
        dispatchToast(
            <Toast>
                <ToastTitle>{color} copied to clipboard</ToastTitle>
            </Toast>,
            {intent: "info"}
        );
    const harmonies = (color: Color) => [
        {
            displayName: "Complementary",
            colors: getComplementaryColor(color)
        },
        {
            displayName: "Analogous",
            colors: getAnalogousColors(color)
        },
        {
            displayName: "Triadic",
            colors: getTriadicColors(color)
        },
        {
            displayName: "Split Complimentary",
            colors: getSplitComplementaryColors(color)
        },
        {
            displayName: "Split Complimentary CW",
            colors: getSplitComplementaryCWColors(color)
        },
        {
            displayName: "Split Complimentary CCW",
            colors: getSplitComplementaryCCWColors(color)
        },
        {
            displayName: "Tetradic",
            colors: getTetradicColors(color)
        },
        {
            displayName: "Square",
            colors: getSquareColors(color)
        },
        {
            displayName: "Monochromatic",
            colors: getMonochromaticColors(color)
        },
        {
            displayName: "Clash Colors",
            colors: getClashColors(color)
        },
        {
            displayName: "Four Tone CW",
            colors: getFourToneCWColors(color)
        },
        {
            displayName: "Four Tone CCW",
            colors: getFourToneCCWColors(color)
        },
        {
            displayName: "Five Tone A",
            colors: getFiveToneAColors(color)
        },
        {
            displayName: "Five Tone B",
            colors: getFiveToneBColors(color)
        },
        {
            displayName: "Five Tone C",
            colors: getFiveToneCColors(color)
        },
        {
            displayName: "Five Tone D",
            colors: getFiveToneDColors(color)
        },
        {
            displayName: "Five Tone E",
            colors: getFiveToneEColors(color)
        },
        {
            displayName: "Five Tone F",
            colors: getFiveToneFColors(color)
        },
        {
            displayName: "Six Tone CW",
            colors: getSixToneCWColors(color)
        },
        {
            displayName: "Six Tone CCW",
            colors: getSixToneCCWColors(color)
        },
        {
            displayName: "Seven Tone Colors",
            colors: getSevenToneColors(color)
        },
        {
            displayName: "Neutral Colors",
            colors: getNeutralColors(color)
        }
    ]

    const items1 = () => {
        return [
            {
                color_format: "Nearest Color Name",
                value: getColorName(toHexString(color)).name
            },
            {
                color_format: "Nearest Color code",
                value: getColorName(toHexString(color)).value,
            },
            {
                color_format: "HEX",
                value: toHexString(color)
            },
            {
                color_format: "RGB",
                value: toRGBString(new Color(color))
            },
            {
                color_format: "HSL",
                value: toHSLString(new Color(color))
            },
        ];
    }

    function onColorChanged(color: string) {
        setColor(new Color(color));
        setColorInput(toHexString(new Color(color)));
    }

    function handleColorInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        try {
            const colorParsed = parse(e.target.value);
            setColorInput(e.target.value);
            if (!colorParsed){
                return;
            } else if (colorParsed.space === "rgb") {
                // @ts-ignore
                setColor(new Color(e.target.value));
            } else if (colorParsed.space === "hsl") {
                // @ts-ignore
                setColor(new Color(e.target.value));
            }
        }catch (e) {
        }
    }

    return (
        <div className={styles.root}>
            <div style={{height: "40px"}}></div>
            <Card appearance={"subtle"} className={styles.colorInputSection}>
                <div className={styles.picker}>
                    <Field>
                        <Input value={colorInput} onChange={handleColorInputChange}  input={{style:{textAlign : "center", fontFamily :"monospace"}}} size={"large"} appearance={"filled-darker"}/>
                    </Field>
                    <HexAlphaColorPicker style={{
                        height: "300px",
                        width: "300px",
                    }} defaultValue={"#654321"} color={toHexString(color)} onChange={onColorChanged}/>
                </div>
                <div className={styles.conversionTableContainer}>
                    <div style={{width: "100%"}}>
                        <Text weight={"bold"}
                              style={{fontSize: "1.25rem", lineHeight: 2}}>Color Details</Text>
                        <Divider/>
                    </div>
                    <Table>
                        <TableBody>
                            {items1().map((item) => (
                                <TableRow key={item.color_format}>
                                    <TableCell>
                                        <TableCellLayout>
                                            {item.color_format}
                                        </TableCellLayout>
                                    </TableCell>
                                    <TableCell>
                                        <TableCellLayout
                                        >
                                            <code>{item.value}</code>
                                            <Button appearance={"transparent"} icon={<Copy20Regular onClick={() => {
                                                navigator.clipboard.writeText(item.value).then(() => {
                                                    notify(item.value);
                                                }).catch(console.log)
                                            }}/>}/>
                                        </TableCellLayout>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Card>

            <Card appearance={"subtle"} className={styles.colorHarmoniesContainer}>
                <Card
                    appearance={"outline"}
                    style={{
                        width: "100%",
                        boxSizing: "border-box"
                    }}
                >
                    <CardHeader
                        header={
                            <Body1>
                                <b>Tones of color</b>
                            </Body1>
                        }
                    />
                    <CardPreview>
                        <div className={styles.swatches}>
                            {generateTones(color, 10).map((col) => {
                                return <Tooltip content={toHexString(col)} relationship={"label"}>
                                    <ColorSwatch
                                        onDoubleClick={() => {
                                            setColor(col)
                                        }}
                                        onClick={() => {
                                            navigator.clipboard.writeText(toHexString(col)).then(() => {
                                                notify(toHexString(col));
                                            }).catch(console.log)
                                        }}
                                        className={styles.colorSwatch} color={toHexString(col)}
                                        value={toHexString(col)}/>
                                </Tooltip>
                            })}
                        </div>
                    </CardPreview>
                </Card>
            </Card>

            <Card appearance={"subtle"} className={styles.colorHarmoniesContainer}>
                <Card
                    appearance={"outline"}
                    style={{
                        width: "100%",
                        boxSizing: "border-box"
                    }}
                >
                    <CardHeader
                        header={
                            <Body1>
                                <b>Shades of color</b>
                            </Body1>
                        }
                    />
                    <CardPreview>
                        <div className={styles.swatches}>
                            {generateShades(new Color(color), 10).map((col) => {
                                return <Tooltip content={toHexString(col)} relationship={"label"}>
                                    <ColorSwatch
                                        onDoubleClick={() => {
                                            setColor(col)
                                        }}
                                        onClick={() => {
                                            navigator.clipboard.writeText(toHexString(col)).then(() => {
                                                notify(toHexString(col));
                                            }).catch(console.log)
                                        }}
                                        className={styles.colorSwatch} color={toHexString(col)}
                                        value={toHexString(col)}/>
                                </Tooltip>
                            })}
                        </div>
                    </CardPreview>
                </Card>
            </Card>

            <Card appearance={"subtle"} className={styles.colorHarmoniesContainer}>
                <Card
                    appearance={"outline"}
                    style={{
                        width: "100%",
                        boxSizing: "border-box"
                    }}
                >
                    <CardHeader
                        header={
                            <Body1>
                                <b>Tints of color</b>
                            </Body1>
                        }
                    />
                    <CardPreview>
                        <div className={styles.swatches}>
                            {generateTints(new Color(color), 10).map((col) => {
                                return <Tooltip content={toHexString(col)} relationship={"label"}>
                                    <ColorSwatch
                                        onDoubleClick={() => {
                                            setColor(col)
                                        }}
                                        onClick={() => {
                                            navigator.clipboard.writeText(toHexString(col)).then(() => {
                                                notify(toHexString(col));
                                            }).catch(console.log)
                                        }}
                                        className={styles.colorSwatch} color={toHexString(col)}
                                        value={toHexString(col)}/>
                                </Tooltip>
                            })}
                        </div>
                    </CardPreview>
                </Card>
                <Card appearance={"subtle"} className={styles.colorHarmoniesContainer}>
                    <div className={styles.colorHarmoniesHeader}>
                        <h2>Color Harmonies</h2>
                    </div>
                    <div className={styles.harmoniesGrid}>
                        {
                            harmonies(color).map((harmony) => {
                                return (
                                    <Card
                                        appearance={"outline"}
                                        style={{
                                            width: "100%",
                                            boxSizing: "border-box"
                                        }}
                                    >
                                        <CardHeader
                                            header={
                                                <Body1>
                                                    <b>{harmony.displayName}</b>
                                                </Body1>
                                            }
                                        />
                                        <CardPreview>
                                            <div className={styles.swatches}>
                                                {harmony.colors.map((col) => {
                                                    return <Tooltip content={toHexString(col)} relationship={"label"}>
                                                        <ColorSwatch
                                                            onDoubleClick={() => {
                                                                setColor(col)
                                                            }}
                                                            onClick={() => {
                                                                navigator.clipboard.writeText(toHexString(col)).then(() => {
                                                                    notify(toHexString(col));
                                                                }).catch(console.log)
                                                            }}
                                                            className={styles.colorSwatch} color={toHexString(col)}
                                                            value={toHexString(col)}/>
                                                    </Tooltip>
                                                })}
                                            </div>
                                        </CardPreview>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </Card>
            </Card>
            <Toaster
                toasterId={toasterId}
                position="top-end"
                pauseOnHover
                pauseOnWindowBlur
                timeout={1000}
            />
        </div>
    );
}
