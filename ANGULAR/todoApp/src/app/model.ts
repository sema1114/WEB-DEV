export class Model{
    user;
    items;

    constructor(){
    this.user= 'Sema';
    this.items=[
              new TodoItem("Spor",true),
              new TodoItem("Kahvaltı",false),
              new TodoItem("Kitap Okumak",true),
              new TodoItem("Sinema",false),


    ];

    }
}

export class TodoItem{
description;
action;

constructor(description,action){
    this.description=description;
    this.action=action;
}

}
