import styless from './FruitButton.module.scss';

const FruitButton: React.FC<{
    btName: string , 
    fruitFun: () => void
}> = (props) => {

    const { btName , fruitFun } = props;
    return(
        <div>
            <button className={`${styless['button-class']} ${styless['']}`} onClick = {fruitFun}>
                {btName}
            </button>
        </div>
    )
}

export default FruitButton;