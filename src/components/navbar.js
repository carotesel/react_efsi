import '../index.css';

function navbar(){
    return (
        <div className='col-md-3 col-6 wrapper ml-5'>
            <div className='search_box'>
                <div className='search_btn'>
                        <i className='bi bi-search-heart'></i>
                </div>
                <input type="text" class="input_search" placeholder="Qué estas buscando?"/>
            </div>
      </div>
      );
}
export default navbar;