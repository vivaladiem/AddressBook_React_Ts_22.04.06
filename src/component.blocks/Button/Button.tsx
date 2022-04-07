import * as React from 'react';
import "./Button.css";

// props 목록을 정의합니다.
interface Props {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    color?: "green" | "grey";
}

class Button extends React.Component<Props> {

    render() {
        return (
            <button className= { "Button " } onClick = { this.props.onClick }> { this.props.children } </button>
        )
    }
}

export default Button;