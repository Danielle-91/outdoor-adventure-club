import Card from "../UI/Card";

function MemberList(props){
    return(
        <Card>
            <div>
                <img src={props.img} alt="{props.name}" />
            </div>
            <div>
                <h2>{props.name}</h2>
            </div>

            <div>
                <h3>Age:</h3>
                <p>{props.age}</p> 
            </div>

            <div>
                <h3>Rating:</h3> 
                <p>{props.rating}</p> 
            </div>

            <div>
                <h3>Activities:</h3>
                <p>{props.activities.join(' ')}</p>
            </div>
        </Card>
        
    )
}

export default MemberList;