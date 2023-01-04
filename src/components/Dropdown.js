import MemberList from './MemberList';


function Dropdown({filterActs, dropdownChoices, setMember}) {
return(
    <form action="#">
        <label htmlFor="activities">Activities</label>
        <select name="activities" id="activities" onChange={filterActs}>
            <option value=""
            onChange={() => setMember(MemberList)}
            >
                All
            </option>
            {dropdownChoices.map((act) => {

                return(
                    <option
                    value={act} key={act}>
                        {act}
                    </option> 
                )
            })}
        </select>
    </form>
)
}
    export default Dropdown;
    // 