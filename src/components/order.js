import React, { Component } from 'react'

export class order extends Component {
  render() {
    return (
      <div className='item'>
        <div className='block-item'>
            <img src={"./img/" + this.props.item.img} />
            <h2>{this.props.item.title}</h2>
            <div className='price-block'><b className='price'>{this.props.item.price}$</b></div>
        </div>
    </div>
    )
  }
}

export default order