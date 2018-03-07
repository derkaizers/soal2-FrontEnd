import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = { dataKu: [], };
  }
componentDidMount() {

  axios.get('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Arsenal').then((ambilData) => 
  { console.log(ambilData);
  this.setState ({ dataKu: ambilData.data, })
  })
};

render() {
  var data = this.state.dataKu.map((item, index) =>
{ var id = item.id;
  name = item.strPlayer;
  posisi = item.strPosition;
  pic = item.strThumb;
  desc = item.strDescriptionEN
  return <tr key={index}>
  <td>{id}</td>
  <td>{name}</td>
  <td>{posisi}</td>
  <td>{pic}</td>
  <td>{desc}</td>
  </tr>;
})
    return (
    <BrowserRouter>
      <input ref="topic" type="text" name="namaTeam"
        placeholder="Team's name..."/>

      <button 
      	value="Send" onClick={this.publish}> 
      	Lihat Daftar
      </button>
    </BrowserRouter>
    );
}}



export default App;
