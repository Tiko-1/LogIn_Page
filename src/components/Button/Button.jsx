import React from 'react';
import './Button.css';

function Button(props) {
	const { type, children, ...restProps } = props;
	return (
		<button className="Button__btn" type={type} {...restProps}>
			{children}
		</button>
	);
}

export default Button;
