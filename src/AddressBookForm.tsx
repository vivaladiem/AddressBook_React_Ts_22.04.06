import AddressBook from './common/AddressBook';
import React from 'react';
import Dialog from './component.blocks/Dialog';
import InputForm from './component.blocks/InputForm';
import Button from './component.blocks/Button';
import SideBar from './component.blocks/SideBar';
import Card from './component.blocks/Card';
import Card__Header_Db from './component.blocks/Card__Header_Db';
import image from "./typo_img01.png";
import Card__Footer_db from './component.blocks/Card__Footer_db';

interface Props {

}

interface State {

}

class AddressBookForm extends React.Component<Props, State> {

    constructor(props : Props) {
        super(props);

        this.state = {
            name: '',
            address: '',
            telephoneNumber: '',
            emailAddress: ''
        }

        this.onNameChanged = this.onNameChanged.bind(this);
        this.onAddressChanged = this.onAddressChanged.bind(this);
        this.onTelephoneNumberChanged = this.onTelephoneNumberChanged.bind(this);
        this.onEmailAddressChanged = this.onEmailAddressChanged.bind(this);

    }


    onNameChanged(name : string) {
        this.setState({
            name: name
        })
    }

    onAddressChanged(address : string) {
        this.setState({
            address: address
        })
    }

    onTelephoneNumberChanged(telephoneNumber : string) {
        this.setState({
            telephoneNumber: telephoneNumber
        })
    }

    onEmailAddressChanged(emailAddress : string) {
        this.setState({
            emailAddress: emailAddress
        })
    }

    onRecordButtonClicked() {
        alert("기재하기 버튼 클릭");
    }

    render() {
        return (
            <div className="AddressBookForm">
                
                <Card
                    header={<Card__Header_Db stage={2} folderName="폴더1" />}
                    body={
                        <div className="Card__Body">
                            <img src={image} />
                        </div>
                    }

                    footer={<Card__Footer_db progress={4} registeredDate="2022-04-08" />} 
                />
            </div>
        )
    }
}

export default AddressBookForm;

/*
<div className="Article">
                    <Dialog className="Article__Dialog" legend="개인">
                        <InputForm label={`성     명`} size="s" onInputChanged={this.onNameChanged}/>
                        <InputForm label={`주     소`} size="l" onInputChanged={this.onAddressChanged}/>
                        <InputForm label={`전화  번호`} size="m" onInputChanged={this.onTelephoneNumberChanged}/>
                        <InputForm label={`이메일주소`} size="l" onInputChanged={this.onEmailAddressChanged} />
                    </Dialog>
                </div>
                <SideBar>
                    <Button className="SideBar__Button">기재하다</Button>
                    <Button className="SideBar__Button" color="grey" >찾다</Button>
                    <Button className="SideBar__Button">고치다</Button>
                    <Button className="SideBar__Button">정리하다</Button>
                </SideBar>

*/