import {Button, Field, Input, makeStyles, Text} from "@fluentui/react-components";
import {useId, useState} from "react";
import {MdFiberNew} from "react-icons/md";

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100%",
        minWidth: "100%"
    },
    generator: {
        display: "flex",
        width: "60%",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
    },
    controls: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
    },
    minMaxInputLabel: {
        fontSize: "1.25rem",
        marginBottom: "16px",
        paddingLeft: "4px"
    },
    randomNumberContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    randomNumber: {
        fontSize: "5rem",
        lineHeight: 2,
        fontWeight: 600,
        fontFamily: "monospace"
    }
})
export default function Number() {

    const styles = useStyles();
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(100);
    const [randomNumber, setRandomNumber] = useState<number>(generateRandomNumber());
    const minId = useId();
    const maxId = useId();


    function generateRandomNumber() {
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        return random;
    }

    function updateMin(e : React.ChangeEvent<HTMLInputElement>) {
        try {
            const parsed = parseInt(e.target.value);
            setMin(parsed);
        } catch (e) {
            console.error(e);
        }
    }

    function updateMax(e : React.ChangeEvent<HTMLInputElement>) {
        try {
            const parsed = parseInt(e.target.value);
            setMax(parsed);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className={styles.root}>
            <div className={styles.generator}>
                <div className={styles.controls}>
                    <Field>
                        <label className={styles.minMaxInputLabel} htmlFor={minId}>Min</label>
                        <Input onChange={updateMin} min={0} type={"number"} value={min.toString()}
                               id={minId} input={{style: {fontFamily: "monospace"}}} size={"large"}
                               appearance={"filled-darker"}/>
                    </Field>
                    <Field>
                        <label className={styles.minMaxInputLabel} htmlFor={maxId}>Max</label>
                        <Input onChange={updateMax} min={0} type={"number"} value={max.toString()} id={maxId}
                               input={{style: {fontFamily: "monospace"}}} size={"large"} appearance={"filled-darker"}/>
                    </Field>
                </div>
                <div className={styles.randomNumberContainer}>
                    <Text className={styles.randomNumber}>
                        {randomNumber}
                    </Text>
                </div>
                <Button onClick={() => setRandomNumber(generateRandomNumber())} appearance={"primary"} size={"large"}
                        icon={<MdFiberNew/>}> New </Button>
            </div>
        </div>
    );
}
