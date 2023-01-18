import { Input } from "antd";

function Search(props) {
const {searchFood} = props


    return (
        <div id="searchbar">
            <Input type="text" onChange={ searchFood }  />
        </div>
    );

}

export default Search;