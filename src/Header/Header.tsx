import ReactDOM from 'react-dom'
import { fruitType } from '../components/Fruit-Button-Wrapper/FruitButtonWrapper';
import styless from './Header.module.scss';
import PopUp from '../PopUp/PopUp';
import { useState } from "react";
const Header: React.FC<{fruitData:fruitType[]}> = (props) => {

    const {fruitData} = props;

    let totalValue = 50;
    const [openPopUp , setOpenPopUp] = useState(false)

    const popUpId:any = ReactDOM.createPortal(
    <PopUp />,
     document.getElementById('popUp') as HTMLElement
    );


    const changePopUpStatus = () => {

        // console.log( 'pop is called' , openPopUp);
        setOpenPopUp(!openPopUp)
        // console.log('pop is called ' , openPopUp)
    }


    return (
        <div className={styless['header-main']}>
            {openPopUp ? popUpId : ''}
            <p className={styless['fruit-card']} > Fruit Card </p>
            <div>
                <button onClick={changePopUpStatus}> Open pop Up</button>
            <p> Total : {fruitData.length} </p>
            </div>
     </div>
    )
}

export default Header;