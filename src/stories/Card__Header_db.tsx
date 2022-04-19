import * as React from 'react';

interface Props {
    folderName: string;
    progress: any; // 전역변수로 STAGE_XXX 식으로 하는게 더 좋겠다.
}

class Card__Header_Db extends React.Component<Props> {


    render() {

        let dotMenu = null;
        if (this.props.progress > 2) {
            dotMenu = <img src="icon_menu_more.png" />
        }

        return (
            <div className="Card__Header">
                <input className="Card__CheckBox" type="checkbox" />
                <img src="folder_icon.png" />
                <span>{this.props.folderName}</span>
                {dotMenu}
            </div>
        )
    }
}

export default Card__Header_Db;