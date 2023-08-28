import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-breakfastnonveg',
    templateUrl: './breakfastnonveg.component.html',
    styleUrls: ['./breakfastnonveg.component.css']
})
export class BreakfastnonvegComponent implements OnInit {
    selectedrecipe?: any;
    recipelist = [{
        name: 'boiled egg',
        description: 'Best Healthy Food',
        imagepath: 'https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg?auto=compress&cs=tinysrgb&w=600',
        ingredient: 'Egg',
        instruction: 'Step1: Take a pot and fill water in it',
        step1: 'Step2: Add eggs to water and leave them for 10-15 mins on sim flame ',
        step2: 'Finally you have your boiled eggs ready',
        id: 'nonveg'
    },
    {
        name: 'tandoori chicken sandwich',
        description: 'For Chicken Lovers',
        imagepath: 'https://drop.ndtv.com/albums/COOKS/these-5-non-veg_637891537843222204/637891537879934948.jpeg',
        ingredient: '250 g boneless chicken cut in strips,2-3 teaspoon tandoori spice mix,2 tablespoon yogurt,1 tablespoon lemon juice,½ teaspoon paprika powder,2 tablespoon oil,FOR SPICY MAYO DRESSING:4 tablespoon mayonnaise,2 tablespoon red chili sauce,1 tablespoon vinegar,½ teaspoon garlic powder,1 teaspoon fresh/dried parsley,FOR ASSEMBLING:6 slices sandwich bread,2 hard boiled eggs sliced,1 tomato sliced,cheddar cheese slices as required,salad leaves a handful,salt & pepper to taste',
        instruction: 'Step1: Marinate the chicken with tandoori spice mix, yogurt, lemon juice and paprika powder. Fry it in oil until fully cooked and slightly charred.',
        step1:'Step2:Make the mayo dressing by mixing all its ingredients together.',
        step2:'Step3:Take a slice of bread. I used whole-wheat, you can use any sandwich bread. Add slices of cheese, tandoori chicken, drizzle the spicy mayo sauce, then place the tomato slices.',
        step3:'Step4:Top this with another piece of bread. Add the sliced boiled eggs, more mayo dressing, a dash of salt and crushed black pepper, some salad leaves, another slice of cheddar cheese (optional) and add the final slice of bread.',
        step4:'Step5:Cut it diagonally, and secure each sandwich with toothpick or cocktail sword. Serve with fries/crisps.',
        id: 'nonveg'
    },
    {
        name: 'mutton keema paratha',
        description: 'Paratha With A Twist',
        imagepath: 'https://www.licious.in/blog/wp-content/uploads/2022/04/Keema-Paratha_24241-min-1-750x750.jpg',
        ingredient: 'For the Dough, you will need Whole Wheat Flour, Vegetable Oil and Salt.,For the Stuffing, Minced Mutton is cooked in oil along with chopped onions, ginger-garlic paste, coriander powder, red chili powder, turmeric powder, garam masala powder, salt, and roasted cumin powder.',
        instruction: 'Step1: For the Dough:Mix 2 cups of whole wheat flour, ½ teaspoon salt, and 2 tablespoon vegetable oil in a large bowl. Mix the ingredients together with your fingers to make a crumbly mixture.',
        step1:'Step2: Add little water and make a soft dough. The quantity of water depends on the quality of the flour. Keep adding little by little and knead until the dough is soft.',
        step2:'Step3: Knead the dough for 2-3 minutes until it is soft and smooth. Cover the bowl with a kitchen towel and keep aside for 20 minutes.',
        step3:'Step4: For the filling:Heat 2 tablespoon vegetable oil in a heavy bottom pan.',
        step4:'Step5: Add ½ cup chopped onion and fry till translucent. It will take 2-3 minutes on medium-high heat. Keep stirring it frequently.',
        step5:'Step6: Add 1 teaspoon ginger and garlic paste and fry for another minute. Now add 300 g mutton mince and fry on high heat for 3-4 minutes. Keep stirring frequently',
        step6:'Step7: Add 1 teaspoon coriander powder, 1 teaspoon red chili powder, ½ teaspoon turmeric powder, ½ teaspoon garam masala powder, salt to taste, and ½ teaspoon roasted cumin powder, and mix everything well.',
        step7:'Step8: Add 1 cup of water and cover the pan.Cook on low heat for 40-45 minutes. Remove the lid. Cook the mutton on high heat till it is completely dry. Keep stirring continuously',
        step8:'Step9: Add 1 tablespoon lime juice and 2 tablespoon chopped coriander and mix well. Remove the pan from heat and cool the filling completely.',
        step9:'Step10: For assembly:Divide the dough into lemon size balls. Dust the balls with some dry flour and roll to make a 4-inch circle',
        step10:'Step11: Keep 2 tablespoon of mutton filling in the centre and bring the ends together.Dust with dry flour and roll the balls with very light hands to make a 5-6 inch circle',
        step11:'Heat a griddle. Put the paratha on the hot griddle. Flip the paratha once light brown spots appear on the bottom surface.Apply oil on both sides. Fry from both sides till brown spots appear. Keep pressing using a flat ladle while frying. Serve hot with raita',
        id: 'nonveg'
    },
    {
        name: 'grilled chicken salad',
        description: 'Salad Can Also Be Delicious',
        imagepath: 'https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-sesame-seeds_23-2148700369.jpg?size=626&ext=jpg',
        ingredient: '4 Chicken breasts , cut into 1 inch pieces,2 teaspoons Extra Virgin Olive Oil , for marinating & 2 teaspoon to cook chicken,10 Lettuce leaves , roughly chopped,Gouda cheese , Small piece (optional),1/2 Green Bell Pepper (Capsicum) , chopped,1 Cucumber , chopped,8 Whole Almonds (Badam) , roasted & salted,3 Cherry tomatoes , cut into half,Salt , to taste,Black pepper powder , to taste,1 teaspoon Lemon juice,2 cloves Garlic , grated,2 sprig Parsley leaves , thoroughly chopped for marinating the chicken',
        instruction:'Step1: To begin making the Grilled Chicken Salad recipe, firstly wash and clean the chicken well.',
        step1:'Step2: To marinate, in a mixing bowl add the chicken breast with salt & pepper, parsley, lime juice, 2 teaspoon olive oil and garlic. Leave it aside for  1 hour.',
        step2:'Step3: Grill the chicken on a grilling pan on medium heat until well done on both sides. this will take about 10-12 minutes.  Add the remaining olive oil while grilling the chicken and grill it until perfectly cooked.        ',
        step3:'Step4: Meanwhile, to make the  vinaigrette in a mixing bowl combine - vinegar, olive oil,  parsley, garlic, salt and chilli flakes. Set aside.',
        step4:'Step5: In a mixing bowl, add the lettuce, cucumber, capsicum, tomatoes, gouda cheese, almonds and toss it along with the vinaigrette.',
        step5:'Step6: Add in the grilled chicken pieces and cheese.Serve Grilled Chicken Salad on its own or with The best spicy Spaghetti Bolognese for a delicious weekend dinner.',
        id: 'nonveg'
    },
    {
        name: 'chilli garlic omelette',
        description: 'Adding Some Spice To Eggs',
        imagepath: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Nithya_Anantham/Oats_Omelette_Recipe.jpg',
        ingredien: ' butter · 150g chestnut mushrooms, sliced · 2 spring onions, chopped · 1 red chilli, finely chopped · 1 clove garlic, crushed · 3 eggs,beaten . 50g cheddar, grated ,a handful rocket',
        instruction: 'STEP 1: Heat a knob of butter in a frying pan and cook the mushrooms until soft, golden and most of their liquid has evaporated. Add the spring onion, chilli and garlic and cook gently for another 3-4 minutes. Season, then tip onto a plate and cover to keep warm.',
        step1:'STEP 2: Wipe the pan and heat a knob of butter. Season the eggs and pour in. Cook gently, drawing in the sides of the omelette, letting the uncooked egg run into the gaps. When the omelette is almost set, sprinkle over the cheese then spoon over the mushroom mix.',
        step2:'STEP 3: Leave for a couple of minutes until the cheese starts to melt then add the rocket and flip over one half. Slide onto a plate.',
        id: 'nonveg'
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
