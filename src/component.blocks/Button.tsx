import * as React from 'react';
import "./Button.css";

// props 목록을 정의합니다.
interface Props {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>; // 이벤트 핸들러. 밑의 onClick에 마우스를 대면 자료형이 나옵니다.
    color?: "green" | "grey"; // Literal type
}

class Button extends React.Component<Props> { // <> 안은 Template 문법입니다.

    render() {
        return (
            <button className= { "Button " } onClick = { this.props.onClick }> { this.props.children } </button> // props에 쓰이는 모든 것은 위의 interface Props에서 정의해줘야합니다.(children 제외)
        )
    }
}

export default Button;