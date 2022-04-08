import * as React from 'react';
import "./Button.css";

// props 목록을 정의합니다.
interface Props {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    color?: "green" | "grey" | "blue";
}

class Button extends React.Component<Props> {



    render() {

        let className = "Button";
        if (this.props.color) {
            className += " Button--color--" + this.props.color;
        }

        return (
            <button className= { className } onClick = { this.props.onClick }> { this.props.children } </button> // props에 쓰이는 모든 것은 위의 interface Props에서 정의해줘야합니다.(children 제외)
        )
    }
}

export default Button;