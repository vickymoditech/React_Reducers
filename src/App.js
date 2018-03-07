import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Footer from "./component/footer";
import _ from 'lodash';
import Detail_List from './component/detail_list';


class App extends Component {

  menu_click(data){
      alert(data);
  }


  render() {

    const videosearch_lodash = _.debounce((term => this.menu_click("vicky")),300);

    return (
      <div className="App">

          <Header funcation_send={data => {this.menu_click(data)}} />
          <Detail_List/>
          <Footer/>

      </div>
    );
  }
}

export default App;
