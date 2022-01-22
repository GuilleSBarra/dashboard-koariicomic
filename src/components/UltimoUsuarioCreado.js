/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "../assets/css/UltimoUsuarioCreado.css"
class UltimoUsuarioCreado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastUser: [],
      url: "https://serene-beyond-45379.herokuapp.com/http://koaricomic.herokuapp.com/api/users",
    };
  }

  apiCall(url, consecuencia) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => consecuencia(data))
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    console.log("-----");
    this.apiCall(this.state.url, this.mostrarInfo);
  }

  mostrarInfo = (data) => {
    console.log(data);
    this.setState({
      lastUser: data.users[data.users.length - 1],
    });
  };
  render() {
    return (
      <section className="conteinerTableProducts">
        <p className="verUsus">El ultimo usuario que de dio de alta es:</p>
        <table className="tableProducts">
          <tbody>
            <tr>
              <td>{this.state.lastUser.id}</td>
              <td>{this.state.lastUser.name}</td>
              <td>{this.state.lastUser.email}</td>
            </tr>
          </tbody>
        </table>
        <img className="coco" src={`https://koaricomic.herokuapp.com/${this.state.lastUser.detail}`}/>
      </section>
    );
  }
}

export default UltimoUsuarioCreado;
