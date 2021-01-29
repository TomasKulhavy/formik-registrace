import { Button, Form, FormGroup, Input, Label, FormFeedback, Card, CardHeader, CardBody, Row } from "reactstrap";
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.firstname)
        errors.firstname = "Jméno musí být vyplněno";
    if (!values.lastname)
        errors.lastname = "Příjmení musí být vyplněno";
    if (!values.email) {
        errors.email = "E-mail musí být vyplněn";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Neplatná e-mailová adresa!";
    }
    if (values.GDPR === false)
        errors.GDPR = "Potvrďte zpracování údajů";

    return errors;
}

const tagCollection = [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "Three" }
];

const schoolCollection = [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "Three" }
];

const Entry = ({data, setData}) => {
    const formik = useFormik({
        initialValues: {
          firstname: '',
          lastname: '',
          email: '',
          school: '',
          GDPR: false,
          exams: false,
          info: false,
          branch: []
        },
        validate: validate,
        onSubmit: values => {
          setData(values);
        },
    });

    console.log(formik);
    return (
        <>
            <Card className="m-2 text-center">
                <CardHeader className="text-light bg-dark"><h5>Soboty s technikou</h5></CardHeader>
                <CardBody className="text-center bg-dark text-light">
                    <Form onSubmit={formik.handleSubmit}>
                        <FormGroup className="m-2">
                            <Label for="firstname">Jméno</Label>
                            <Input 
                                name="firstname" 
                                id="firstname" 
                                placeholder="Jan" 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.firstname}
                                invalid={Boolean(formik.errors.firstname)} 
                                valid={formik.touched.firstname} 
                            />
                            {formik.errors.firstname ? <FormFeedback invalid>{formik.errors.firstname}</FormFeedback> : null}
                        </FormGroup>
                        <FormGroup className="m-2">
                            <Label for="lastname">Přijímení</Label>
                            <Input 
                                name="lastname" 
                                id="lastname" 
                                placeholder="Novák" 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.lastname}
                                invalid={Boolean(formik.errors.lastname)} 
                                valid={formik.touched.lastname} 
                            />
                            {formik.errors.lastname ? <FormFeedback invalid>{formik.errors.lastname}</FormFeedback> : null}
                        </FormGroup>
                        <FormGroup className="m-2">
                            <Label for="email">E-mail</Label>
                            <Input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="jan.novák@gmail.com" 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.email} 
                                invalid={Boolean(formik.errors.email)} 
                                valid={formik.touched.email}
                            />
                            {formik.errors.email ? <FormFeedback invalid>{formik.errors.email}</FormFeedback> : null}
                        </FormGroup>
                        <FormGroup>
                            <Label>Vyberte vaši školu (Nepovinné)</Label>
                            <Input
                                name="school"
                                type="select"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.school}
                            >
                                <option value="">Vyberte svou školu...</option>
                                <option value="Základní škola s rozšířenou výukou jazyků, Liberec, Husova 142/44, příspěvková organizace">Základní škola s rozšířenou výukou jazyků, Liberec, Husova 142/44, příspěvková organizace</option>
                                <option value="Základní škola, Liberec, Aloisina výšina 642, příspěvková organizace">Základní škola, Liberec, Aloisina výšina 642, příspěvková organizace</option>
                                <option value="Základní škola, Liberec, Dobiášova 851/5, příspěvková organizace">Základní škola, Liberec, Dobiášova 851/5, příspěvková organizace</option>
                                <option value="Základní škola, Liberec, Oblačná 101/15, příspěvková organizace">Základní škola, Liberec, Oblačná 101/15, příspěvková organizace</option>
                                <option value="Základní škola, Liberec, Kaplického 384, příspěvková organizace">Základní škola, Liberec, Kaplického 384, příspěvková organizace</option>
                            </Input>
                            {formik.errors.school ? <FormFeedback invalid>{formik.errors.school}</FormFeedback> : null}
                        </FormGroup>
                        <FormGroup className="m-2" check>
                            <Label check>
                                <Input 
                                    id="GDPR"
                                    name="GDPR"
                                    type="checkbox" 
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.GDPR} 
                                    invalid={Boolean(formik.errors.GDPR)} 
                                    valid={formik.touched.GDPR}
                                />{' '}
                                GDPR
                                {formik.errors.GDPR ? <FormFeedback invalid>{formik.errors.GDPR}</FormFeedback> : null}
                            </Label>
                        </FormGroup>
                        <FormGroup className="m-2" check>
                            <Label check>
                                <Input 
                                    id="exam"
                                    name="exam"
                                    type="checkbox" 
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.exam} 
                                    invalid={Boolean(formik.errors.exam)} 
                                    valid={formik.touched.exam}
                                />{' '}
                                Chci být přidán do seznamu pro informování o přijímacím řízení (Nepovinné)
                            </Label>
                        </FormGroup>
                        <FormGroup className="m-2" check>
                            <Label check>
                                <Input 
                                    id="info"
                                    name="info"
                                    type="checkbox" 
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.info} 
                                    invalid={Boolean(formik.errors.info)} 
                                    valid={formik.touched.info}
                                />{' '}
                                Chci být informován o Sobotách s technikou (Nepovinné)
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label>Vyberte si obor/obory, o které máte zájem</Label>
                            </Row>
                            <Row>
                                <Label check>
                                    <Input 
                                        id="branch"
                                        name="branch"
                                        type="checkbox" 
                                        onChange={formik.handleChange} 
                                        onBlur={formik.handleBlur}
                                        checked={formik.values.branch} 
                                        invalid={Boolean(formik.errors.branch)} 
                                        valid={formik.touched.branch}
                                    />{' '}
                                    26 - 41 - M/01 Elektrotechnika
                                </Label>
                            </Row>
                            <Row>
                                <Label check>
                                    <Input 
                                        id="branch"
                                        name="branch"
                                        type="checkbox" 
                                        onChange={formik.handleChange} 
                                        onBlur={formik.handleBlur}
                                        checked={formik.values.branch} 
                                        invalid={Boolean(formik.errors.branch)} 
                                        valid={formik.touched.branch}
                                    />{' '}
                                    23 - 41 - M/01 Strojírenství
                                </Label>
                            </Row>
                            <Row>
                                <Label check>
                                    <Input 
                                        id="branch"
                                        name="branch"
                                        type="checkbox" 
                                        onChange={formik.handleChange} 
                                        onBlur={formik.handleBlur}
                                        checked={formik.values.branch} 
                                        invalid={Boolean(formik.errors.branch)} 
                                        valid={formik.touched.branch}
                                    />{' '}
                                    18 - 20 - M/01 Informační technologie
                                </Label>
                            </Row>
                        </FormGroup>
                        <div>
                            <Button type="submit" className="m-2" color="success">Odeslat</Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </>
    )
}

export default Entry;