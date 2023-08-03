function Person(name) {
  this.testNum = 123;
  this.testName = name;
  return this;
}

var John = new Person('John');

//透過Person的prototype新增方法
Person.prototype.getName = function () {
  return this.testName;
};
//顯示Person的prototype
console.log(Person.prototype === John.__proto__);
console.log(John.__proto__);

//調用Person的getName()方法
console.log(John.getName());

var test = new Person('test');

console.log(test.getName());

//Object.create()的polyfill，建構testObj()物件為prototype
Obj = testObj = function () {
  this.test1 = 131;
  this.gettest1 = function () {
    return this.test1;
  };
};
F.fn = F.prototype = new testObj();

function F(test) {
  this.test = test;
}

var a = new F('test1223');
F.fn.getTest = function () {
  return this.test;
};
console.log(F.fn);
console.log(Obj.prototype);
/*
F.prototype.getString = function(){
    return this.test
}
console.log(a.getString())
*/
