import { useState, useRef, useEffect } from "react";
import styless from './PopUp.module.scss';
import { fruitType } from "../components/Fruit-Button-Wrapper/FruitButtonWrapper";
import UseFormValidate from "../custom-hook/form-validate";

const PopUp: React.FC<{ addNewFruit?: (newFruit: fruitType) => void }> = (props) => {

  const { addNewFruit } = props;

  const [isOpen, setIsOpen] = useState(false);

  const [fruitColor, setFruitColor] = useState('')

  const modalRef: any = useRef();

  const minLength = 5;

  const minValue = 5;

  const {
    elemName: fruitName,
    setElemName: setFruitName,
    isElemNameTouched: isFruitNameTouched,
    setIsElemNameTouched: setIsFruitNameTouched,
    isElemNameEmpty: isFruitNameEmpty,
    isElemNameLength: isFruitNameLength,
    isElemNameValid: isFruitNameValid
  } = UseFormValidate((elemName : any) => elemName.length > minLength);

  const {
    elemName: fruitValue,
    setElemName: setFruitValue,
    isElemNameTouched: isFruitValueTouched,
    setIsElemNameTouched: setIsFruitValueTouched,
    isElemNameEmpty: isFruitValueEmpty,
    isElemNameLength: isFruitValueLength,
    isElemNameValid: isFruitValueValid
  } = UseFormValidate((elemName : any) => elemName >=  minValue);

  const isFormValid = (isFruitNameTouched && isFruitNameValid) && (isFruitValueTouched && isFruitValueValid); 

  useEffect(() => {
    // console.log('on load on popup')
    if (modalRef.current.getAttribute('open') === null) {
      OpenPopUp();
    }
  }, [modalRef])

  const OpenPopUp = () => {

    const modal = modalRef.current;
    console.log('modal', modal);

    if (isOpen) {
      modal.close();
      setIsOpen(true)
    } else {
      //  modal.querySelector('h1').innerHTML = 'I have change h1'
      modal.showModal();
      setIsOpen(false)
    }

  };

  const submitFruitFrom = () => {

    console.log('fruitName', fruitName.trim())
    console.log('fruitValue', fruitValue)
    


  }

  const closepoup=() =>{   

    modalRef.current.close();

  }
  return (
    <dialog className={styless['fruit-dialog']} ref={modalRef}>
      <form className={styless['fruit-from']}>
        <div className={styless['fruit-control']}>
          <label htmlFor="fruitName"> Fruit Name </label>
          <input type={'text'}
            value={fruitName}
            id='fruitName'
            onChange={(e) => { setFruitName(e.target.value) }}

            onBlur={() => {
              setIsFruitNameTouched(true);
            }}
          />
          <span className={styless['min-length']}> {fruitName.length} / {minLength} </span>

          {isFruitNameValid && <span className={styless['error-text']}>
            {/* trionary operator */}
            Fruit name can not empty
          </span>}

          {isFruitNameTouched && !isFruitNameValid && !isFruitNameLength &&
            (<span> fruit name length must be greater than {minLength}
            </span>)}


        </div>

        <div className={styless['fruit-control']}>
          <label htmlFor="fruitValue"> Fruit Value </label>
          <input type={'number'}
            value={fruitValue}
            id='fruitValue'
            onChange={(e) => { setFruitValue(e.target.value) }}

            onBlur={ () => {
              setIsFruitValueTouched(true);
            }}
          />

    <span className={styless['min-length']}> {fruitValue} / {minValue} </span>

    {isFruitValueValid && <span className={styless['error-text']}>
  {/* trionary operator */}
  Fruit value can not empty
  </span>}

    {isFruitValueTouched && !isFruitValueValid && !isFruitValueLength &&
   (<span> fruit value  must be greater than {minValue}
    </span>)}

        </div>

        <div className={styless['fruit-control']}>
          <label htmlFor="fruitColor"> Fruit color </label>
          <select>
            <option> Red </option>
            <option> yellow </option>
            <option> blue </option>
            <option> orange </option>
            <option> black </option>
          </select>
        </div>
        <br></br>
        <div>
          <button type='button' onClick={closepoup}>Cancel</button>
          <button type='button' onClick={submitFruitFrom} disabled={isFormValid}> Submit</button>
        </div>
      </form>
    </dialog>
  )
}

export default PopUp;