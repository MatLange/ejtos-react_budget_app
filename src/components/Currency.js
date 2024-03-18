import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
    }    
    const alertType = 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <div className="input-group-prepend">
            <span className="text-white">Currency</span>
            </div>
            <select className={`alert ${alertType}`} id="inputGroupSelect03" onChange={handleCurrencyChange}>
            <option defaultValue>Choose...</option>
            <option value="$" name="dollar">$ Dollar</option>
            <option value="£" name="pound">£ Pound</option>
            <option value="€" name="pound">€ Euro</option>
            <option value="₹" name="pound">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;

