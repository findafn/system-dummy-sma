import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Input, Form, FormGroup, Label, Button, Nav, NavLink, NavItem } from 'reactstrap';
import { Link, NavLink as RRNavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

import config from '../config';

class Pendaftaran extends React.PureComponent {
	constructor(props) {
    super(props);
    this.state = {
      namaPerusahaan: '',
      namaKomersial: '',
      kegiatanUtama: '',
      katKBLI: '',
      produkUtama: '',
      kodeKBLI: '',
      alamat: '',
      kodeKabKot: '',
      kodeProv: '',
      unitStatistik: '2',
      status: '',
    };
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
    this.handleOptStatistik = this.handleOptStatistik.bind(this);
    this.handleOptStatus = this.handleOptStatus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
		const data = this.state;
		data.creator = 'SMA';
		data.tanggalEntryPertama = Date.now();
    axios.post(config.liveSBRUrl + '/establishment', data)
		.then(({data}) => {
			if (data.success) {
				alert('Data berhasil disimpan. ID SBR : ' + data.result.idSBR);
			} else {
				alert('NPWP Telah terdaftar pada Establishment dengan ID SBR : ' + data.result);
			}
			window.location = "/";
		})
		.catch((error) => {
			alert('Terjadi error');
			window.location = "/";
		});
  }
	renderSamping() {
		if (this.state.unitStatistik !== '1') {
			return (
				<div>
					<FormGroup>
						<Label for="kodeKBLI">Kode KBLI*</Label>
						<Input type="text" name="text" id="kodeKBLI" value={this.state.kodeKBLI} onChange={this.onChangeKode} />
					</FormGroup>
					<FormGroup>
						<Label for="produkUtama">Produk Utama*</Label>
						<Input type="text" name="text" id="produkUtama" value={this.state.produkUtama} onChange={this.onChangeProduk} />
					</FormGroup>
					<FormGroup tag="fieldset" row>
						<legend className="col-form-legend col-sm-4">Status</legend>
						<Col sm={10}>
							<FormGroup check>
								<Label check>
									<Input type="radio" value="1" checked={this.state.status === '1'} onChange={this.handleOptStatus} name="radio2" />{' '}
									Aktif
								</Label>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input type="radio" value="2" checked={this.state.status === '2'} onChange={this.handleOptStatus} name="radio2" />{' '}
									Tutup Sementara
								</Label>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input type="radio" value="3" checked={this.state.status === '3'} onChange={this.handleOptStatus} name="radio2" />{' '}
									Alih Usaha
								</Label>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input type="radio" value="4" checked={this.state.status === '4'} onChange={this.handleOptStatus} name="radio2" />{' '}
									Tidak Ditemukan
								</Label>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input type="radio" value="5" checked={this.state.status === '5'} onChange={this.handleOptStatus} name="radio2" />{' '}
									Belum Berproduksi
								</Label>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input type="radio" value="6" checked={this.state.status === '6'} onChange={this.handleOptStatus} name="radio2" />{' '}
									Tutup
								</Label>
							</FormGroup>
						</Col>
					</FormGroup>
				</div>
			);
		}
	}
	
	renderBawah() {
		if (this.state.unitStatistik !== '1') {
			return (
				<Row>
					<Col sm="6">
					<Form>
						<FormGroup>
						<Label for="npwp">Nomor Pokok Wajib Pajak</Label>
						<Input type="text" name="text" id="npwp" value={this.state.npwp} onChange={this.onChangeNPWP} />
						</FormGroup>
						<FormGroup>
						<Label for="alamat">Alamat*</Label>
						<Input type="text" name="text" id="alamat" value={this.state.alamat} onChange={this.onChangeAlamat} />
						</FormGroup>
					</Form>
					</Col>
					<Col sm="6">
					<Form>
						<FormGroup>
						<Label for="kodeProv">Kode Provinsi*</Label>
						<Input type="text" name="text" id="kodeProv" value={this.state.kodeProv} onChange={this.onChangeProvinsi} />
						</FormGroup>
						<FormGroup>
						<Label for="kodeKabKot">Kode Kabupaten/Kota*</Label>
						<Input type="text" name="text" id="kodeKabKot" value={this.state.kodeKabKot} onChange={this.onChangeKota} />
						</FormGroup>
						</Form>
					</Col>
				</Row>
			);
		}
	}
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
										<Label for="Nama-Perusahaan">Nama Perusahaan*</Label>
										<Input type="text" name="text" id="Nama-Perusahaan" value={this.state.namaPerusahaan} onChange={this.onChangePerusahaan} />
									</FormGroup>
									<FormGroup>
										<Label for="Nama-Komersial">Nama Komersial*</Label>
										<Input type="text" name="text" id="Nama-Komersial" value={this.state.namaKomersial} onChange={this.onChangeKomersial} />
									</FormGroup>

									<FormGroup tag="fieldset" row>
										<legend className="col-form-legend col-sm-4">Unit Statistik*</legend>
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
								</Form>
							</Col>

							<Col sm="6">
								<Form>
									<FormGroup>
										<Label for="Kategori-KBLI">Kategori KBLI*</Label>
										<Input type="text" name="text" id="Kategori-KBLI" value={this.state.katKBLI} onChange={this.onChangeKategori} />
									</FormGroup>
									<FormGroup>
										<Label for="Kegiatan-Utama">Kegiatan Utama*</Label>
										<Input type="text" name="text" id="Kegiatan-Utama" value={this.state.kegiatanUtama} onChange={this.onChangeKegiatan} />
									</FormGroup>
									{this.renderSamping()}
								</Form>
							</Col>
						</Row>
						<hr />
						{this.renderBawah()}
						<Row>
							<Col  sm={6}>
								<Nav  className="float-right">
									<NavItem>
										<NavLink>	<Button color="info" onClick={this.handleSubmit}>Simpan</Button></NavLink>
									</NavItem>
								</Nav>
							</Col>
							<Col sm={6}>
								<Nav>
									<NavItem>
										<NavLink tag={RRNavLink} to="/survey"><Button  color="info">Batal</Button></NavLink>
									</NavItem>
								</Nav>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}

export default withRouter(Pendaftaran);