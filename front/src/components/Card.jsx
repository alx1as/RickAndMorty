export default function Card({ name, status, species, gender, image, onClose, origin, id }) {
    const handleOnCloseClick = () => {
      onClose(id); // Llamo a la función onClose con el ID como argumento
    };
  
    return (
      <div className='card'>
        <img src={image} alt="" />
        <p> Name: {name} </p>
        <p> Species: {species} </p>
        <p> Origin: {origin} </p>
        <p> Gender: {gender} </p>
        <p> Status: {status} </p>
        <button onClick={handleOnCloseClick}>X</button>
      </div>
    );
  }
  