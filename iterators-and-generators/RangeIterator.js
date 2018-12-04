// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

/**
 * Exemplo de Iterator.
 *
 * Usage:
 *   const iter = new RangeIterator(1, 3);
 *   console.log(iter.next().value); // 1
 *   console.log(iter.next().value); // 2
 *   console.log(iter.next().value); // 3
 *   console.log(iter.next().value); // undefined
 */
class RangeIterator {
	
	constructor(start, end) {
		this.start = start;
		this.end = end;
		this.current = start;
	}

	/**
	 * next precisa retornar:
	 *   {value: ..., done: false}, caso exista um próximo valor
	 *   {done: true}, caso todos os valores já tenham sido iterados
	 */
	next() {
		return (this.current > this.end) ? {done: true} : {value: this.current++, done: false};
	}
}

/**
 * Exemplo de Generator.
 *
 * Usage:
 *   for (let x of range(1, 3)) {
 *     console.log(x);
 *   }
 */
function* range(start, end) {
	while(start <= end) {
		yield start++;
	}
}



module.exports = {
	RangeIterator,
	range
};

