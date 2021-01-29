import { Button}  from "reactstrap";

const Result = ({data, setData}) => {
    return (
        <>
            <Button onClick={e => {setData(null)}}>Reset</Button>
            <pre>
                <code>{JSON.stringify(data, 4, " ")}</code>
            </pre>
        </>
    );
}

export default Result;