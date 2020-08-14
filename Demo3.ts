// 基础静态类型
const count: number = 918;
const myName: string = 'hans';

// 对象类型
const xiaoJieJie: {
    name: string,
    age: number
} = {
    name: '小红',
    age: 18
}
console.log(xiaoJieJie.name)

const xiaoJieJies: String[] = ['谢大脚', '刘英', '小红']

class Person { }
const dajiao: Person = new Person()

const jianXiaoJieJie: () => string = () => { return '大脚' }

// 对象类型
// 数组类型
// 类类型
// 函数类型