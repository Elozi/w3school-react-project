import './classOne.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className='Headerbar'>
            <div
                className='Right-header'>
                <img className='logo' src="https://th.bing.com/th/id/OIP.7VL19R7wdmS9YVqTLVafwgHaHa?w=174&h=180&c=7&r=0&o=5&pid=1.7"></img>
                <h3>Tutorials</h3>
                <h3>Exercises</h3>
                <h3>Certificates</h3>
                <h3>Services</h3>
                <input id='searchbar' type='search' placeholder='Search...' ></input>
                <FontAwesomeIcon  icon={faSearch}>
                 
                </FontAwesomeIcon>
                
            </div>
            

            <div className='Left-header'>
                <h3>Jobs</h3>
                <h3>Spaces</h3>
                <h3>Get Certified</h3>

            </div>
        </div>
    

    );
}

export default Header;
