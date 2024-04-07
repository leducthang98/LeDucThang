// Simple and efficient with O(n) time complexity and O(1) space complexity. 
function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Most efficient with O(1) time complexity and space complexity.
function sum_to_n_b(n: number): number {
    return (n * (n + 1)) / 2;
}

// Efficient but potentially less so due to stack depth concerns for very large n, with O(n) time complexity and O(n) space complexity.
function sum_to_n_c(n: number): number {
    if (n === 0) {
        return 0;
    }
    return n + sum_to_n_c(n - 1);
}

console.info('sum_to_n_a', sum_to_n_a(5));
console.info('sum_to_n_b', sum_to_n_a(5));
console.info('sum_to_n_c', sum_to_n_a(5));