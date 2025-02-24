import AutoCompleteSearchBar from "../Menu/AutoCompleteSearchBar";


const ListHeader = () => {


    return (
        <div className="list-header">
            <div className="primary-button">
                + Gerecht toevoegen
            </div>
            <label>Zoeken:</label>
            {/* <input className="search" type="text" id="name" name="name" placeholder="zoeken" /> */}
            <AutoCompleteSearchBar query={null} setQuery={null} />
            <label>Toon:</label>
            <select className="list-button" name="results" id="results">
                <option value="Alles">Alles</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">25</option>
            </select>
            <label>gerechten</label>
        </div >
    );
}
export default ListHeader;