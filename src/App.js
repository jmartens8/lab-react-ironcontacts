import { useState } from 'react'
import "./App.css";
import contactsData from "./contacts.json"



function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0,5))
  console.log(contacts);

  function addRandom () {
    const randomContact = Math.floor(Math.random() * contactsData.length)    
    setContacts([contactsData[randomContact], ...contacts])
  }

  function sortByName () {
    console.log('Sort by name');
    const sortedArr = contacts.sort((a,b) => a.name.localeCompare(b.name))
    setContacts([...sortedArr])
  }

  function sortByPopularity () {
    const sortedArr = contacts.sort((a,b) => b.popularity - a.popularity)
    setContacts([...sortedArr])
  }

  function remove (id) {
    let newArr = contacts.filter(function(contact){
      return contact.id !== id
    })
    setContacts([...newArr])
  }

  return (
    
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandom}>Add a random contact 🤦‍♂️</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Populatiy</th>
                <th>Won an Oscar</th>
                <th>Won an Emmy</th>
              </tr>
            </thead>
            <tbody>

              {contacts.map(contact => (
                    <tr key={contact.id}>
                      <td><img src={contact.pictureUrl} alt="profile"/></td>
                      <td>{contact.name}</td>
                      <td>{Math.round(contact.popularity * 100)/100}</td>
                      <td>{contact.wonOscar && <p>🏆</p>}</td>
                      <td>{contact.wonEmmy && <p>🏆</p>}</td>
                      <td>
                      {/* Wir können mit onClick nicht direct die remove function callen, sondern müssen eine funktion callen,
                      welche die remove funktion callt... ist so */}
                        <button onClick={function() {remove(contact.id)}}>
                          Delete
                        </button>
                      </td>
                    </tr>
                ))
              }
            </tbody>
          </table>
    </div>
  );
}
export default App;