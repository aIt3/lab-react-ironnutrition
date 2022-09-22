import { Divider, Input } from 'antd';
import { useState } from "react";



function Search (props){
    const {searchResults} = props; 
    const [search, setSearch] = useState ('')

    const handleChange = (e) => {
        setSearch(e.target.value);
        searchResults(e.target.value);
    }
    return(
        <div>
        <Divider>Search</Divider>
        <label>Search</label>
        <Input type="text" value={search} onChange={handleChange}/>
        </div>

    )
}

export default Search