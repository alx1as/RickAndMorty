
export default function Card ({name, status, species, gender, image, onClose}) {
return (
    <div className='card'>
<img src={image} alt=""/>       
<p> Name: {name} </p>
<p> Species: {species} </p>
<p> Gender: {gender} </p>
<p> Status: {status} </p>
<button onClick = {onClose}>X</button>
    </div>
);
}
//no pude poner origin.name