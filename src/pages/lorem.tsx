import {Button, makeStyles, Text} from "@fluentui/react-components";
import {useState} from "react";
import {MdFiberNew} from "react-icons/md";
import {LoremIpsum} from "lorem-ipsum";

const useStyles = makeStyles({
    root : {
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        minHeight : "100%",
        minWidth : "100%"
    },
    generator : {
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        gap : "1rem"
    },
    uuid: {
        fontSize : "1rem",
        fontWeight : 600,
        lineHeight : 1.5,
        textAlign : "center",
        verticalAlign : "middle",
    },
    uuidContainer : {
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        width : "100%",
        maxWidth : "600px",
        overflow : "auto",
        height : "240px"
    },
    loremButtons : {
        display : "flex",
        flexDirection : "row",
        gap : "16px",
        marginBottom : "16px"
    }
});

const loremTypes = {
    words : "words",
    sentences : "sentences",
    paragraphs : "paragraphs"
}
export default function Lorem() {

    const loremGen = new LoremIpsum({
        sentencesPerParagraph: {
            max: 5,
            min: 2
        },
        wordsPerSentence: {
            max: 9,
            min: 4
        }
    })

    const styles = useStyles();
    const [lorem, setLorem] = useState<string>(loremGen.generateSentences(1));
    const [loremType, setLoremType] = useState<string>(loremTypes.sentences);

    function generateUUID() {

        switch (loremType) {
            case loremTypes.words:
                setLorem(loremGen.generateWords(1));
                break;
            case loremTypes.sentences:
                setLorem(loremGen.generateSentences(1));
                break;
            case loremTypes.paragraphs:
                setLorem(loremGen.generateParagraphs(1));
                break;
        }
    }
    return (
        <div className={styles.root}>
            <div className={styles.generator}>
                <div className={styles.loremButtons}>
                    <Button appearance={loremType===loremTypes.words ? "primary": "outline"}  onClick={() =>setLoremType(loremTypes.words)}>Word</Button>
                    <Button appearance={loremType===loremTypes.sentences ? "primary": "outline"} onClick={() =>setLoremType(loremTypes.sentences)}>Sentence</Button>
                    <Button appearance={loremType===loremTypes.paragraphs ? "primary": "outline"} onClick={() =>setLoremType(loremTypes.paragraphs)}>Paragraph</Button>
                </div>
                <div className={styles.uuidContainer} >
                    <Text className={styles.uuid} font={"monospace"}>{lorem}</Text>
                </div>
                <Button onClick={()=> generateUUID()} size={"large"} appearance={"primary"} icon={<MdFiberNew/>}>New</Button>
            </div>
        </div>
    );
}
