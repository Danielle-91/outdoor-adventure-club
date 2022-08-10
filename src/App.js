import { useState } from 'react';
import './App.css';
import Members from './Members';
import Card from './Card';
import Filter from './Filter';
import Search from './Search';

function App() {
  const [member, setMember] = useState(Members)
  const [nameQuery, setNameQuery] = useState ('')
  const [filteredMembs, setFilteredMembs] = useState([])
  const filteredMembers = (e) => {
    e.preventDefault();
    if(nameQuery === ''){
      setFilteredMembs()
    }
  }
  return (
    <>
      <header>
        <h1>Outdoor Adventure Club</h1>
      </header>

      <section className="members">
        <div className="">
          <h2>Adventure Club Members:</h2>
          <Search 
          />

          <Filter
          member={member}/>
          <div className="list">
            <Card member={member} />
          </div>
        </div>
        
      </section>
    </>
  );
}

export default App;
