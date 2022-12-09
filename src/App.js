import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './UI/Card';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

import MemberList from './components/MemberList';

function App() {

  // Example member list

  const DUMMY_MEMBERS = [
    {
      img: "https://loremflickr.com/200/200",
      id: "a1",
      name: "John",
      age: 10,
      rating: 4.5,
      activities: ["hiking", "swimming", "biking"]
    },

    {
      img: "https://placekeanu.com/200/200",
      id: "a2",
      name: "Paul",
      age: 12,
      rating: 5,
      activities: ["swimming", "crafts", "plant identification"]
    },

    {
      img: "https://placebeard.it/200/200",
      id: "a3",
      name: "George",
      age: 11,
      rating: 3.2,
      activities: ["volleyball", "tennis", "rowing"]
    },

    {
      img: "https://placekitten.com/200/200",
      id: "a4",
      name: "Ringo",
      age: 13,
      rating: 5,
      activities: ["fishing", "tennis", "tree climbing"]
    },
  ]
  const [member, setMember] = useState(DUMMY_MEMBERS);

  // Dropdown Menu Logic
  const [choice, setChoice] = useState('');

  const handleChoice = (e) => {
    setChoice(e.target.value);
  }

  const activityChoice = (e) => {
    e.preventDefault();
    console.log(`you chose ${choice}!`)
    // choice.length === props.selectedActivity ? 
  }

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
    <Header>
      <h2>Staff Zone</h2>
    </Header>

      <section className="members">
        
        <div>
          <h3>Club Members:</h3>
        </div>

        <div className="dropdown">
          <Dropdown
          selectedActivity={member.activities}
          handleChoice={handleChoice}
          activityChoice={activityChoice}
          choice={choice}/>
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
                <MemberList
                  key={member.id} 
                  img={member.img}
                  name={member.name} 
                  age={member.age}
                  rating={member.rating}
                  activities={member.activities}
                  removeMember={removeSpec} 
                />
            )
          })}
        </div>
        
      </section>
    </>
  );
}

export default App;
