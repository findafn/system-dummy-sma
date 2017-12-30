import React from 'react';
import { Button } from 'reactstrap';

class ButtonSearch extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onClickSearch();
  }
  render() {
    return (
        <Button color="info" onClick={this.handleClick}>Search</Button>
    );   
  }

}

export default ButtonSearch;