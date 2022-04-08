import * as React from 'react';
import './Card.css';
import Card__Header from './Card__Header_Question';



class Card extends React.Component<Props> {

    static stage = { 1: "정보입력중", 2: "변환중", 3: "변환완료", 4: "추가변환중" };
    private className: string;
    private cardClassName: string;



    constructor(props : Props) {
        super(props);

        
        this.className = "Card";
        this.cardClassName = '';

        if (props.className) {
            this.className += " " + props.className;
        }

    }






    render() {
        return (
            <div className={"Card"
                + " " + this.props.className
                
            }>
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