# 스택

### 스택이란?

-   자료의 입출력이 한 방향에서만 이루어지는 구조

### 스택에 사용되는 용어

```
top: 데이터가 입출력되는 위치
push: 입력, top의 위치에 데이터를 입력하고 top을 증가
pop: 출력 및 삭제, top을 감소시키고 해당 위치의 데이터를 삭제한다.
(peek: 출력, top 위치의 데이터를 출력한다.)
```

### 구현

```js
class Stack {
	constructor() {
		this.arr = [];
		this.top = 0;
	}

	push(item) {
		this.arr[this.top++] = item;
	}

	pop() {
		if (this.top <= 0) return null;
		const result = this.arr.splice(--this.top, 1)[0];
		return result;
	}

	peek() {
		if (this.top <= 0) return null;
		const result = this.arr[this.arr.length - 1];
		return result;
	}
}

const stack = new Stack();

stack.push(1);
stack.push(2);
console.log(stack.arr); // [1, 2]
console.log(stack.pop(), stack.arr); // 2, [1]
console.log(stack.peek(), stack.arr); // 1, [1]
```
