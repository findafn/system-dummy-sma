import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Form, FormGroup, Label, FormText, Button } from 'reactstrap';

import PendaftaranBawah from './PendaftaranBawah';

class Pendaftaran extends React.PureComponent {
  render() {
    return (
      <div className="sma-box">
        <div className="loc-center">
          <h3>Pendaftaran unit usaha baru ke sistem SBR</h3><br />
          <h4>Logo SBR</h4>
        </div>
        <div className="inner-box">
            <Container>
                <Row>
                    <Col sm="6">
                    <Form>
                        <FormGroup>
                        <Label for="exampleEmail">Nama Perusahaan*</Label>
                        <Input type="text" name="text" id="exampleEmail" />
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleEmail">Nama Komersial*</Label>
                        <Input type="text" name="text" id="exampleEmail" />
                        </FormGroup>

                        <FormGroup tag="fieldset" row>
                            <legend className="col-form-legend col-sm-4">Unit Statistik*</legend>
                            <Col sm={10}>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2" />{' '}
                                    Enterprise Group
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2" />{' '}
                                    Unit Pengunjung
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2" />{' '}
                                    Enterprise
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2" />{' '}
                                    Establishment
                                </Label>
                                </FormGroup>
                            </Col>
                    </FormGroup>
                    </Form>
                    </Col>
                    
                    <Col sm="6">
                      <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Kategori KBLI*</Label>
                            <Input type="text" name="text" id="exampleEmail" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Kegiatan Utama*</Label>
                            <Input type="text" name="text" id="exampleEmail" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Kode KBLI*</Label>
                            <Input type="text" name="text" id="exampleEmail" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Produk Utama*</Label>
                            <Input type="text" name="text" id="exampleEmail" />
                        </FormGroup>
                        <FormGroup tag="fieldset" row>
                            <legend className="col-form-legend col-sm-4">Status</legend>
                            <Col sm={10}>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2" />{' '}
                                    Aktif
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2" />{' '}
                                    Tutup Sementara
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2" />{' '}
                                    Alih Usaha
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2" />{' '}
                                    Tidak Ditemukan
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2" />{' '}
                                    Belum Berproduksi
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2" />{' '}
                                    Tutup
                                </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <hr/>
                <PendaftaranBawah />
                <Row>
                    <Col className="loc-center">
                        <Button className="btn-center" color="info">Simpan</Button>
                        <Button className="btn-center" color="info">Batal</Button>
                    </Col>
                    </Row>

            </Container>
        </div>
      </div>
    );
  }
}

export default Pendaftaran;