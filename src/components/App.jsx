import React from "react";
import './App.css'
import Header from "./Header";
import TicketList from "./TicketList"
import Footer from "./Footer"
import { Switch, Route } from 'react-router-dom';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  handleAddingNewTicketToList(newTicket){
  var newMasterTicketList = this.state.masterTicketList.slice();
  newMasterTicketList.push(newTicket);
  this.setState({masterTicketList: newMasterTicketList});
}

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route component={Error404} />
        </Switch>
        <Footer/>
      </div>
    );
  }

}

export default App;







    //   var allStyle = {
      // backgroundColor: '#13B7FF',
      // fontFamily: "'Nosifer', cursive",
      // color: '#BD0000',
      // textAlign: 'left',
      // margin: '-8px',
      // textShadow: '5px 3px 5px black'
