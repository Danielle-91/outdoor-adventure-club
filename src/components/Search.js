import {useState} from 'react';

function Search(props) {

    const [query, setQuery] = useState('');

    return(
        <div className="searchBar">
            <input placeholder="Search Members" onChange={e => setQuery(e.target.value)} />
        </div>
    )
}

export default Search;