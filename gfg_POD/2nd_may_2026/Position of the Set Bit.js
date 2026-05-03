/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    findPosition(n) {
        // code here
        if(n<=0) return -1;
            
            if((n&(n-1))!== 0) return -1;
            
            let position = 1;
            
            while(n>1){
                n = n>> 1 ;
                position++;
                
            }
            
            return position;
    }
}
