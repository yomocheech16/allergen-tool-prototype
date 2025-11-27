import './App.css';
import AllergenOptions from "./AllergenOptions";
import listOfAllergens from "./data/listOfAllergens.json";

function App() {
  const { allergens, subAllergens } = listOfAllergens;

  return (
    <div className='allergen-wrapper'>
      <div className='allergen-section'>
        <AllergenOptions data={allergens} title="Select Allergens" />
      </div>
      
      <div className='allergen-section'>
        <AllergenOptions data={subAllergens} title="Select Sub-Allergens" />
      </div>
     
    </div>
  );
}

export default App;