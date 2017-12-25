import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Form, FormGroup, Label, FormText, Button } from 'reactstrap';

class PendaftaranBawah extends React.PureComponent {
  render() {
    return (
        <Row>
                    <Col sm="6">
                    <Form>
                        <FormGroup>
                        <Label for="exampleEmail">Nomor Pokok Wajib Pajak</Label>
                        <Input type="text" name="text" id="exampleEmail" />
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleEmail">Alamat*</Label>
                        <Input type="text" name="text" id="exampleEmail" />
                        </FormGroup>
                        </Form>
                    </Col>
                    <Col sm="6">
                    <Form>
                        <FormGroup>
                        <Label for="exampleEmail">Kode Provinsi*</Label>
                        <Input type="text" name="text" id="exampleEmail" />
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleEmail">Kode Kabupaten*</Label>
                        <Input type="text" name="text" id="exampleEmail" />
                        </FormGroup>
                        </Form>
                    </Col>
                    </Row>
    );
  }
}

export default PendaftaranBawah;