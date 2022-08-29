import { useState } from 'react';
import './App.css';
import Card from './Card';
import Search from './Search';

function App() {

  // Example member list
  const [member, setMember] = useState([
    {
      img: "https://loremflickr.com/200/200",
      id: "1",
      name: "John",
      age: 10,
      rating: 4.5,
      activities: ["hiking", "swimming", "biking"]
    },

    {
      img: "https://placekeanu.com/200/200",
      id: "2",
      name: "Paul",
      age: 12,
      rating: 5,
      activities: ["swimming", "crafts", "plant identification"]
    },

    {
      img: "https://placebeard.it/200/200",
      id: "3",
      name: "George",
      age: 11,
      rating: 3.2,
      activities: ["volleyball", "tennis", "rowing"]
    },

    {
      img: "https://placekitten.com/200/200",
      id: "4",
      name: "Ringo",
      age: 13,
      rating: 5,
      activities: ["fishing", "tennis", "tree climbing"]
    },
  ]);

  // Search Bar Logic
  const [query, setQuery] = useState('');
  
  

  // Delete Member Logic
  const removeMember = (members) => {
    const oldMems = [...member]

    // Once clicked, value of clicked member is passed as argument and compared to the value of each filtered member; if the two values match, it's excluded from the new array:
    const updatedMems = oldMems.filter(filteredMems => filteredMems !== members);

    // New array is returned from the filter method to update state:
    setMember(updatedMems);
  }

  return (
    <>
      <header>
        <h1>Outdoor Adventure Club</h1>
      </header>

      <section className="members">
        
        <div className="">
          <h2>Adventure Club Members:</h2>
        </div>

        <div className="searchBar">
          <input placeholder="Search Members" onChange={e => setQuery(e.target.value)} />
        </div>

        <div className="list">

          {member.filter(member => {
            if(query === ''){
              return member;
            } else if (member.name.toLowerCase().includes(query.toLowerCase())){
              return member;
            }
          }).map((member) => {

            // New function created to access specific member to delete:
            const removeSpec = () => {
              removeMember(member)
            }

            return(
              <Card member={member} removeMember={() => {removeMember(member)}}/>
            )
          })}
        </div>
        
      </section>
    </>
  );
}

export default App;
