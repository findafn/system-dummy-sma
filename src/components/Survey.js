import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Form, FormGroup, Label, FormText, Button } from 'reactstrap'

import InputSearch from '../commons/InputSearch';

class Survey extends React.PureComponent {
  render() {
    return (
      <div className="sma-box">
          <h3>Survey Tenaga Kerja Perusahaan</h3><br />
        <Container>
            <Row>
                <Col sm="6">
                <p>Cari Perusahaan</p>
                <InputSearch />
                </Col>
            </Row><br />
            <Row>
                <Col sm="6">
                <Form>
                <FormGroup row>
                <Label for="Nama-Perusahaan" sm={4}>Nama Perusahaan</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Perusahaan" value="Nama Perusahaan" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Nama-Komersial" sm={4}>Nama Komersial</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Komersial" value="Nama Komersial" />
                </Col>
                </FormGroup>
                <FormGroup tag="fieldset" row>
                  <legend className="col-form-legend col-sm-4">Unit Statistik</legend>
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
                
                <FormGroup row>
                <Label for="Nama Perusahaan" sm={4}>Kegiatan Utama</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Perusahaan" value="Kegiatan Utama" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Nama Perusahaan" sm={4}>Kategori KBLI</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Perusahaan" value="Kategori KBLI" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Nama Perusahaan" sm={4}>Produk Utama</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Perusahaan" value="Produk Utama" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Nama-Komersial" sm={4}>Kode KBLI</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Komersial" value="Nama Komersial" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Unit-Statistik" sm={4}>Alamat</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Unit-Statistik" value="Unit Statistik" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Nama Perusahaan" sm={4}>Kabupaten/Kota</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Perusahaan" value="Kegiatan Utama" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Nama Perusahaan" sm={4}>Provinsi</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Perusahaan" value="Kategori KBLI" />
                </Col>
                </FormGroup>
                
                <FormGroup tag="fieldset" row>
                  <legend className="col-form-legend col-sm-4">Status</legend>
                  <Col sm={10}>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio3" />{' '}
                        Aktif
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio3" />{' '}
                        Tutup Sementara
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio3" />{' '}
                        Alih Usaha
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio3" />{' '}
                        Tidak Ditemukan
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio3" />{' '}
                        Belum Berproduksi
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio3" />{' '}
                        Tutup
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>

            </Form>
                </Col>
                <Col sm="6">
                  <FormGroup row>
                  <Label for="Nama Perusahaan" sm={4}>Nilai Produksi</Label>
                  <Col sm={8}>
                      <Input type="text" name="text" id="Nama-Perusahaan" value="Kegiatan Utama" />
                  </Col>
                  </FormGroup>
                  <FormGroup row>
                  <Label for="Nama Perusahaan" sm={4}>Nilai Balas Jasa</Label>
                  <Col sm={8}>
                      <Input type="text" name="text" id="Nama-Perusahaan" value="Kategori KBLI" />
                  </Col>
                  </FormGroup>
                  <FormGroup row>
                  <Label for="Nama Perusahaan" sm={4}>Total Tenaga Kerja</Label>
                  <Col sm={8}>
                      <Input type="text" name="text" id="Nama-Perusahaan" value="Produk Utama" />
                  </Col>
                  </FormGroup>
                  <FormGroup row>
                  <Label for="Nama-Komersial" sm={4}>Nilai Pengeluaran</Label>
                  <Col sm={8}>
                      <Input type="text" name="text" id="Nama-Komersial" value="Nama Komersial" />
                  </Col>
                  </FormGroup>
                </Col>
            </Row>
            <Row>
              <Col className="loc-center">
                <Button className="btn-center" color="info">Simpan</Button>
                <Button className="btn-center" color="info">Batal</Button>
              </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

export default Survey;