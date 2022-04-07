import AddressBook from './common/AddressBook';
import React from 'react';
import Dialog from './component.blocks/Dialog/Dialog';
import InputForm from './component.blocks/InputForm/InputForm';
import Button from './component.blocks/Button/Button';
import SideBar from './component.blocks/SideBar/SideBar';


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
            </div>
        )
    }

}

export default AddressBookForm;