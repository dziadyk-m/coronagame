// take(2, ['foo', 'bar', 'baz']); // => ['foo', 'bar']
const take = (number: number, array: any[]) => array.slice(0, number);

// tail(["foo", "bar", "baz"]) // => ["bar", "baz"]
const tail = (array: any[]) => array.slice(1);

// head(["foo", "bar"]) // => "foo"
const head = (array: any[]) => array[0];

// last(["foo", "bar"]) // => "bar"
const last = (array: any[]) => array.slice(-1)[0];

// difference([1, 2, 3, 4, 5], [5, 2, 10]) // => [1, 3, 4]
const difference = (arr: any[], ...others: any[]) => {
    const combined = [].concat(...others);
    return arr.filter((el: any) => !combined.some(exclude => el === exclude));
};

// combine(["foo"], ["bar", "baz"], [1, 2]) // => ["foo", "bar", "baz", 1, 2]
const combine = (...arrays: any[]): any[] => [].concat(...arrays);

// Array.isArray((() => toArray(arguments))("foo", "bar")) // => true
const toArray = (() =>
    Array.from ? Array.from : (obj: any) => [].slice.call(obj))();

// min([10, 50, 30]) // => 10
const min = (arr: any) => Math.min(...arr);

// max([10, 50, 30]) // => 50
const max = (arr: any) => Math.max(...arr);

export {
    difference,
    combine,
    toArray,
    take,
    tail,
    head,
    last,
    min,
    max
};
