import { useState } from "react";

export default function SearchBar({onSearch}) {
    const [id, setId] = useState(""); //Creo el estado local para el ID

    //Función para manejar los cambios en el input.
    const handleChange = (event) => {
        setId(event.target.value); //Actualiza el estado "id" con el valor del input.
    };
      // Función para realizar la búsqueda
  const handleSearchClick = () => {
    if (id.trim() !== '') {
      onSearch(id); // Pasa el estado 'id' como argumento a la función 'onSearch'
      setId(''); // Limpia el input después de la búsqueda
    }
  };

    
    return (
        <div className="search-bar">
            <input
            type="search"
            placeholder="Add character by ID..."
            value={id}
            onChange={handleChange} // Asigna la función 'handleChange' al evento 'onChange'
            />
            <button onClick={handleSearchClick}>Add</button>
        </div>
    );
}