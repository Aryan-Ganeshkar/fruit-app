import React, { useState, useEffect  } from 'react';
import './App.scss';
import Fruit from './components/Fruit';
import Header from './Header/Header';

function App() {

  useEffect ( () => {

    console.log('use effect called')
  },[])

  const [fruitData, setFruitData] = useState([]);

  useEffect(() => {
     console.log('fruit data state is updated')
  },[fruitData])

  // const [fruitName, setFruitName] = useState('');

  // const [fruitValue , setFruitValue] = useState('')

  // const [isFruitNameValid , setIsFruitNameValid] = useState<boolean>(false);

  // const [isFruitNameTouched , setIsFruitNameTouched] = useState<boolean>(false)

  // const submitFruitFrom = () => {

  //   if(fruitName.trim() === ''){
  //     setIsFruitNameValid(true);
  //   }

  //   console.log('fruitName', fruitName);
  //   console.log('fruitValue', fruitValue)
  // }
  return (
    <div className='width100'>
      {/* <form className='form-group'>
        <div className='fruit-control'> 
          <label htmlFor="fruitName"> Fruit Name </label>
          <input type={'text'} 
        value={fruitName}
        id = 'fruitName'
         onChange={(e) => { setFruitName(e.target.value) }}

         onBlur={ () => {
          setIsFruitNameTouched(true);
         }}
         />

         {isFruitNameTouched && <span className='error-text'>
            fruit name can not empty
         </span>}
        </div>
        
        <div className='fruit-control'>
          <label htmlFor="fruitValue"> Fruit Value </label>
        <input type = {'number'}
         value = {fruitValue} 
         id='fruitValue'
        onChange={(e) => { setFruitValue(e.target.value) }}
        />
        </div>
        
        <div>
          <button type = 'button' onClick={submitFruitFrom}>
          Submit</button>
        </div>
      </form> */}
      <Header fruitData={fruitData}/>
      <Fruit fruitData={fruitData} setFruitData={setFruitData}/>
    </div>
  ) ;
}

export default App;
