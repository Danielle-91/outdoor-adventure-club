function Search({keyword, setKeyword}) {

    return(
        <input type="text"
        value={keyword}
        placeholder={"Search Members by Name"}
        onChange={(e) => setKeyword(e.target.value)}
        />
    )
}

export default Search;