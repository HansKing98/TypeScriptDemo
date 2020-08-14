// TypeScript中数组类型的定义

// 一般数组类型的定义

// 现在我们可以定义一个最简单的数组类型，比如就是数字类型，那么就可以这么写：

const numberArr = [1, 2, 3]
// 这时候你把鼠标放在numberArr上面可以看出，这个数组的类型就是number类型。这是TypeScript通过类型推断自己推断出来的。 如果你要显示的注解，也非常简单，可以写成下面的形式。

const numberArr2: number[] = [1, 2, 3]
// 同样道理，如果你的数组各项是字符串，你就可以写成这样。

const stringArr3: string[] = ['a', 'b', 'c']
// 也就是说你可以定义任意类型的数组，比如是undefined。

const undefinedArr4: undefined[] = [undefined, undefined]
// 这时候问题来了，如果数组中有多种类型，比如既有数字类型，又有字符串的时候。那我们要如何定义那。 很简单，只要加个()，然后在里边加上|就可以了，具体看代码。

const arr: (number | string)[] = [1, 'string', 2]

// 数组中对象类型的定义
const xiaoJieJies: { name: string, age: Number }[] = [
    { name: '刘英', age: 18 },
    { name: '谢大脚', age: 28 }
]
// 类型别名(type alias)
type Lady = { name: string, age: Number };

const xiaoJieJies2: Lady[] = [
    { name: '刘英', age: 18 },
    { name: '谢大脚', age: 28 }
]