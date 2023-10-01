import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Items from "./components/items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      orders: [],
      items: [
        {
          id:1,
          title: 'Стул серый',
          img: "chair-grey.jpg",
          desc: 'Lorem ispum dolor sit amet, consectetur adipisicing',
          category: 'chairs',
          price:'49.99',
        },
        {
          id:2,
          title: 'Стол',
          img: "table.png",
          desc: 'Lorem ispum dolor sit amet, consectetur adipisicing',
          category: 'tables',
          price:'149.99',
        },
        {
          id:3,
          title: 'Диван',
          img: "sofa.png",
          desc: 'Lorem ispum dolor sit amet, consectetur adipisicing',
          category: 'sofa',
          price:'149.99',
        },
        {
          id:4,
          title: 'Лампа',
          img: "Light.png",
          desc: 'Lorem ispum dolor sit amet, consectetur adipisicing',
          category: 'light',
          price:'25',
        },
        {
          id:5,
          title: 'Стул белый',
          img: "chair-white.png",
          desc: 'Lorem ispum dolor sit amet, consectetur adipisicing',
          category: 'chairs',
          price:'49',
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
  return (
    <div className="wrapper">
      <Header  orders={this.state.orders}/>
      <Items  items={this.state.items} onAdd={this.addToOrder}/>
      <Footer />
    </div>
  );
}
addToOrder(item){
  this.setState({orders: [...this.state.orders,item]})
  }
}
export default App;
