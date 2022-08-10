function Card({member}){

    return (
        <>
            <div className="containerData">
                <div className="rowData">
                    {member.map((val) => {
                        return (
                            <div key={val.id}>
                                <div className="person">
                                    <h2>Name: {val.name}</h2>
                                    <h3>Age: {val.age}</h3>
                                    <h3>Rating: {val.rating}</h3>
                                    <h3>Recent Activities: {val.activities.join(' ',)}</h3>
                                </div>
                                <button>Remove Member</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )

}

export default Card;