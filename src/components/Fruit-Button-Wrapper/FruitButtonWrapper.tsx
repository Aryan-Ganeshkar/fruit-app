import { useEffect, useState } from 'react';
import FruitButton from '../Fruit-Button/FruitButton';
import styless from './FruitButtonWrapper.module.scss';
import PopUp from '../../PopUp/PopUp';
import ReactDOM from 'react-dom';


export type fruitType = {
    name:string;
    value:number;
    color?:string
}




const FruitButtonWrapper: React.FC<{setFruitData:any}> = (props) => {
 
    const addNewFruit = (newFruit : fruitType) => {
       
          setFruitName((prevState: fruitType[]) => {

            return [...prevState, newFruit]
        })
    }


    const popUpId:any = ReactDOM.createPortal(
        <PopUp addNewFruit ={addNewFruit}/>,
         document.getElementById('popUp') as HTMLElement
        );

    const [openPopUp , setOpenPopUp] = useState(false);   

    const {setFruitData} = props;

    const fruitNameInitial:fruitType[] = [
        {
            name:'Apple',
            value:30,
            color:'red'
        },
        {
            name:'Banana',
            value:48,
            color: 'yellow'

        },
        {
            name:'Orange',
            value:60,
            color: 'Orange'
        },
        {
            name:'Mango',
            value:20,
            color: 'yellow'
        },
        {
            name:'Graps',
            value:10
        }

    ]

    const [fruitName , setFruitName] = useState<fruitType[]>(fruitNameInitial);

    const addFruit = (fruit: fruitType) => {
        // console.log('addFruit', fruit);
        setFruitData((prevState:any) => {

            return[...prevState , fruit]
        })
                
    }

    useEffect(() => {
        console.log('add fruit method called');
    },[addFruit])

    const OpenClosePopup = () => {
        setOpenPopUp(!openPopUp)
    }

    const allFruitBt = fruitName.map((fruit:fruitType) =>{
        return <FruitButton 
        btName={fruit.name} 
        fruitFun = {() =>
        {addFruit(fruit)}}/>
    })


    return(
        <div>
            {openPopUp ? popUpId : ''}
            <FruitButton 
        btName={'addNewFruit'} 
        fruitFun = {() =>
        {OpenClosePopup()}}/>

           <span className={styless['heading']}> Fruit Button Wrapper </span>
            {allFruitBt } 
       </div>
    )
}

export default FruitButtonWrapper;