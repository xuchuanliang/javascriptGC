var person={}
Object.defineProperty(person,"name",{
    configurable:false,
    writable:false,
    value:"snail"
})
console.log(person.name);//snail
person.name = "isnail";
delete person.name;//无法删除，因为configurable：false
console.log(person.name);//snail