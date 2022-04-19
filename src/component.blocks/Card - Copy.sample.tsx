import * as React from 'react';
import './Card.css';


/**
 * React + BEM 방식으로
 * 리액트 컴포넌트를 만드는 방법
 * 
 * Card 컴포넌트를 만들어 보자.
 * 
 * [순서 개요]
 * 
 * What => 생김새 => 특성 (<- 입력받을 것)
 * 
 * [What]
 * 1. 파일을 만든다 : src/component/blocks 안에 Card.tsx를 만든다.
 * 2. 클래스를 만든다 : React.Component를 상속하는 Card 클래스를 만든다.
 * 
 * [생김새]
 * 3. 구성요소를 만든다 : render메서드 오버라이드해서 JSX 구성하는 것을 말함.
 * 
 * [특성]
 * 3. Props, State 목록을 정한다 : 입력받을 속성들인 Props와 상태인 State의 자료형들을 정의한다.
 * 4. 클래스명을 구성한다. : 생성자에서.
 * 5. 클래스명을 넣는다.
 * */








/*************************** 아래는 풀어 쓴 방법 **********************************/

// [What]
// 1. 파일을 만든다 : src/component/blocks 안에 Card.tsx를 만든다.

// 2. 클래스를 만든다 : React.Component를 상속하는 Card 클래스를 만든다.
class Card extends React.Component<Props> {

    private className: string;





    
    constructor(props : Props) {
        super(props);

        // S!) 렌더링할 때 클래스명 바뀔 수 있나? (특히 modifier) 아니라면 생성자에서 하는데, 맞다면 render() 안에서 해야.
        
        // 3. 생성자 안에서 클래스명을 구성한다. (-> ClassyName 라이브러리 import 해야)(차후 만들 예정)

        //  3.1. 블록명(=컴포넌트명)은 필수로 지정
        this.className = "Card";

        // 3.2. 입력받은 className이 있다면 그대로 덧붙인다.
        if (props.className) {
            this.className += " " + props.className;
        }

        //  3.3. modifier와 관련된 것들이 있다면 덧붙인다.
        if (props.color) {
            // className += " " + "Card__" + props.elementName + ""
        }

        //  3.4. 그리드를 지정하는 것들이 있으면 덧붙인다.(col-3-of-4 등)


    }








    // [생김새]
    render() {
        return (
            // 4. 클래스명을 입력한다.
            <div className={this.className}>
                {this.props.header}
                {this.props.body}
                {this.props.footer}
            </div>
        )
    }
}






// [특성]
// 3. Props interface를 생성한다. (이름은 자유)
//   3.1. 자료형을 지정한다.
interface Props {

    // 구성요소
    header: React.ReactNode;
    body: React.ReactNode;


    // 3.2. 없어도 되는 것은 물음표를 붙인다.
    footer?: React.ReactNode;


    // 3.3. 여러가지 자료형이 가능하다면 |을 이용한다.
    // 3.4. 리터럴 자료형을 사용하면 가능한 목록을 지정할 수 있다.
    color?: 'white' | 'grey';


    className?: string;

}

export default Card;