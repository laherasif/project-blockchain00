export class TodoItem {
    public constructor( public id: number, public name: String, public publish: Boolean) {
    }
    printDetail() : void{
          console.log(` ${this.id } \t ${this.name} \t  ${this.publish}`)
    }
}