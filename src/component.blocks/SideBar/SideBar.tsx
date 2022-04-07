import * as React from 'react';
import "./SideBar.css";

// props 목록을 정의합니다.
interface Props {
    className?: string;
    children: React.ReactNode;
}

export default function (props : Props) {
    return (
        <div className={"SideBar " + props.className}>
            {props.children}
        </div>
    )
}