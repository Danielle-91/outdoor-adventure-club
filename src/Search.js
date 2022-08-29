function Search(props) {

    return(
        <div className="search">
            <input type="text"
                placeholder="Search..."
                onChange={(e) => props.setQuery(e.target.value)}
            />

        </div>
    )
}

export default Search;