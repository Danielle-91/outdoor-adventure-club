function Dropdown({filterActs, dropdownChoices}) {
return(
    <form action="#">
        <label htmlFor="activities">Activities</label>
        <select name="activities" id="activities" onChange={filterActs}>
            <option value="">
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