import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";

const Checkout = (props) => {
  const [FormInputValid, setFormInputValid] = useState({
    name: true,
    address: true,
    postalCode: true,
    city: true,
  });

  const nameRef = useRef();
  const addressRef = useRef();
  const postalCodeRef = useRef();
  const cityRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredPostalCode = postalCodeRef.current.value;
    const enteredCity = cityRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = !isEmpty(enteredPostalCode);

    setFormInputValid({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const FormIsValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!FormIsValid) {
      return;
    }
    props.onConfirm({
        name: enteredName,
        address: enteredAddress,
        postalCode: enteredPostalCode,
        city: enteredCity
    });
  };
  const nameClassController = `${classes.control} ${
    FormInputValid.name ? "" : classes.invalid
  }`;
  const addressClassController = `${classes.control} ${
    FormInputValid.address ? "" : classes.invalid
  }`;
  const postalClassController = `${classes.control} ${
    FormInputValid.postalCode ? "" : classes.invalid
  }`;
  const cityClassController = `${classes.control} ${
    FormInputValid.city ? "" : classes.invalid
  }`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClassController}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!FormInputValid.name && <p>Please enter valid name!</p>}
      </div>
      <div className={addressClassController}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressRef} />
        {!FormInputValid.address && <p>Please enter valid address!</p>}
      </div>
      <div className={postalClassController}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeRef} />
        {!FormInputValid.postalCode && <p>Please enter valid postalCode!</p>}
      </div>
      <div className={cityClassController}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!FormInputValid.city && <p>Please enter valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
