import * as React from 'react';
import './Card.css';
import Card__Header from './Card__Header_question';
import ClassyName from '../common/ClassyName';



class Card extends React.Component<Props> {

    static progress = { 1: "정보입력중", 2: "변환중", 3: "변환완료", 4: "추가변환중" };

    render() {
        let cardCn = new ClassyName("Card");
        if (this.props.className) {
            cardCn.externalClassName(this.props.className);
        }

        return (
            <div className={cardCn.getResult()}>
                {this.props.header}
                {this.props.body}
                {this.props.footer}
            </div>
        )
    }

}




interface Props {

    // 구성요소
    header: React.ReactNode;
    body: React.ReactNode;
    footer?: React.ReactNode;

    color?: 'white' | 'grey';


    className?: string;

}

export default Card;