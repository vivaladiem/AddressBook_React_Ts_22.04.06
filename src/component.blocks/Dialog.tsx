import * as React from 'react';
import './Dialog.css';

interface Props {
    className: string;
    legend: string;
}

interface State {

}

class Dialog extends React.Component<Props, State> {

    render() {
        return (
            <fieldset className={"Dialog " + this.props.children}>
                <legend className="Dialog__legend">{this.props.legend}</legend>
                {this.props.children}
            </fieldset>
        )


    }

}

export default Dialog;