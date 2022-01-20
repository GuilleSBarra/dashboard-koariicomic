import React, {Component} from "react";
import "../assets/css/ListadoDeProductos.css"

class ListadoDeProductos extends Component {

    constructor(props){
        super(props);
        this.state={
            listado: [],
            url: "https://serene-beyond-45379.herokuapp.com/http://koaricomic.herokuapp.com/api/products"
        }
    }

    apiCall(url, consecuencia){
        fetch(url)
            .then(response => response.json())
            .then (data => consecuencia(data))
            .catch(error => console.log(error))
    }

    componentDidMount() {
        console.log("-----")
        this.apiCall(this.state.url, this.mostrarInfo )
        
      }

      mostrarInfo = (data) => {
          console.log(data)
          this.setState(
              {
                listado: data.products
              }
          )
      }
      render() {
        
        return (
            <section className="conteinerTableProducts">
                <p className="ver4">El listado de productos en tienda es:</p>
                <table className="tableProducts">
                    <tbody>
                {this.state.listado.map((product, i)=>    
                
                <tr key={i}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>$ {product.price}</td>
                </tr>    
                )}</tbody>
              </table>
          </section>
        )
    }
}
export default ListadoDeProductos;