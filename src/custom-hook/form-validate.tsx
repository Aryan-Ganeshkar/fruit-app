import { useState } from "react";

const UseFormValidate = (Validation : any) => {

    const [elemName, setElemName] = useState('');

    const [isElemNameTouched, setIsElemNameTouched] = useState<boolean>(false)

   const isElemNameEmpty = elemName.trim() === '';

    const isElemNameLength = Validation(elemName);

  const isElemNameValid = isElemNameTouched && isElemNameEmpty;

    
    return {
        elemName,
        setElemName,
        isElemNameTouched,
        setIsElemNameTouched,
        isElemNameEmpty,
        isElemNameLength,
        isElemNameValid
    };
}

export default UseFormValidate;