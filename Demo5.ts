// 简单类型定义
function getTotal(one: number, two: number) {
    return one + two
}

const total = getTotal(1, 2)

// 函数无返回值时定义方法
function sayHello() {
    console.log('hello world')
}

function sayHello2(): void {
    console.log('hello world')
}

// never返回值类型
// 一个函数是永远也执行不完
function errorFuntion(): never {
    throw new Error()
    console.log('Hello World')
}

// 一直循环
function forNever(): never {
    while (true) { }
    console.log('Hello JSPang')
}

// 函数参数为对象(解构)时
function add({ one, two }) {
    return one + two
}

const total2 = add({ one: 1, two: 2 })

function add2 ({one , two } : {one:number, two:number}) :number{
    return one + two
}

const three = add2({one:1,two:2})