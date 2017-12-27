import React from 'react';
import { Input } from 'reactstrap';

class InputSearch extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange({ target }) {
    this.props.onChangeSearch(target.value);
  }
  render() {
    return (
      <Input type='text' placeholder='Masukkan ID SBR'
      value={this.props.idSBR} onChange={this.onChange}>
      </Input>
    );   
  }
}

export default InputSearch;