import * as React from 'react';
import './Card.css';
import Card__Header from './Card__Header_Question';


/**
 * React + BEM 방식으로
 * 리액트 컴포넌트를 만드는 방법
 * 
 * Card 컴포넌트를 만들어 보자.
 * 
 * [순서 개괄]
 * 
 * 1. src/component/blocks 안에 Card.tsx를 만든다.
 * 2. React.Component를 상속하는 Card 클래스를 만든다.
 * 3. props로 입력받을 것들을 정의한다.
 * 4. 클래스명을 구성한다.
 * 
 * */




/*************************** 아래는 풀어 쓴 방법 **********************************/

// 1. src/component/blocks 안에 Card.tsx를 만든다.


// 2. React.Component를 상속하는 Card 클래스를 만든다.
class Card extends React.Component<Props> {

    // 생성자를 만든다.
    constructor(props : Props) {
        super(props);

        
        // 3. 생성자 안에서 클래스명을 구성한다. (-> ClassyName 라이브러리 import 해야)(차후 만들 예정)

        //  3.1. 블록명(=컴포넌트명)은 필수로 지정
        let className = "Card";

        // 3.2. 입력받은 className이 있다면 그대로 덧붙인다.
        if (props.className) {
            className += " " + props.className;
        }

        //  3.3. modifier와 관련된 것들이 있다면 덧붙인다.
        if (props.color) {
            // className += " " + "Card__" + props.elementName + ""
        }

        //  3.4. 그리드를 지정하는 것들이 있으면 덧붙인다.(col-3-of-4 등)



    }

    
    render() {
        return (
            // 4. 클래스명을 입력한다.
            <div className="Card">
                {this.props.header}
                {this.props.body}
                {this.props.footer}
            </div>
        )
    }
}


// 3. Props interface를 생성한다. (이름은 자유)
interface Props {

    // 3.1. 자료형을 지정한다.
    header: React.ReactNode;
    body: React.ReactNode;


    // 3.2. 없어도 되는 것은 물음표를 붙인다.
    footer?: React.ReactNode;

    // 3.3. 여러가지 자료형이 가능하다면 |을 이용한다.
    // 3.4. 리터럴 자료형을 사용하면 가능한 목록을 지정할 수 있다.
    color?: 'white' | 'grey';




    //children: any;// children 방식보다 body로 지정하는게 낫겠다.
    //header: Card__Header; // <Card__Header>를 하면 Card__Header형이 나오는게 아니라, ReactElement (->Element) 가 나오는 것이다.


    className: string;

}

export default Card;