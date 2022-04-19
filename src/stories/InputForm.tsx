import * as React from 'react';
import './InputForm.css';
import ClassyName from '../common/ClassyName';

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

        let inputFormCn = new ClassyName("InputForm");

        let inputFormLabelCn = new ClassyName("InputForm__Label");

        let inputFormInputCn = new ClassyName("InputForm__Input");

        if (this.props.size) {
            inputFormInputCn.modifier("size", this.props.size);
        }

        // classyName("InuptForm__Input").modifier("size", this.props.size); // "InputForm__Input InputForm__Input--size--s" (size is set when this.props.size exist)

        // classyName("InputForm").element("Input").modifier(this.props.color); // (this.props.color = green) // result : "InputForm__Input InputForm__Input--green"

        return (
            <div className={inputFormCn.getResult()}>
                <span className={inputFormLabelCn.getResult()}> { this.props.label } </span>
                <input className={inputFormInputCn.getResult()} onChange = { this.onInputChanged } />
            </div>
        )
    }
}

export default InputForm;