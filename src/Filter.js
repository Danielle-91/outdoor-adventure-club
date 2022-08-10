import {useState} from 'react';
import Members from './Members';

function Filter(props) {
    const [choice, setChoice] = useState('placeholder');

    return(
        <form>
            <h2>Activities:</h2>
            <select 
            value={choice}
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
        </form>
    )
}

export default Filter;