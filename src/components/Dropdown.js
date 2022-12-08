import {useState} from 'react';

function Dropdown(props) {
    const [choice, setChoice] = useState('');

    const handleChoice = (e) => {
        setChoice(e.target.value);
    }

    const activityChoice = (e) => {
        e.preventDefault();
        console.log(`you chose ${choice}!`)
        // choice.length === props.selectedActivity ? 
    }

    return(
        <form onSubmit={activityChoice}>
            <h2>Activities:</h2>
            <select 
            value={choice}
            onChange={handleChoice}
            name="activities" 
            id="activities">
                <option value="placeholder">Select an Activity:</option>
                <option value="Swimming">Swimming</option>
                <option value="Biking">Biking</option>
                <option value="Crafts">Crafts</option>
                <option value="Hiking">Hiking</option>
                <option value="Plant Identification">Plant Identification</option>
                <option value="Volleyball">Volleyball</option>
                <option value="Tennis">Tennis</option>
                <option value="Rowing">Rowing</option>
                <option value="Fishing">Fishing</option>
                <option value="Tree Climbing">Tree Climbing</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Dropdown;