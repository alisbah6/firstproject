import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinnernonveg',
  templateUrl: './dinnernonveg.component.html',
  styleUrls: ['./dinnernonveg.component.css']
})
export class DinnernonvegComponent implements OnInit {
    selectedrecipe?:any;
  recipelist=[{
    name:'nalli nihari ',
    description:'Nihari is a deliciously smooth flour based mutton stew of slow cooked in a myriad of spices. ',
    imagepath:'https://www.myweekendkitchen.in/wp-content/uploads/2015/08/mutton_nihari_masala_curry.jpg',
    ingredient:'1 kg  mutton , preferably shank portion (cut into 8-10 pieces),4 tbsp  Ghee/ Clarified butter,2 medium onions , finely sliced,1 tsp  ginger paste,1 tsp  garlic paste,Salt  to taste,2 tsp  coriander powder,1/2 tsp  turmeric powder,3 tbsp  wheat flour,3 tbsp  nihari masala,WHOLE SPICES TO MAKE YOUR OWN NIHARI MASALA FROM SCRATCH,1 tbsp cumin seeds,2 tsp fennel seeds,1 tsp soonth dry ginger,5-6 green cardamoms,2 black cardamoms,4-5 cloves,1 bay leaf,1 inch cinnamon stick,8-10 black peppercorns,1/4 tsp grated nutmeg',
    instruction:'Step1:To make Nihari Masala :To make your own Nihari masala from scratch, dry roast all the whole spices for the masala; cool; and grind them to a fine powder.',
    step1:'Step2: To make Nihari curry :Heat Ghee (you can use oil as well but ghee makes it tastier) in a deep bottom stock pot. Once the ghee is hot, add the sliced onions and fry till they start to turn brown.',
    step2:'Step3: Add mutton pieces, ginger paste, garlic paste, coriander powder, turmeric powder and salt. Mix well to coat the mutton in ghee and spices. Sauté for 5 mins.',
    step3:'Step4: Add the nihari masala and 8 cups of water. Mix well, cover and cook on very low heat for about 4 hours until the meat is tender. Keep checking in between. The way to know that the meat is cooked is when it breaks easily with a wooden spoon.',
    step4:'Step5: Dissolve wheat flour in half cup of water such that there are no lumps. Slowly add it to the gravy. Stir to mix it well in the gravy and let it simmer for another 10-15 mins till the gravy thickens.',
    step5:'Step6: Sprinkle some lime juice and garnish with ginger strips and fresh coriander leaves. Serve hot.',
},
{
    name: 'biryani',
    description: 'Everyones favourite',
    imagepath: 'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2017/06/18154434/181017biryani_01.jpg?fm=webp&w=750&h=500&dpr=1',
    ingredient:'1 cup boiled basmati rice,½ tsp mint leaves,Salt as required,2 tbsp refined oil,3 green cardamom,2 clove,2 onion,1 tsp turmeric,1 tbsp garlic paste,1 cup curd,2 tbsp coriander leaves,Water as required,1 tbsp ghee,600 gm chicken,1 tbsp garam masala powder,1 tsp saffron,1 tbsp bay leaf,1 black cardamom,1 tsp cumin seeds,4 green chillies,1 tbsp ginger paste,1 tsp red chilli powder,½ tbsp ginger,2 drops kewra,1 tbsp rose water',
    instruction:'To make biryani just like the best non-veg restaurant in Ahmedabad we start off with preparing saffron and kewra water. First of all, soak saffron in water to prepare saffron water and add drops of kewra water to make the kewra water.Meanwhile, heat refined oil to medium in a pan and add cumin seeds, bay leaf, green cardamom, cloves in it, and sauté for about a minute.',
    step1:'Then, add chopped onion and sauté it.',
    step2:'Sauté the onions until they are pink in colour. After they change the colour, add chicken into it. Along with the chicken goes green chillies, turmeric, salt to taste, ginger garlic paste, red chilli powder, and green chilli paste.',
    step3:'Mix well all of these for about 3-4 minutes. Once cooked, add the curd to it.',
    step4:'Now, add garam masala in it along with ginger, coriander and mint leaves. Then, add the waters we prepared in the beginning and also the rose water. Cook till the chicken gets tender.',
    step5:'After this, add 1 cup cooked rice and mix everything in a way that all the masala is spread evenly through the rice. Then again add some saffron water and pour some ghee over it. Cook for 15-20 minutes with a closed lid and garnish with 1 tbsp fried onions and coriander leaves to make it look like the best non-veg restaurant cooked dish.',
    step6:'The dish is ready to be served.',
}
];
  displayinfo=false;
  next=false;
  food='';
  Seraches='';

  constructor() { }

  ngOnInit(): void {
  }
  onselect(recipelist:any):void{
    this.selectedrecipe=recipelist;
    this.displayinfo=false;
  }
  display(){
    if(this.next=true){
      this.displayinfo=true;
    }
    else{
      this.displayinfo=false;
    }
  }
  onfilter(){
    this.Seraches=this.food;
  }

}
