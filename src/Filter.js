import {useState} from 'react';

function Filter(props) {
    const [choice, setChoice] = useState('');
    const handleChoice = (e) => {
        setChoice(e.target.value);
    }

    return(
        <form onSubmit={(e) => props.getActivities(e)}>
            <h2>Activities:</h2>
            <select 
            value={choice}
            onChange={handleChoice}
            name="activities" 
            id="activities">
                <option value="placeholder" disabled>Select a Recent Activity:</option>
                <option value="hiking">Hiking</option>
                <option value="swimming">Swimming</option>
                <option value="biking">Biking</option>
                <option value="crafts">Crafts</option>
                <option value="Hiking">Hiking</option>
                <option value="plantID">Plant Identification</option>
                <option value="volleyball">Volleyball</option>
                <option value="tennis">Tennis</option>
                <option value="rowing">Rowing</option>
                <option value="fishing">Fishing</option>
                <option value="trees">Tree Climbing</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Filter;