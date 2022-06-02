import './Button.css';
import PropTypes from 'prop-types';

function Button({ text = '' }) {
    return (
        <button className={'button'}>{ text }</button>
        
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}
export default Button;

