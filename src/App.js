import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './UI/Card';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import DummyData from './components/DummyData';
import MemberList from './components/MemberList';

function App() {

  // Example member list

  
  const [member, setMember] = useState(DummyData);

  // Search Bar Logic
  const [query, setQuery] = useState('');

  // Dropdown Logic
  const dropdownChoices = [...new Set(DummyData.flatMap((act) => act.activities))];
  const filterActs = (e) => {
    const selection = e.target.value;
    setMember(
      selection === ""
      ? DummyData
      : DummyData.filter((member) => member.activities.includes(selection)
      )
    )
  }
  
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
    <Header />

      <section className="members">
        
        <div>
          <h2>Club Members:</h2>
          <h3>There are {member.length} Members</h3>
        </div>
        
        <div className="dropdown">

          <Dropdown
          filterActs={filterActs}
          dropdownChoices={dropdownChoices}/>
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
          })
          .map((member) => {

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
