const user = {
    name : 'name',
    age : 21 ,
    school : 'iset',
    sayName: function () {
        console.log(this);
}
};

user.sayName();