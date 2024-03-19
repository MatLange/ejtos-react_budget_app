import React, { useContext, useState } from 'react';
import './Currency.css';
import { AppContext } from '../context/AppContext';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    
    const determineDropdownTitle = (newCurrency) => {
        const dropdownTitles = {
            "$": "$ Dollar",
            "£": "£ Pound",
            "€": "€ Euro",
            "₹": "₹ Ruppee",
        };            
        const dropdownTitle = dropdownTitles[newCurrency || "£"];
        return "Currency(" + dropdownTitle + ")";
    };

    const [dropdownTitle, setDropdownTitle] = useState(determineDropdownTitle(currency));    

    const handleCurrencyChange = (event, newCurrencyValue) => {
        console.log(newCurrencyValue);
        setNewCurrency(newCurrencyValue);
        const newDropdownTitle = determineDropdownTitle(newCurrencyValue);
        setDropdownTitle(newDropdownTitle);
    }    

    const alertType = 'alert-success';
    return (
        <div className='alert alert-secondary'>
            <DropdownButton  id="dropdown-basic-button" variant="success" title={dropdownTitle}>
                <Dropdown.Item onClick={event => handleCurrencyChange(event, "$" )} eventKey="$">$ Dollar</Dropdown.Item>
                <Dropdown.Item onClick={event => handleCurrencyChange(event, "£" )} eventKey="pound">£ Pound</Dropdown.Item>
                <Dropdown.Item onClick={event => handleCurrencyChange(event, "€" )} eventKey="euro">€ Euro</Dropdown.Item>
                <Dropdown.Item onClick={event => handleCurrencyChange(event, "₹" )} eventKey="ruppee">₹ Ruppee</Dropdown.Item>
            </DropdownButton>  
        </div>
    );
};
export default Currency;


