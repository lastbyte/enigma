import {
    Button,
    Combobox,
    Label,
    makeStyles,
    Option,
    OptionOnSelectData,
    SelectionEvents,
    shorthands,
    Slider
} from "@fluentui/react-components";
import React, {useState} from "react";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        minHeight: "100%",
        minWidth: "100%"
    },
    generator: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
    },
    passwordGenerated: {
        fontSize: "2rem",
        fontWeight: 600,
        minWidth: "400px",
        width  :"fit-content",
        minHeight: "60px",
        lineHeight: 2,
        textAlign: "center",
        verticalAlign: "bottom",
        ...shorthands.borderBottom('2px', 'solid', 'var(--colorBrandForeground1)'),
        "@media (max-width: 768px)": {
            fontSize: "1rem",
            minHeight: "30px",
            minWidth: "200px",
        }
    },
    sliderContainer: {
        display: "flex",
        flexDirection: "row",
        gap: "0.25rem",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "200px",
    }
})

const LOWER = "abcdefghijklmnopqrstuvwxyz";
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+";


const passwordSpaceOptions = [
    {
        label: "Lowercase Letters",
        value: LOWER
    },
    {
        label: "Uppercase Letters",
        value: UPPER
    },
    {
        label: "Numbers",
        value: NUMBERS
    },
    {
        label: "Symbols",
        value: SYMBOLS
    }
]
export default function Password() {

    const styles = useStyles();

    const [passwordSpace, setPasswordSpace] = useState<any[]>(["Lowercase Letters", "Uppercase Letters", "Numbers", "Symbols"]);
    const [passwordSpaceValue, setPasswordSpaceValue] = useState<string>("");
    const [passwordLength, setPasswordLength] = useState<number>(16);
    const [password, setPassword] = useState<string>("");

    function onGenerateClicked() {

        const space = passwordSpaceOptions.filter(option => passwordSpace.includes(option.label)).map(option => option.value).join("");
        const generatedPassword = generatePassword(space, passwordLength);
        setPassword(generatedPassword);
    }

    function generatePassword(space: string, length: number) {
        let generatedPassword = "";
        const charset = space;
        for (let i = 0; i < length; i++) {
            const at = Math.floor(Math.random() * charset.length);
            generatedPassword += charset.charAt(at);
        }
        return generatedPassword;
    }

    function onPasswordSpaceSelected(e: SelectionEvents, d: OptionOnSelectData) {
        setPasswordSpace(d.selectedOptions);
        setPasswordSpaceValue(d.optionText ?? "");
    }

    function onPasswordLengthChange(e: React.ChangeEvent<HTMLInputElement>) {
        try {
            const parsed = parseInt(e.target.value);
            setPasswordLength(parsed);
        } catch (e) {
            console.error(e);
        }
    }

    function onPasswordInput(e: React.ChangeEvent<HTMLInputElement>) {
        setPasswordSpaceValue(e.target.value);
    }

    return (
        <div className={styles.root}>
            <div className={styles.generator}>
                <Combobox
                    selectedOptions={passwordSpace}
                    onOptionSelect={onPasswordSpaceSelected}
                    onInput={onPasswordInput}
                    value={passwordSpace.map((option) => option).join(", ")}
                    multiselect>
                    {
                        passwordSpaceOptions.map((option, index) => {
                            return <Option key={index} text={option.label} value={option.label}>{option.label}</Option>
                        })
                    }
                </Combobox>
                <div className={styles.sliderContainer}>
                    <Label>Length</Label>
                    <Slider min={5} max={30} value={passwordLength} step={1} onChange={onPasswordLengthChange}/>
                    <Label style={{minWidth : "1.5"}} aria-hidden>{passwordLength}</Label>
                </div>
                <Button onClick={onGenerateClicked}>Generate</Button>
            </div>
            <code className={styles.passwordGenerated}>{password}</code>
        </div>
    );
}
