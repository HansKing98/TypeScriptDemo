// TypeScript中的interface接口
const screenResume = (name: string, age: number, bust: number) => {
    age < 24 && bust >= 90 && console.log(name + '进入面试')
    age >= 24 || bust < 90 && console.log(name + '你被淘汰')
}

screenResume('大脚', 18, 89)

const getResume = (name: string, age: number, bust: number) => {
    console.log(name + '年龄是：' + age)
    console.log(name + '胸围是：' + bust)
}
getResume('大脚', 18, 94)

// 
// 程序开发中一直强调“代码重用”，两个方法用的类型注解一样，需要作个统一的约束。大上节课我们学了一个类型别名的知识可以解决代码重复的问题，这节课我们就学习一个更常用的语法接口（Interface）.
// 
interface Girl {
    name : string;
    age  : number;
    bust : number;
}

const screenResume3=( girl:Girl)=>{
    girl.age<24 && girl.bust>=90 && console.log(girl.name+'进入面试') 
    girl.age>24 || girl.bust<90  && console.log(girl.name+'你被淘汰')
}

const getResume3=( girl:Girl)=>{
    console.log(girl.name+'年龄是：'+girl.age)
    console.log(girl.name+'胸围是：'+girl.bust)
}
const girl={
    name:'大脚',
    age:18,
    bust:94
}

screenResume3(girl)
getResume3(girl)

// 但是不作强制要求，就是可选值吗。那接口如何定义那？其实typeScript已经为我们准备好了相应的办法，就是在:号前加一个?
// 比如把Girl的接口写成这样。

interface Girl {
    name : string;
    age  : number;
    bust : number;
    waistline ?: number;
}
// 然后我们再修改一下getResume方法，写成这样。

const getResume4=( girl:Girl)=>{
    console.log(girl.name+'年龄是：'+girl.age)
    console.log(girl.name+'胸围是：'+girl.bust)
    girl.waistline && console.log(girl.name+'腰围是：'+girl.waistline)
}
// 这时候在定义girl对象的时候，就可以写saistline（腰围），也可以不写了。