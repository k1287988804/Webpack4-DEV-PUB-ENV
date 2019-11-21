import $ from 'jquery'
// import './../css/index.less'
import './../css/index.css'


$(function(){
    $('li:odd').css('background-color','blue');
    $('li:even').css('background-color','red');
});


class Person{
	static sayFuck(){
		console.log("Fuck you");
	}

	constructor(name,age,sex){
		this.name = name;
		this.age = age;
		this.sex = sex;
	}
	sayHi(){
		console.log("你好，我是:"+this.name);
	}
}
class Student extends Person{
	constructor(name,age,sex,score){
		super(name,age,sex);
		this.score = score;
	}
}

var xiaowang = new Student('xiaowang',17,'male',98);
xiaowang.sayHi();
Person.sayFuck();

