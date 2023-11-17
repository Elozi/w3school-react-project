import './outline.css'
let coursesOutline = {
    "HTML": ["Introduction", "Basic", "Advanced"],
    "JAVASCRIPT": ["Introduction", "Basic", "Advanced"],
    "CSS": ["Introduction", "Basic", "Advanced"],
    "C#": ["Introduction", "Basic", "Advanced"],
}
const Outline = (props) => {
    let currentCourseOutline = coursesOutline[props.outlineHeader]

    return (
            <div className="Outlines">
                <h3>{props.outlineHeader} TUTORIAL</h3>
                <div>
                {
                    currentCourseOutline.map((item) => {
                        return (<div id="outline-menu">{item}</div>)
                    })


                }
            </div>
            </div>
           
    );
}

export default Outline;
