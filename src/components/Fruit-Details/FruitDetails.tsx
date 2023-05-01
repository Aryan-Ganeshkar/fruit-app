import { fruitType } from '../Fruit-Button-Wrapper/FruitButtonWrapper';
import styless from './FruitDetails.module.scss';

const FruitDetails: React.FC<{fruitData : fruitType[]}> = (props) => {

    const {fruitData} = props;
    // console.log('fruitData', fruitData);

    const allFruitDetails = fruitData.map((fruit:fruitType) => {
        //const fruitValue:string = '(${fruit.value})';
        return(
            <p className={styless['fruit-p']}> 
                <span className={styless['apple-color']}> {fruit.name} </span>
                <span> {fruit.value} </span> 
                <span> = qty & 50 </span>
            </p>
            
        )
    })

    // console.log('allFruitDetails', allFruitDetails)

    return (
        // <React.fragment>
            
        //    {allFruitDetails} 

        // </React.fragment>

        <>

        {allFruitDetails}
        
        </>
    )
}

export default FruitDetails;