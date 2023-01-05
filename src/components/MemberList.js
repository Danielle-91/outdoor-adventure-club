import Card from "../UI/Card";

function MemberList(props){
    
    return(
        <Card>
            <div className="nameFlex">
                <div>
                    <img src={props.img} alt="{props.name}" />
                </div>
                
                <div>
                    <h2>{props.name}</h2>
                </div>
            </div>
                
                <div className="info">
                    <div className="age">
                        <h3>Age:</h3>
                        <p className="number">{props.age}</p> 
                    </div>

                    <div className="rating">
                        <h3>Rating:</h3> 
                        <p className="number">{props.rating}</p> 
                    </div>

                    <div className="activities">
                        <h3>Activities:</h3>
                        <p>{props.activities.join(' | ')}</p>
                    </div>

                    <button onClick={props.removeMember} className="remove">Remove Member</button>
                </div>
        </Card>
        
    )
}

export default MemberList;


