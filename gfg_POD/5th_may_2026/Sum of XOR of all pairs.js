class Solution {
    sumXORPairs(arr) {
        let n = arr.length;
        let total = 0;

        // Assume 32-bit integers
        for (let bit = 0; bit < 32; bit++) {
            let count1 = 0;

            for (let i = 0; i < n; i++) {
                if ((arr[i] & (1 << bit)) !== 0) {
                    count1++;
                }
            }

            let count0 = n - count1;

            total += count1 * count0 * (1 << bit);
        }

        return total;
    }
}