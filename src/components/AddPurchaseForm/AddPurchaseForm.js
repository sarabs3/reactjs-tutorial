import { useState } from 'react';

const initialFormState = {
    shareName: "",
    action: "buy",
    price: "",
    quantity: "",

};
const AddPurchaseForm = ({onSubmit}) => {
    const [formState, updateFormState] = useState(initialFormState);

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const { quantity, price } = formState;
        onSubmit({ ...formState, amount: parseFloat(quantity) * parseFloat(price) });
    };
    const handleChange = (e) => {
        formState[e.target.name] = e.target.value;
        updateFormState({ ...formState });
    };
    return (
        <form className="form" onSubmit={handleFormSubmit}>
            <div className="formItem">
                <label htmlFor="shareName">Share Name</label>
                <input
                    type="text"
                    placeholder="Share Name"
                    name="shareName"
                    className="inputField"
                    value={formState.shareName}
                    onChange={handleChange}
                />
            </div>
            <div className="formItem">
                <label htmlFor="action">Action</label>
                <select
                    name="action"
                    className="inputField"
                    value={formState.action}
                    onChange={handleChange}
                >
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                </select>
            </div>
            <div className="formItem">
                <label htmlFor="price">Price</label>
                <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    className="inputField"
                    value={formState.price}
                    onChange={handleChange}
                />
            </div>
            <div className="formItem">
                <label htmlFor="quantity">Quantity</label>
                <input
                    type="text"
                    placeholder="Quantity"
                    name="quantity"
                    className="inputField"
                    value={formState.quantity}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
};

export default AddPurchaseForm;
