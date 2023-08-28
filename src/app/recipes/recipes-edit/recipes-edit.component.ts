import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
  id:number;
  recipeform:FormGroup;
  isSubmit=false;
  submitMessage='';


  constructor(private router: ActivatedRoute , private http:HttpClient) 
  { }

  ngOnInit() {
    this.initForm();
  }
  onclear(){
    this.recipeform.reset();
  }
  onclickreset(){
    this.recipeform.reset();
  }
   private initForm(){
    let recipename='';
    let recipedes='';
    let recipeing='';
    let recipeins='';
    this.recipeform=new FormGroup({
      'name':new FormControl(recipename, Validators.required),
      'description':new FormControl(recipedes, Validators.required),
      'ingredient':new FormControl(recipeing, Validators.required),
      'instruction':new FormControl(recipeins),

    });
   }
   submitdata(postdata:{name:string;description:string;ingredient:string;instruction:string;}){
    // send http request
    this.http.post('https://indianrecipebook-9be7f-default-rtdb.firebaseio.com/posts.json',postdata)
    .subscribe(responseData=>{
        console.log(responseData);
    });

    this.submitMessage='Submitted Successfully';
    this.isSubmit = true;
    setTimeout(()=>{
        this.isSubmit=false;
    },8000);

   }

}
