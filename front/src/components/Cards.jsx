import Card from "./Card.jsx";
//Esta función recibe los characters de los personajes que es un arreglo y lo recorre, mediante el método map. Por cada elemento del arreglo lo recorre y toma sus datos. Es como un contenedor de todas las Card.

export default function Cards({characters, onClose}) {
    return (
        <div className="cards"> 
            { characters.map(({name, status, species, gender, image, origin, id}) => {
                return (
                <Card
                 image= {image}
                 key= {id}
                 name= {name} 
                 gender= {gender}
                 species= {species}
                 status= {status}
                 origin= {origin.name} 
                 id={id}
                 onClose ={onClose}
                   />
                )
            })
            }
        </div>
    )
}