import { useState } from 'react';

const initialFormState = {
    price: "",
    quantity: "",

};

const SellTradeForm = ({ submit }) => {
    const [formState, updateFormState] = useState(initialFormState);

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const {quantity, price} = formState;
        submit({ ...formState, amount: quantity * price });
    };
    const handleChange = (e) => {
        formState[e.target.name] = e.target.value;
        updateFormState({ ...formState });
    };
    return (
        <div>
            <h4>Sell Trade Record</h4>
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="formItem">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        type="text"
                        name="quantity"
                        className="inputField"
                        placeholder="Quantity"
                        value={formState.quantity}
                        onChange={handleChange}
                    />
                </div>
                <div className="formItem">
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        name="price"
                        className="inputField"
                        placeholder="Price"
                        value={formState.price}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default SellTradeForm;
