import {useState} from 'react';

function Dropdown(props) {

    return(
        <form onSubmit={props.activityChoice}>
            <h3>Activities:</h3>
            <select 
            value={props.choice}
            onChange={props.handleChoice}
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