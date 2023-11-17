import Button from "./button.js";
import './classOne.css'
import Forms from "./forms.js";
function homeClicked()
{
alert('Home Clicked')
}
function pageClicked()
{
alert('Page Clicked')
}


const Page = () => {
    return (
        <div className="mainpage">
            <div className="button-flex">
                <Button title='Home'
                    bg='green' color='white'
                    customStyle='style-one'
                    handleClick={homeClicked}
                    
                ></Button>
                <Button title='page'
                    bg='green' color='white'
                    customStyle='style-two'
                    handleClick={pageClicked}
                   
                ></Button>
                                           
                <div className="circular">
                    10

                </div>
            </div>
            <Forms></Forms>
          

        </div>
    );
}

export default Page;
