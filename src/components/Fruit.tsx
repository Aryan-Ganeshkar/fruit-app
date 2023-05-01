import FruitButtonWrapper, { fruitType } from './Fruit-Button-Wrapper/FruitButtonWrapper';
import FruitButton from './Fruit-Button/FruitButton';
import FruitDetails from './Fruit-Details/FruitDetails';
import styless from './Fruit.module.scss';

const Fruit: React.FC<{
    
    fruitData : fruitType[] ;
    setFruitData : any

    }> = (props) => {

    const {fruitData , setFruitData} = props;
    
    return(
            <div className={styless['main-page']}>
                <div className={styless['width20']}>
                <FruitButtonWrapper setFruitData={setFruitData}/>
                </div>
                <div className={styless['width70']}>
                <FruitDetails fruitData={fruitData}/>
                </div>
            </div>
    )
}

export default Fruit;