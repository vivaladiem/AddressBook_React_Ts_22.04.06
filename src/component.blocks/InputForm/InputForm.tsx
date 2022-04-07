import * as React from 'react';
import './InputForm.css';

interface Props {
    onInputChanged?: (value: string) => void;
    label?: string;
    size?: string;
}


class InputForm extends React.Component<Props> {

    constructor(props : Props) {

        super(props);

        this.onInputChanged = this.onInputChanged.bind(this);
    }

    onInputChanged(event: React.ChangeEvent<HTMLInputElement>) {
        /*
        this.setState(prevState => {
            text: event.target.value
        })
        */

        if (this.props.onInputChanged != undefined) {
            this.props.onInputChanged(event.target.value);
        }
    }

    render() {
        return (
            <div className= "InputForm" >
                <span className="InputForm__Label" > { this.props.label } </span>
                <input className={`InputForm__Input InputForm__Input--size--${this.props.size}`} onChange = { this.onInputChanged } />
            </div>
        )
    }
}

export default InputForm;