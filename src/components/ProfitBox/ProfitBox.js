import "./profitBox.css";

const ProfitBox = ({ profit = 0 }) => {
    return (
        <div className="profitBox">
            <p>Total Profit</p>
            <h3>Rs. {profit}</h3>
        </div>
    )
};

export default ProfitBox;
