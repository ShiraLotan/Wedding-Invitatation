import React, { Component } from 'react';
import './App.css';
import GustsList from './comps/guestsList';

class App extends Component {

  state = {
    guests: [
        {
        name:'Shira',
        isConfirmed:false,
        isEditing: false
      },
      {
        name:'John',
        isConfirmed:true,        
        isEditing: false
      }
    ]
  }

  toggleGuestProperty = (property, findByIndex) =>
  {
    debugger
    this.setState({
      guests: this.state.guests.map((guest,i)=>  i===findByIndex ? {...guest, property:!guest[property]} : guest)
    })
  }

  toggleConfirm = index => 
    this .toggleGuestProperty('isConfirmed', index);

  toggleEdit = index =>
    this.toggleGuestProperty('isEditing', index);

  getTotalInvited = () => this.state.guests.length;

  render() {
    return (
      <div className="App">
      <header>
        <h1>RSVP</h1>
        <p>Easily Invite Your friends</p>
        <form>
            <input type="text" value="Safia" placeholder="Invite Someone"/>
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>
      </header>
      <div className="main">
        <div>
          <h2>Invitees</h2>
          <label>
            <input type="checkbox"/> Hide those who haven't responded
          </label>
        </div>
        <table className="counter">
          <tbody>
            <tr>
              <td>Attending:</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Unconfirmed:</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>

        <GustsList 
        togglConformationFunc = {this.toggleConfirm}
        toggleEdittFunc = {this.toggleEdit}
        guests={this.state.guests}/>
      </div>
    </div>
    );
  }
}

export default App;
