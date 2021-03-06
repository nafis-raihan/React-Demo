//const todoTitle = "Learning and Creating App with React.js";
const name = "Md. Nafis Raihan"
const address = "Azimpur"
const date = new Date();
// const dateName = date.getDate();
// const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Card(props){
    const {name, address} = props;

    return <div className="headingStyle2">
    {/* <h2 className="titleStyle">{todoTitle} </h2> */}
    <h3 className="nameStyle">{name}</h3>
    <h4 className="addressStyle">{address}</h4>
     <p className="yearStyle">{currentYear}</p>
    </div>
}

export default Card;