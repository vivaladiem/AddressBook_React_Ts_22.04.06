import * as React from 'react';
import Button from './Button';


class Card__Footer_db extends React.Component<Props, State> {

    static progressMessage = { 1: "정보입력중", 2: "정보입력완료", 3: "변환중", 4: "변환완료", 5: "추가변환중", 6: "추가변환완료"};


    onDownloadButtonClicked(event: React.MouseEvent) {
        // 원본 파일을 다운로드한다.
        alert("원본 파일 다운로드 페이지로 이동");
    }

    onTransformedFileDownloadButtonClicked(event: React.MouseEvent) {
        // 변환 파일을 다운로드한다.
        alert("변환 파일 다운로드 페이지로 이동");
    }

    render() {


        // 도움말 버튼을 정의합니다.
        let helperButton;
        if (this.props.progress == (1 | 3 | 5)) {
            helperButton = <img className="Card__HelperButton" src="./icon_question_circle2.svg" />
        }

        // 버튼을 정의합니다. // 이렇게밖에 안되나...? 개선 고민해보자.
        let buttons;
        if (this.props.progress == 1) {
            buttons = <Button size="l" color="grey">문제선택 및 결제</Button>
        }
        else if (this.props.progress == 2) {
            buttons = <Button size="l" color="green">문제선택 및 결제</Button>
        }
        else if (this.props.progress == 3) {
            buttons =
                <div>
                    <Button color="green" onClick={this.onDownloadButtonClicked}>원본 파일 다운로드</Button>
                    <Button color="grey">변환 파일 다운로드</Button>
                </div>
        }
        else if (this.props.progress == 4) {
            buttons =
                <div>
                    <Button color="green" onClick={this.onDownloadButtonClicked}>원본 파일 다운로드</Button>
                    <Button color="green" onClick={this.onTransformedFileDownloadButtonClicked}>변환 파일 다운로드</Button>
                </div>
        }
        else if (this.props.progress == 5) {
            buttons =
                <div>
                    <Button color="green" onClick={this.onDownloadButtonClicked}>원본 파일 다운로드</Button>
                    <Button color="blue">변환 파일 다운로드</Button>
                </div>
        }



        return (
            <div className="Card__Footer">
                <div className="Card__MetaInfo">
                    <div className="Card__RegisteredDateBox">
                        <span className="Card__RegisteredDateLabel">등록일</span>
                        <span className="Card__RegisteredDate">{this.props.registeredDate}</span>
                    </div>
                    <div className="Card__ProgressMessageBox">
                        <span className="Card__RegisteredDateLabel">진행상태</span>
                        <span className="Card__ProgressMessage">{Card__Footer_db.progressMessage[this.props.progress]}</span>
                    </div>
                </div>
                {helperButton}
                {buttons}
            </div>
        );
    }
}

interface Props {
    progress: 1 | 2 | 3 | 4 | 5;
    registeredDate: string;
}

interface State {
}

export default Card__Footer_db;