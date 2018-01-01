import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { Input, Form, FormGroup, Label, Button, Nav, NavLink, NavItem } from 'reactstrap'
import { Link, NavLink as RRNavLink, withRouter } from 'react-router-dom';

import InputSearch from '../commons/InputSearch';
import ButtonSearch from '../commons/ButtonSearch';
import config from '../config';

class Survey extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      idSBR: '',
      namaPerusahaan: '',
      namaKomersial: '',
      kegiatanUtama: '',
      katKBLI: '',
      produkUtama: '',
      kodeKBLI: '',
      npwp: '',
      alamat: '',
      kodeKabKot: '',
      kodeProv: '',
      nilaiProduksi: '',
      nilaiUpah: '',
      totalNaker: '',
      nilaiPengeluaran: '',
      unitStatistik: '',
      status: '',
    };
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onChangePerusahaan = this.onChangePerusahaan.bind(this);
    this.onChangeKomersial = this.onChangeKomersial.bind(this);
    this.onChangeKegiatan = this.onChangeKegiatan.bind(this);
    this.onChangeKategori = this.onChangeKategori.bind(this);
    this.onChangeProduk = this.onChangeProduk.bind(this);
    this.onChangeKode = this.onChangeKode.bind(this);
    this.onChangeNPWP = this.onChangeNPWP.bind(this);
    this.onChangeAlamat = this.onChangeAlamat.bind(this);
    this.onChangeKota = this.onChangeKota.bind(this);
    this.onChangeProvinsi = this.onChangeProvinsi.bind(this);
    this.onChangeProduksi = this.onChangeProduksi.bind(this);
    this.onChangeBalasJasa = this.onChangeBalasJasa.bind(this);
    this.onChangeTenagaKerja = this.onChangeTenagaKerja.bind(this);
    this.onChangePengeluaran = this.onChangePengeluaran.bind(this);
    this.handleOptStatistik = this.handleOptStatistik.bind(this);
    this.handleOptStatus = this.handleOptStatus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.updateData = this.updateData.bind(this);
    this.backData = this.backData.bind(this); 
  }
  onChangeSearch(idSBR) {
    this.setState(p => ({
      ...p,
      idSBR,
    }));
  }
  handleClickSearch() {
    const urlEstablishment = config.liveSBRUrl + '/establishment/' + this.state.idSBR;
    axios.get(urlEstablishment)
      .then(({data}) => {
        if (data.success) {
          this.setState(p => ({
            ...p,
            namaPerusahaan: data.result.namaPerusahaan,
            namaKomersial: data.result.namaKomersial,
            kegiatanUtama: data.result.kegiatanUtama,
            katKBLI: data.result.katKBLI,
            produkUtama: data.result.produkUtama,
            kodeKBLI: data.result.kodeKBLI,
            npwp: data.result.npwp,
            alamat: data.result.alamat,
            kodeKabKot: data.result.kodeKabKot,
            kodeProv: data.result.kodeProv,
            unitStatistik: data.result.unitStatistik,
            status: data.result.status,
          }));
        } else {
          alert(data.message);
        }
      })
      .catch(err => {
        console.log("Tidak bisa mendapatkan data establishment");
      });
    const urlIndicator = config.liveSBRUrl + '/indicator/' + this.state.idSBR;
    axios.get(urlIndicator)
      .then(({data}) => {
        if (data.success) {
          this.setState(p => ({
            ...p,
            nilaiProduksi: data.result.nilaiProduksi,
            nilaiUpah: data.result.nilaiUpah,
            totalNaker: data.result.totalNaker,
            nilaiPengeluaran: data.result.nilaiPengeluaran,
          })); 
        }
      })
      .catch(err => {
        alert("Tidak bisa mendapatkan data indicator");
      });
  }
  onChangePerusahaan(e) {
    this.setState(p => ({
      ...p,
      namaPerusahaan: e.target.value,
    }));
    e.persist();
  }
  onChangeKomersial(e) {
    this.setState(p => ({
      ...p,
      namaKomersial: e.target.value,
    }));
    e.persist();
  }
  onChangeKegiatan(e) {
    this.setState(p => ({
      ...p,
      kegiatanUtama: e.target.value,
    }));
    e.persist();
  }
  onChangeKategori(e) {
    this.setState(p => ({
      ...p,
      katKBLI: e.target.value,
    }));
    e.persist();
  }
  onChangeProduk(e) {
    this.setState(p => ({
      ...p,
      produkUtama: e.target.value,
    }));
    e.persist();
  }
  onChangeKode(e) {
    this.setState(p => ({
      ...p,
      kodeKBLI: e.target.value,
    }));
    e.persist();
  }
  onChangeNPWP(e) {
    this.setState(p => ({
      ...p,
      npwp: e.target.value,
    }));
    e.persist();
  }
  onChangeAlamat(e) {
    this.setState(p => ({
      ...p,
      alamat: e.target.value,
    }));
    e.persist();
  }
  onChangeKota(e) {
    this.setState(p => ({
      ...p,
      kodeKabKot: e.target.value,
    }));
    e.persist();
  }
  onChangeProvinsi(e) {
    this.setState(p => ({
      ...p,
      kodeProv: e.target.value,
    }));
    e.persist();
  }
  onChangeProduksi(e) {
    this.setState(p => ({
      ...p,
      nilaiProduksi: e.target.value,
    }));
    e.persist();
  }
  onChangeBalasJasa(e) {
    this.setState(p => ({
      ...p,
      nilaiUpah: e.target.value,
    }));
    e.persist();
  }
  onChangeTenagaKerja(e) {
    this.setState(p => ({
      ...p,
      totalNaker: e.target.value,
    }));
    e.persist();
  }
  onChangePengeluaran(e) {
    this.setState(p => ({
      ...p,
      nilaiPengeluaran: e.target.value,
    }));
    e.persist();
  }
  handleOptStatistik(e) {
    this.setState(p => ({
      ...p,
      unitStatistik: e.target.value,
    }));
    console.log('You have selected:', this.state.unitStatistik);
    e.persist();
  }
  handleOptStatus(e) {
    this.setState(p => ({
      ...p,
      status: e.target.value,
    }));
    console.log('You have selected:', this.state.status);
    e.persist();
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('state: ', this.state);
  }
  updateData(e){
    e.preventDefault();
    const { idSBR } = this.state;
    const pembaruanTerakhir = Date.now();
    const updaterTerakhir = 'SMA';
    const { namaPerusahaan, namaKomersial, kegiatanUtama, katKBLI, produkUtama, kodeKBLI, 
    npwp, alamat, kodeKabKot, kodeProv, unitStatistik, status } = this.state;
    const dataEstablishment = { namaPerusahaan, namaKomersial, kegiatanUtama, katKBLI, produkUtama, kodeKBLI, 
    npwp, alamat, kodeKabKot, kodeProv, unitStatistik, status, pembaruanTerakhir, updaterTerakhir };
    const { nilaiProduksi, nilaiUpah, totalNaker, nilaiPengeluaran } = this.state;
    const dataIndicator = { nilaiProduksi, nilaiUpah, totalNaker, nilaiPengeluaran, 
    pembaruanTerakhir, updaterTerakhir };
    axios.put(config.liveSBRUrl + '/establishment/' + idSBR, dataEstablishment)
		.then(({data}) => {
			if (data.success) {
        axios.put(config.liveSBRUrl + '/indicator/' + idSBR, dataIndicator)
        .then(({data}) => {
          if (data.success){
            alert("Update data berhasil.");
          } else {
            alert("Gagal.");
          }
        })
        .then(() => {
          window.location = "/";
        });
      } else {
        alert("Update data gagal.");
        window.location = "/";
      }
    });
  }
  backData(e){
    e.preventDefault();
    console.log('');
    this.handleClickSearch();
  }
  render() {
    return (
      <div className="sma-box">
        <h3>Survey Tenaga Kerja Perusahaan</h3><br />
        <Container>
          <p>Cari Perusahaan</p>
          <Row>
            <Col sm="6" className="center-padding">
              <InputSearch idSBR={this.state.idSBR} onChangeSearch={this.onChangeSearch} />
            </Col>
            <Col sm="2"  className="center-padding">
              <ButtonSearch idSBR={this.state.idSBR} onClickSearch={this.handleClickSearch} />
            </Col>
            <Col sm="2" >
              <Nav>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/pendaftaran"><Button  color="info">Tambah</Button></NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row><br />
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col sm="6">
                <FormGroup row>
                  <Label for="Nama-Perusahaan" sm={4}>Nama Perusahaan</Label>
                  <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Perusahaan" value={this.state.namaPerusahaan} onChange={this.onChangePerusahaan} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Nama-Komersial" sm={4}>Nama Komersial</Label>
                  <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Komersial" value={this.state.namaKomersial} onChange={this.onChangeKomersial} />
                  </Col>
                </FormGroup>
                <FormGroup tag="fieldset" row>
                  <legend className="col-form-legend col-sm-4">Unit Statistik</legend>
                  <Col sm={10}>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" value="1" checked={this.state.unitStatistik === '1'} onChange={this.handleOptStatistik} name="radio2" />{' '}
                        Enterprise Group
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" value="2" checked={this.state.unitStatistik === '2'} onChange={this.handleOptStatistik} name="radio2" />{' '}
                        Enterprise
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" value="3" checked={this.state.unitStatistik === '3'} onChange={this.handleOptStatistik} name="radio2" />{' '}
                        Establishment
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" value="4" checked={this.state.unitStatistik === '4'} onChange={this.handleOptStatistik} name="radio2" />{' '}
                        Unit Penunjang
                        </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>                
                <FormGroup row>
                  <Label for="Kegiatan-Utama" sm={4}>Kegiatan Utama</Label>
                  <Col sm={8}>
                    <Input type="text" name="text" id="Kegiatan-Utama" value={this.state.kegiatanUtama} onChange={this.onChangeKegiatan} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Kategori-KBLI" sm={4}>Kategori KBLI</Label>
                  <Col sm={8}>
                    <Input type="text" name="text" id="Kategori-KBLI" value={this.state.katKBLI} onChange={this.onChangeKategori} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Produk-Utama" sm={4}>Produk Utama</Label>
                  <Col sm={8}>
                    <Input type="text" name="text" id="Produk-Utama" value={this.state.produkUtama} onChange={this.onChangeProduk} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Kode-KBLI" sm={4}>Kode KBLI</Label>
                  <Col sm={8}>
                    <Input type="text" name="text" id="Kode-KBLI" value={this.state.kodeKBLI} onChange={this.onChangeKode} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="npwp" sm={4}>NPWP</Label>
                  <Col sm={8}>
                    <Input type="text" name="text" id="npwp" value={this.state.npwp} onChange={this.onChangeNPWP} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Alamat" sm={4}>Alamat</Label>
                  <Col sm={8}>
                    <Input type="text" name="text" id="Alamat" value={this.state.alamat} onChange={this.onChangeAlamat} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Kabupaten-Kota" sm={4}>Kode Kabupaten/Kota</Label>
                  <Col sm={8}>
                    <Input type="text" name="text" id="Kabupaten-Kota" value={this.state.kodeKabKot} onChange={this.onChangeKota} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Provinsi" sm={4}>Kode Provinsi</Label>
                  <Col sm={8}>
                    <Input type="text" name="text" id="Provinsi" value={this.state.kodeProv} onChange={this.onChangeProvinsi} />
                  </Col>
                </FormGroup>

                <FormGroup tag="fieldset" row>
                  <legend className="col-form-legend col-sm-4">Status</legend>
                  <Col sm={10}>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" value="1" checked={this.state.status === '1'} onChange={this.handleOptStatus} name="radio3" />{' '}
                        Aktif
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" value="2" checked={this.state.status === '2'} onChange={this.handleOptStatus} name="radio3" />{' '}
                        Tutup Sementara
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" value="3" checked={this.state.status === '3'} onChange={this.handleOptStatus} name="radio3" />{' '}
                        Alih Usaha
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" value="4" checked={this.state.status === '4'} onChange={this.handleOptStatus} name="radio3" />{' '}
                        Tidak Ditemukan
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" value="5" checked={this.state.status === '5'} onChange={this.handleOptStatus} name="radio3" />{' '}
                        Belum Berproduksi
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" value="6" checked={this.state.status === '6'} onChange={this.handleOptStatus} name="radio3" />{' '}
                        Tutup
                        </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup row>
                  <Label for="Nilai-Produksi" sm={4}>Nilai Produksi</Label>
                  <Col sm={8}>
                    <Input type="text" name="text" id="Nilai-Produksi" value={this.state.nilaiProduksi} onChange={this.onChangeProduksi} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Nilai-Balas-Jasa" sm={4}>Nilai Balas Jasa</Label>
                  <Col sm={8}>
                    <Input type="text" name="text" id="Nilai-Balas-Jasa" value={this.state.nilaiUpah} onChange={this.onChangeBalasJasa} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Tenaga-Kerja" sm={4}>Total Tenaga Kerja</Label>
                  <Col sm={8}>
                    <Input type="text" name="text" id="Tenaga-Kerja" value={this.state.totalNaker} onChange={this.onChangeTenagaKerja} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Nilai-Pengeluaran" sm={4}>Nilai Pengeluaran</Label>
                  <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Pengeluaran" value={this.state.nilaiPengeluaran} onChange={this.onChangePengeluaran} />
                  </Col>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="loc-center">
                <Button className="btn-center" onClick={this.updateData} color="info">Simpan</Button>
                <Button className="btn-center" onClick={this.backData}>Batal</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(Survey);