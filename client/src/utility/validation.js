  /**
 * Method for validating password 
 * @param { password }
 * @returns { boolean }
 * 
 */
   const  verifyCorrectPassword = (password) => {
        if (typeof password === 'string') {
            //Contains atleast digit 
            let regxD = /([0-9])+/g;
            let regxW = /([a-z])+/g;
            let regxWC = /([A-Z])+/g;
            let specialChar = '~!@#$%^&*()_+'.split('')
            let isSpecial = false
            let cond1 = !password.match(regxD)
            let cond2 = !password.match(regxW)
            let cond3 = !password.match(regxWC)
            specialChar.map(car => {
               
                if (password.includes(car)) {
                    isSpecial = true
                }
            })
            if (password.length < 6 || !isSpecial || cond1 || cond2 || cond3) {
                
                return false
            } else {
                
                return true
            }
        } else {
            throw new Error('Type error ')
        }
    }

    export default verifyCorrectPassword ;