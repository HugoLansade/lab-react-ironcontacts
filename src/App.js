import logo from './logo.svg';
import React, { Component } from "react";
import contacts from "./contacts.json";
import './App.css';

const fiveContacts = contacts.slice(0,5);

class App extends React.Component {
  state = {
    contact: fiveContacts,
  };



  handleClick = () => {
  const contactsCopy = [...this.state.contact];    
  contactsCopy.push(contacts[Math.floor(Math.random() * (contacts.length - 5) + 5)]);


    this.setState(
      {
        contact : contactsCopy,
      },
      () => {
        console.log("Add !");
        // this.state.contact.push(contacts[Math.floor(Math.random() * (contacts.length - 5) + 5)]),
      }
    );
  };

  sortByName = () => {
    const sortNameContact = [...this.state.contact].sort((a,b) => a.name > b.name ? 1 : -1)

    this.setState(
      {
        contactSortByName : sortNameContact,
      },
      () => {
        console.log("T'es sur ?");
        this.state.contact = this.state.contactSortByName;
      }
    );
  };

  sortByPopularity = () => {
    const sortPopularityContact = [...this.state.contact].sort((a,b) => a.popularity > b.popularity ? 1 : -1)

    this.setState(
      {
        contactSortByPopularity : sortPopularityContact,
      },
      () => {
        console.log("T'es sur ?");
        this.state.contact = this.state.contactSortByPopularity;
      }
    );
  };

  delete = id => {
  const contactsCopy = [...this.state.contact];
  const celebIndex = contactsCopy.findIndex(item => item.id === id); 
  contactsCopy.splice(celebIndex,1);
    this.setState(
      {
        contact : contactsCopy,
      },
      () => {
        console.log("T'es sur ?");
        let indexCelebritieToRemove = this.state.contact.indexOf(this.state.contact[0].id);
        console.log(this.state.contact[0].id);

      }
    );
  };

  render () {
    return (
      <div className="App">
      <button className="add-contact" onClick={this.handleClick}>Add Random Contact</button>
      <button className="sort-name" onClick={this.sortByName}>Sort By Name</button>
      <button className="sort-popularity" onClick={this.sortByPopularity}>Sort By Popularity</button>
      
      <table className="actor-table" cellpadding="10" cellspacing="10">
        <thead>
          <tr>
            <th>Picture</th>    
            <th>Name</th> 
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.contact.map((contact) => {
            return (
              <tr id={contact.id}>
                <td><img className="celebrity-img" src={contact.pictureUrl} alt={contact.pictureUrl} /></td>  
                <td>{contact.name}</td> 
                <td>{contact.popularity}</td> 
                <td> <button className="delete" onClick={this.delete}>Delete</button></td>
            </tr>            
            );
          })}
        </tbody>        
      </table>
      </div>
    );
  }  
}

export default App;
