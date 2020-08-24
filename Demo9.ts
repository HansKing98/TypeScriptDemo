// 一般是有自由发挥的空间的，所以这时候需要一些任意值，就是自己愿意写什么就写什么。这时候interface接口也是支持的。

interface Girl {
    name: string;
    age: number;
    bust: number;
    waistline?: number;
    [propname: string]: any;
    say(): string;
}

const girl2 = {
    name: '大脚',
    age: 18,
    bust: 94,
    waistline: 21,
    sex: '女',
    say() {
        return '欢迎光临，哈哈了'
    },
    teach() {
        return '我是一个老师'
    }
}

const getResumes = (girl: Girl) => {
    console.log(girl.name + '年龄是：' + girl.age)
    console.log(girl.name + '胸围是：' + girl.bust)
    girl.waistline && console.log(girl.name + '腰围是：' + girl.waistline)
    girl.sex && console.log(girl.name + '性别是：' + girl.sex)
}

// 接口和类的约束
// 我们都知道JavaScript从ES6里是有类这个概念的，类可以和接口很好的结合，我们先来看一个例子。下面的

class XiaoJieJie implements Girl {
    name = "刘英"
    age = 18
    bust = 90
    say() {
        return '欢迎光临 ，红浪漫洗浴！！'
    }
}

interface Teacher extends Girl {
    teach(): string
}

