import {Button, Combobox, Input, makeStyles, Option, OptionOnSelectData} from "@fluentui/react-components";
import {MdFiberNew} from "react-icons/md";
import {CgArrowsExchangeV} from "react-icons/cg";
import {useState} from "react";

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100%",
        minWidth: "100%"
    },
    convertor: {
        width: "60%",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
        justifyContent: "center",
    },
    inputControlContainer: {
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
    }
})

const BASES: { [key in string]: number } = {
    BINARY: 2,
    TERNARY: 3,
    QUATERNARY: 4,
    QUINARY: 5,
    SENARY: 6,
    SEPTENARY: 7,
    OCTAL: 8,
    NONARY: 9,
    DECIMAL: 10,
    UNDECIMAL: 11,
    DUODECIMAL: 12,
    TRIDECIMAL: 13,
    TETRADECIMAL: 14,
    PENTADECIMAL: 15,
    HEXADECIMAL: 16
}
export default function Base() {
    const styles = useStyles();

    const [sourceBase, setSourceBase] = useState<string[]>(['DECIMAL']);
    const [sourceBaseValue, setSourceBaseValue] = useState<string>("DECIMAL");
    const [targetBase, setTargetBase] = useState<string[]>(['BINARY']);
    const [targetBaseValue, setTargetBaseValue] = useState<string>("BINARY");

    const [inputValue, setInputValue] = useState<string>("");
    const [outputValue, setOutputValue] = useState<string>("");

    function onSourceBaseSelected(e: any, d: OptionOnSelectData) {
        setSourceBase(d.selectedOptions);
        setSourceBaseValue(d.optionText ?? "");
    }

    function onTargetBaseSelected(e: any, d: OptionOnSelectData) {
        setTargetBase(d.selectedOptions);
        setTargetBaseValue(d.optionText ?? "");
    }

    function onSourceInput(ev: React.ChangeEvent<HTMLInputElement>) {
        setSourceBaseValue(ev.target.value);
    }

    function onTargetInput(ev: React.ChangeEvent<HTMLInputElement>) {
        setTargetBaseValue(ev.target.value);
    }

    function convert(val?: string) {
        const sourceBaseValue = BASES[sourceBase[0]];
        const targetBaseValue = BASES[targetBase[0]];

        try {
            if (val) {
                const input = parseInt(val, sourceBaseValue);
                const output = input.toString(targetBaseValue);
                return output;
            }

            const input = parseInt(inputValue, sourceBaseValue);
            const output = input.toString(targetBaseValue);
            return output;
        } catch (e) {
            console.error(e);
            return "Invalid Input";
        }
    }

    function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }

    function onConvertClick() {
        setOutputValue(convert());
    }

    function onInterchangeClick() {
        const temp = [...sourceBase];
        setSourceBase(targetBase);
        setTargetBase(temp);

        const tempVal = inputValue;
        setInputValue(outputValue);
        setOutputValue(tempVal);

    }


    return (
        <div className={styles.root}>
            <div className={styles.convertor}>
                <div className={styles.inputControlContainer}>
                    <Input appearance={"filled-darker"} style={{width: "160px"}} value={inputValue} size={"large"} onChange={onInputChange}/>
                    <Combobox placeholder={"Select Source Base"}
                              onOptionSelect={onSourceBaseSelected}
                              selectedOptions={sourceBase}
                              onInput={onSourceInput}
                              defaultValue={"DECIMAL"}
                              root={{
                                  style: {
                                      width: "180px",
                                      minWidth: "0"
                                  }
                              }}
                              input={{
                                  style: {
                                      minWidth: "0"
                                  }
                              }}
                              appearance={"filled-darker"}
                              size={"large"}>
                        {
                            Object.keys(BASES).map((base) => (
                                <Option key={base} text={base} value={base}>{base}</Option>
                            ))
                        }
                    </Combobox>
                </div>
                <div className={styles.inputControlContainer}>
                    <Button onClick={onConvertClick} icon={<MdFiberNew/>} appearance={"primary"}>convert</Button>
                    <Button onClick={onInterchangeClick} icon={<CgArrowsExchangeV/>}
                            appearance={"primary"}>reverse</Button>
                </div>
                <div className={styles.inputControlContainer}>
                    <Input appearance={"filled-darker"} style={{width: "160px"}} value={outputValue} size={"large"}/>
                    <Combobox placeholder={"Select Target Base"}
                              onOptionSelect={onTargetBaseSelected}
                              selectedOptions={targetBase}
                              onInput={onTargetInput}
                              defaultValue={"BINARY"}
                              root={{
                                  style: {
                                      width: "180px",
                                      minWidth: "0"
                                  }
                              }}
                              input={{
                                  style: {
                                      minWidth: "0"
                                  }
                              }}
                              appearance={"filled-darker"}
                              width={"50px"} size={"large"}>
                        {
                            Object.keys(BASES).map((base) => (
                                <Option key={base} text={base} value={base}>{base}</Option>
                            ))
                        }
                    </Combobox>
                </div>
            </div>
        </div>
    )
}
