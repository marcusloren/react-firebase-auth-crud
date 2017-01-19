import React, { Component } from 'react';
import { ref } from '../config/constants'

class UpdateableItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: props.title,
      text: props.text,
    };
    this.dbItems = ref.child('items');

    this.itemChange = this.itemChange.bind(this);
    this.handleUpdateItem = this.handleUpdateItem.bind(this);
  }

  itemChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleUpdateItem(e) {
    e.preventDefault();
    if (this.state.title && this.state.title.trim().length !== 0) {
      this.dbItems.child(this.props.dbkey).update(this.state);
    }
  }

  render(){
    return (
      <form onSubmit={ this.handleUpdateItem }>
        <label htmlFor={'title' + this.props.dbkey}>Title </label>
        <input
          id={'title' + this.props.dbkey}
          onChange={ this.itemChange }
          value={ this.state.title }
          name="title"
        />
        <br/>
        <label htmlFor={'text' + this.props.dbkey}>Text </label>
        <textarea
          id={'text' + this.props.dbkey}
          onChange={ this.itemChange }
          value={ this.state.text }
          name="text"
        >
        </textarea>
        <br/>

        <button>Save</button>
      </form>
    );
  }
}


export default UpdateableItem;