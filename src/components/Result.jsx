import { Button, CardBody, Card, CardFooter }  from "reactstrap";

const Result = ({data, setData}) => {
    return (
        <>
            <Card>
                <CardBody>
                    <pre>
                        <code>{JSON.stringify(data, 4, " ")}</code>
                    </pre>
                </CardBody>
                <CardFooter>
                    <Button onClick={e => {setData(null)}}>Reset</Button>
                </CardFooter>
            </Card>
        </>
    );
}

export default Result;