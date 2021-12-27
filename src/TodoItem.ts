export class TodoItem {
    public id: number;
    public name: String;
    public publish: Boolean;

    public constructor(id: number, name: String, publish: Boolean) {
        this.id = id;
        this.name = name;
        this.publish = publish
    }

    public printDetail() : void{
          console.log(` ${this.id } \t ${this.name} \t  ${this.publish}`)
    }
}