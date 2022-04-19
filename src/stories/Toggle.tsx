//Toggle.tsx

import * as React from 'react';
import "./Toggle.css";

class Toggle extends React.Component<Props> {

    label: {};

    constructor(props: Props) {
        super(props);

        this.label = {
            false: "OFF",
            true: "ON"
        }; // 나중에 state 방식으로 적용.

}

    render() {
        return (
            <div className="Toggle">
                <span className="Toggle__Label">
                    ON
                </span>
                <div className="Toggle__Switch"/>
            </div>

        )
    }
}

interface Props {
    state: boolean;
}

export default Toggle;

