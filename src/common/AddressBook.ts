//AddressBook.ts
import Personal from './Personal';

class AddressBook {
    private personals : Personal[]
    private length : number

  
    constructor() {
        this.personals = [];
        this.length = 0;
    }

    /**
     * 
     * @param name
     * @param address
     * @param telephoneNumber
     * @param emailAddress
     * 이름 : record
     * 출력 : 위치
     * 기능 : 개인을 기재한다.
     */
    record(name: string, address: string, telephoneNumber: string, emailAddress : string) : number {
        const length = this.personals.push(new Personal(name, address, telephoneNumber, emailAddress));
        const index = length - 1;
        this.length++;

        return index;
    }

    /**
     * 
     * @param name
     * 이름 : find
     * 출력 : 위치들
     * 기능 : 성명으로 중복을 허용해서 찾는다.
     */
    find(name : string) : number[] {
        let indexes: number[] = [];

        let i = 0;
        while (i < this.length) {
            if (this.personals[i].name == name) {
                indexes.push(i);
            }
            i++;
        }

        return indexes;
    }

    /**
     * 
     * @param {int} index
     * @param {string} address
     * @param {string} telephoneNumber
     * @param {string} emailAddress
     * 이름 : correct
     * 출력 : index
     * 기능 : 개인의 정보를 고친다.
     */
    correct(index : number, address : string, telephoneNumber : string, emailAddress : string) : number {
        this.personals[index].address = address;
        this.personals[index].telephoneNumber = telephoneNumber;
        this.personals[index].emailAddress = emailAddress;

        return index;
    }

    /**
     * 
     * @param index
     * 이름 : erase
     * 출력 : 지운 위치
     * 기능 : 위치의 개인을 지운다.
     */
    erase(index : number) : number {
        let newPersonals = [];

        let i = 0;
        let j = 0;
        while (j < index) {
            newPersonals[i] = this.personals[i];
            i++;
            j++;
        }
        j++;
        while (j < this.length) {
            newPersonals[i] = this.personals[j];
            i++;
            j++;
        }

        this.personals = newPersonals;

        this.length--;

        index = -1;

        return index;
    }

    /**
     * 이름 : arrange
     * 출력 : 없음
     * 기능 : 개인의 성명을 기준으로 오름차순 정렬한다.
     * 
     */
    arrange() {
        this.personals.sort(this.compare);
    }


    getAt(index : number) : Personal {

        return this.personals[index];
    }

    getLength() : number {
        return this.length;
    }


    compare(one : Personal, other : Personal) : number {
        let ret;

        if (one.name > other.name) {
            ret = 1;
        } else if (one.name == other.name) {
            ret = 0;
        } else {
            ret = -1;
        }

        return ret;
    }



}

export default AddressBook;