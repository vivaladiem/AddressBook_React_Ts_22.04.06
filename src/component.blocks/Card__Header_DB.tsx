import * as React from 'react';
import Card__Header from './Card__Header_Question';


interface Props {
    folderName: string;
    stage: 1 | 2 | 3 | 4 | 5; // 전역변수로 STAGE_XXX 식으로 하는게 더 좋겠다.
}

class Card__Header_Db extends React.Component<Props> {
    render() {
        return (
            <div className="Card__Header">
                <input type="checkbox" />
                <i />
                <span>{this.props.folderName}</span>
                <i />
                {this.props.stage > 2 ? <span>+</span> : null}
            </div>
        )
    }
}

export default Card__Header_Db;