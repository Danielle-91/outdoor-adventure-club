function Card(props) {
    return(
        <div>
            <ul>
                <li><img src={props.member.img} alt={props.member.name} /> </li>
                <li>Name: {props.member.name}</li>
                <li>Age: {props.member.age}</li>
                <li>Rating: {props.member.rating}</li>
                <li>Activities: {props.member.activities.join(', ')}</li>
            </ul>    
    
            <button onClick={props.removeMember}>Remove Member</button>
        </div>
    )
}

export default Card;