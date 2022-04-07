//Personal.ts


class Personal {
    name: string;
    address: string;
    telephoneNumber: string;
    emailAddress: string;

    
    /**
     * 
     * @param name
     * @param address
     * @param telephoneNumber
     * @param emailAddress
     */
    constructor(name = '', address = '', telephoneNumber = '', emailAddress = '') {
        this.name = name;
        this.address = address;
        this.telephoneNumber = telephoneNumber;
        this.emailAddress = emailAddress;
    }

    /**
     * 
     * @param {Personal} personal
     */
    // 연산 - 산술X, 관계, 논리X
    isEqual(personal: Personal): boolean {
        let ret = false;

        if (this.name == personal.name && this.address == personal.address
            && this.telephoneNumber == personal.telephoneNumber && this.emailAddress == personal.emailAddress) {

            ret = true;

        }

        return ret;
    }

    /**
     * 
     * @param {Personal} personal
     */
    isNotEqual(personal: Personal): boolean {
        let ret = false;

        if (this.name != personal.name || this.address != personal.address || this.telephoneNumber != personal.telephoneNumber || this.emailAddress != personal.emailAddress) {
            ret = true;
        }

        return ret;
    }
}


export default Personal;