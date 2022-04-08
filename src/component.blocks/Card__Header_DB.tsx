import * as React from 'react';
import Card__Header from './Card__Header_Question';
import icon__moreMenu from '../icon_menu_more.png';

interface Props {
    folderName: string;
    stage: 1 | 2 | 3 | 4 | 5; // 전역변수로 STAGE_XXX 식으로 하는게 더 좋겠다.
}

class Card__Header_Db extends React.Component<Props> {


    render() {

        let dotMenu = null;
        if (this.props.stage > 2) {
            dotMenu = <span>+</span>;
        }

        return (
            <div className="Card__Header">
                <input className="Card__CheckBox" type="checkbox" />
                <i />
                <span>{this.props.folderName}</span>
                <img className="Card__MoreMenuIcon" src={icon__moreMenu} />
                {dotMenu}
            </div>
        )
    }
}

export default Card__Header_Db;