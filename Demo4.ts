// type annotation 类型注解
let cnt: number;
cnt = 123;


// type inferrence 类型推断
const one = 1;
const two = 2;
const three1 = one + two

function getTotal1(one: number, two: number) {
    return one + two
}

const total1 = getTotal(1, 2)

const XiaoJieJie = {
    name:'刘英',
    age:18
}