import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
        <div className='item'>
          <img src={"./img/" + this.props.item.img} />
          <div className='main-text'>
            <h2>{this.props.item.title}</h2>
            <p className='about'>{this.props.item.desc}</p>
            <div className='price'><b className='price'>{this.props.item.price}$</b></div>
            <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}><button>buy</button>
            </div>
          </div>
      </div>
    )
  }
}

export default Item