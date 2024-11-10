import {Button, makeStyles, Text} from "@fluentui/react-components";
import {useState} from "react";
import {MdFiberNew} from "react-icons/md";

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
    },
    uuid: {
        fontSize : "2rem",
        fontWeight : 600,
        lineHeight : 2
    }
});
export default function UUID() {

    const styles = useStyles();
    const [uuid, setUuid] = useState<string>("78de77da-30cb-4af3-a402-44500cb901f7");

    function generateUUID() {
        try {
            setUuid(crypto.randomUUID());
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <div className={styles.root}>
            <div className={styles.generator}>
                <Text className={styles.uuid} font={"monospace"}>{uuid}</Text>
                <Button onClick={()=> generateUUID()} size={"large"} appearance={"primary"} icon={<MdFiberNew/>}>New</Button>
            </div>
        </div>
    );
}
