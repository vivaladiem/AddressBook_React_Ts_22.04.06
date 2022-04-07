import * as React from 'react';
import './InputForm.css';

interface Props {
    onInputChanged?: (value: string) => void; // onInputChanged ?: 에서 ?는 없어도 됨을 뜻합니다. // 자료형이 함수임을 가리킵니다.
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