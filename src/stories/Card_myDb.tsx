import React from 'react';
import Card from './Card';
import Card__Header_db from './Card__Header_db';
import Card__Footer_db from './Card__Footer_db';

class Card_myDb extends React.Component<Props> {
    
    render() {
        return(
            <Card
            header={<Card__Header_db 
                folderName={this.props.folderName} 
                progress={this.props.progress} />}
            body={
                <div className="Card__Body">
                    <h3>{this.props.title}</h3>
                    <img src={this.props.thumbnail} />
                </div>
            }
            footer={
                <Card__Footer_db 
                progress={this.props.progress} 
                registeredDate={this.props.registeredDate} />
            }
            />
        )
    }
}

interface Props {
    folderName: string;
    title: string;
    thumbnail: string;
    registeredDate: string;
    progress: any;
}

export default Card_myDb;