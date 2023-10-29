import Proptypes from "prop-types";
import "./CurrencyInput.css";

function CurrencyInput(props) {
  return (
    <div className="group">
      <input
        type="text"
        value={props.amount}
        onChange={(ev) => props.onAmountChange(ev.target.value)}
      />
      <select
        value={props.currency}
        onChange={(ev) => props.onCurrencyChange(ev.target.value)}
      >
        {props.currencies.map((currency) => (
          <option value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
}
CurrencyInput.propTypes = {
  amount: Proptypes.number.isRequired,
  currency: Proptypes.string.isRequired,
  currencies: Proptypes.array,
  onAmountChange: Proptypes.func,
  onCurrencyChange: Proptypes.func,
};

export default CurrencyInput;
