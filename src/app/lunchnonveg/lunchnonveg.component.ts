import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lunchnonveg',
    templateUrl: './lunchnonveg.component.html',
    styleUrls: ['./lunchnonveg.component.css']
})
export class LunchnonvegComponent implements OnInit {

    selectedrecipe?: any;
    recipelist = [{
        name: 'dahi chicken',
        description: 'Spicy, tangy and very flavourful dahi chicken ',
        imagepath: 'https://www.yummytummyaarthi.com/wp-content/uploads/2017/12/New-Picture-1-23.png',
        ingredient: 'Oil or Ghee - 5 tblsp,Cumin Seeds / Jeerakam - 1 tsp,Cinnamon / Pattai - 1 large piece,Onion - 2 large sliced thinly,Green Chillies - 3 slit,Ginger Garlic Paste - 2 tblsp,Yogurt / Thick Curd / Dahi - 1 cup,Chicken - 500 grams,Salt to taste,Turmeric Powder - 1 tsp + 1 tsp,Cumin Powder - 2 tsp,Chilli Powder - 2 tsp,Garam masala powder - 2 tsp,Kasuri Methi Leaves - 1 tblsp,Coriander leaves a handful chopped finely',
        instruction: 'Step1: Heat 2 tblsp oil in a pan, add chicken, along with salt and turmeric powder. Saute this on high heat till chicken is seared on all sides. Remove to a bowl. Set aside.',
        step1: 'Step2: In the same pan, add 3 more tblsp of oil, add cumin and cinnamon.',
        step2: 'Step3: Add onions, and saute till golden brown.',
        step3: 'Step4: Add green chillies and ginger garlic paste and saute till raw smell leaves.',
        step4: 'Step5: Now add in all masala powder and salt. Mix well.',
        step5: 'Step6: Add chicken back in and toss well with the masala.',
        step6: 'Step7: Add in dahi and mix well.Cover and simmer for 20 mins till chicken is done.',
        step7: 'Step8: Add kasuri methi leaves, coriander leaves and mix well.',
        step8: 'Serve.',
    },
    {
        name: 'butter chicken',
        description: 'Tender and juicy chicken thanks to a deliciously spiced yogurt marinade, Butter Chicken is ridiculously easy to make. The curry sauce is out of this world!',
        imagepath: 'https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-27.jpg',
        ingredient: '28 oz (800g) boneless and skinless chicken thighs or breasts cut into bite-sized pieces,1/2 cup plain yogurt,1 1/2 tablespoons minced garlic,1 tablespoon minced ginger (or finely grated),2 teaspoons garam masala,1 teaspoon turmeric,1 teaspoon ground cumin,1 teaspoon red chili powder,1 teaspoon of salt.For the sauce:2 tablespoons olive oil,2 tablespoons ghee (or 1 tbs butter + 1 tbs oil),1 large onion, sliced or chopped,1 1/2 tablespoons garlic, minced,1 tablespoon ginger, minced or finely grated,1 1/2 teaspoons ground cumin,1 1/2 teaspoons garam masala,1 teaspoon ground coriander,14 oz (400 g) crushed tomatoes,1 teaspoon red chili powder (adjust to your taste preference),1 1/4 teaspoons salt (or to taste),1 cup of heavy or thickened cream (or evaporated milk to save calories),1 tablespoon sugar,1/2 teaspoon kasoori methi (or dried fenugreek leaves)',
        instruction: 'Step1: In a bowl, combine chicken with all of the ingredients for the chicken marinade; let marinate for 30 minutes to an hour (or overnight if time allows).',
        step1: 'Step2: Heat oil in a large skillet or pot over medium-high heat. When sizzling, add chicken pieces in batches of two or three, making sure not to crowd the pan. Fry until browned for only 3 minutes on each side. Set aside and keep warm. (You will finish cooking the chicken in the sauce.)',
        step2: 'Step3: Heat butter or ghee in the same pan. Fry the onions until they start to sweat (about 6 minutes) while scraping up any browned bits stuck on the bottom of the pan.',
        step3: 'Step4: Add garlic and ginger and sauté for 1 minute until fragrant, then add ground coriander, cumin and garam masala. Let cook for about 20 seconds until fragrant, while stirring occasionally.',
        step4: 'Step5: Add crushed tomatoes, chili powder and salt. Let simmer for about 10-15 minutes, stirring occasionally until sauce thickens and becomes a deep brown red colour.',
        step5: 'Step6: Remove from heat, scoop mixture into a blender and blend until smooth. You may need to add a couple tablespoons of water to help it blend (up to 1/4 cup). Work in batches depending on the size of your blender.',
        step6: 'Step7: Pour the puréed sauce back into the pan. Stir the cream, sugar and crushed kasoori methi (or fenugreek leaves) through the sauce. Add the chicken with juices back into the pan and cook for an additional 8-10 minutes until chicken is cooked through and the sauce is thick and bubbling.',
        step7: 'Step8: Garnish with chopped cilantro and serve with fresh, hot garlic butter rice and fresh homemade Naan bread!',
    }
];

    displayinfo = false;
    next = false;
    food = '';
    Seraches = '';
    constructor() { }

    ngOnInit(): void {
    }
    onselect(recipelist: any): void {
        this.selectedrecipe = recipelist;
        this.displayinfo = false;
    }
    display() {
        if (this.next = true) {
            this.displayinfo = true;
        }
        else {
            this.displayinfo = false;
        }
    }
    onfilter() {
        this.Seraches = this.food;
    }

}
