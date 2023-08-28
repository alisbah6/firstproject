export class recipelist{
  public name:string;
  public description:string;
  public imagepath:string;
  public ing:string;
  public instruct:string;

constructor(name:string, description:string, imagepath:string,ing:string,instruct:string){
  this.name=name;
  this.description=description;
  this.imagepath =imagepath;
  this.ing=ing;
  this.instruct=instruct;
  }
}
