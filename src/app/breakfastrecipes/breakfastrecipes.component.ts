import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-breakfastrecipes',
    templateUrl: './breakfastrecipes.component.html',
    styleUrls: ['./breakfastrecipes.component.css']
})
export class BreakfastrecipesComponent implements OnInit {
    selectedrecipe?: any;
    recipelist = [{
        name: 'aloo ka paratha',
        description: 'Decilious as always',
        imagepath: 'https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_73,ar_16:9,w_560/v1/img/submissions/recipe/2000832843/Ty6HjraTQqXcqJfX6mNK_Aloo%2520paratha.jpg',
        ingredient: 'potato,flour,oil½ to 1 teaspoon finely chopped green chillies (1 to 2 green chilies) or serrano peppers, ¼ to ½ teaspoon punjabi garam masala powder or Garam Masala Powder¼ to ½ teaspoon kashmiri red chilli powder or cayenne pepper or paprika (optional) .½ to 1 teaspoon dry mango powder (amchur powder) – or use lemon juice instead. salt according to your taste',
        maincompo: 'Step1: Dough made from whole wheat flour A basic dough is made with whole wheat flour (atta), salt, oil and water. Making this unleavened dough is very easy and you can either knead it with your hands or in a stand mixer. Do use the Indian atta which is finely ground flour made in a chakki or a stone mill Mashed potato stuffing Potatoes are boiled, peeled and then mashed. The mashed potatoes are seasoned with herbs, spices and salt, and then are stuffed in a rolled dough before being roasted or fried.',
        instruction: 'Step2: Boil or steam 4 medium-sized potatoes in a pressure cooker, steamer or electric cooker. Add enough water in a 2-litre pressure cooker or pan to just barely cover the potatoes.',
        step1: 'Step3: The potatoes should be mashed very well, with no lumps, chunks or bits.',
        step2: 'Step4: Now add the given ingredients.Mix well',
        step3: 'Step5: In a separate bowl, add 2 cups whole wheat flour (atta). Make a well in the center. Add ½ teaspoon salt (or to taste), 1 tablespoon oil or ghee, and roughly ⅓ to ½ cup water.',
        step4: 'Step6: Pinch two small balls from the dough. Flatten them and dust with whole wheat flour.',
        step5: 'Step7: With a rolling pin, roll them into rounds roughly 4 to 5 inches in diameter. Try making both the discs the same size.',
        step6: 'Step8: On one of the discs, place the potato stuffing in the center, keeping about 1 inch empty space from the sides.Gently place the second circle on top. Press and seal the edges with your fingertips.',
        step7: 'Step9: Dust some flour on the stuffed aloo ka paratha and start rolling., Roll the paratha into a round about 7 to 8 inches in diameter, or about the size of a normal roti or chapati.',
        id: 'veg'
    },
    {
        name: 'multigrain roti',
        description: 'Most Healty Breakfast',
        imagepath: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/multigrain-roti-recipe.jpg',
        ingredient: 'Whole Wheat Flour = 2 kg ,Ragi Flour = 200 g ,Bajra Flour = 200 g ,Besan = 200 gOats Flour = 200 g',
        instruction: 'Step1 :Add all the flours in a large mixing bowl.',
        step1: 'Step2: Mix them together. Store and use as required.',
        step2: 'Step3: Add water and knead to make a soft dough. Knead the dough for 2-3 minutes until it is smooth.',
        step3: 'Step4: Cover the dough and keep it aside to rest for 10 minutes.',
        step4: 'Step5: Make small lemon sized balls from the dough.',
        step5: 'Step6: Heat a griddle. Dust and roll the dough balls with a very gentle hand to make a 5-6 inch circle. The roti should be thinner from the sides than the center.',
        step6: 'Step7: Transfer the roti on the hot griddle.',
        step7: 'Step8: Cook until brown spots appear on the other sides as well. Hold the roti with a tong and fluff it over the direct flame. Smear ghee on top and serve hot.',
        id: 'veg'
    },
    {
        name: 'oats upma',
        description: 'Upma with Vegetables Mixture',
        imagepath: 'https://rakskitchen.net/wp-content/uploads/2013/10/10077842433_15b44d2c84_z.jpg',
        ingredient: 'Step1: 1 cup rolled oats ,1 tbsp oil ,1 tsp mustard ,½ tsp urad dal ,½ tsp jeera / cumin ,few curry leaves,10 cashew / kaju (whole),1 inch ginger (finely chopped),2 chilli (slit),½ onion (finely chopped),½ carrot (finely chopped), 5 beans(finely chopped),¼ capsicum(finely chopped), 2 tbsp peas / matar,½ tsp turmeric,¾ tsp salt, 1 cup water, 2 tbsp coriander(finely chopped), 2 tbsp coconut(grated), 1 tbsp lemon juice',
        instruction: 'Step2: firstly, in a large kadai heat 1 tbsp oil and splutter 1 tsp mustard, ½ tsp urad dal, ½ tsp jeera, few curry leaves and 10 cashews.',
        step1: 'Step3: saute until the cashews turn golden brown.',
        step2: 'Step4: now add 1 inch ginger, 2 chilli and ½ onion. saute well.',
        step3: 'Step5: furthermore add ½ carrot, 5 beans, ¼ capsicum, 2 tbsp peas, ½ tsp turmeric and ½ tsp salt.',
        step4: 'Step6: add 2 tbsp water, cover and simmer for 5 minutes.',
        step5: 'Step7: now add 1 cup water and get it to a boil. if using instant oats, just add ¼ cup water.',
        step6: 'Step8:once the water comes to a boil, add in roasted oats and mix well.mix until the oats absorb all the water.',
        step7: 'Step9: now cover and simmer for 5 minutes or until oats gets cooked well.',
        step8: 'Step10: furthermore add ¼ tsp salt, 2 tbsp coriander, 2 tbsp coconut and 1 tbsp lemon juice.',
        step9: 'Step11: finally, enjoy vegetable oats upma as a healthy breakfast or pack to the lunch box.',
        id: 'veg'
    },
    {
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
        name: 'idli',
        description: 'For The South Lovers',
        imagepath: 'https://shwetainthekitchen.com/wp-content/uploads/2022/01/Idli.jpg',
        ingredient: ' 1 cup Parboiled Rice (idli-dosa rice or short-grain rice),1 cup Basmati Rice (or any rice),1/2 cup Whole Urad Dal (skinned) or split Urad Dal,1/4 cup Poha (flattened rice / aval),1/2 tablespoon Fenugreek Seeds (methi),Salt to taste,Oil, for greasing',
        instruction: 'Step1: Rinse urad dal and fenugreek seeds in water for 2-3 times.',
        step1:'Soak urad dal, fenugreek seeds and poha (flattened rice) together in 1-cup water for 4-5 hours. (Dals size and volume would increase to almost double after soaking.)',
        step2:'Rinse both parboiled and basmati rice together in water for 3-4 times. (Place both types of rice in a large bowl and fill it with water till ¾th height. Rub rice grains between your fingers; this will make water turn cloudy. Drain the water and repeat the process for 3-4 times to rinse them properly.) Soak them together in 2-cups of water for around 4-5 hours.',
        step3:'Drain excess water from soaked urad dal and reserve it to use in grinding process in next step. Transfer drained dal and fenugreek seeds into large jar of mixer grinder or wet grinder.',
        step4:'Add 1/2 cup water (preserved in step-4) and grind until smooth texture. Gradually add more water (as needed) and grind until smooth and fluffy texture. To grind 1/2 cup urad dal, you would need approx. 1½ cup water. The amount of water required greatly depends on the quality of urad dal; so add water gradually and only as required. Ground dal mixture should have light and fluffy texture as shown in photo and it should not be very thin or very thick.',
        step5:'Transfer it into a large container.Drain excess water from rice. Add drained rice in the same mixer-grinder or wet grinder jar.',
        step6:'Add water in small quantities as needed (approx. 1/2 cup total) and grind until slightly coarse texture.Transfer ground rice mixture to the same container in which urad dal mixture is stored.',
        step7:'Add salt and mix it well. Batter should not be very thick or very thin. Idlis will turn hard if batter is too thick, and idlis will turn flat if batter is too thin. Cover it with a plate and keep it in warm place (at room temperature in summer, and in warm place in winter) for 8-10 hours. If you are living in cold place, place the batter in oven and keep the oven light on.',
        step8:'Check batter for salt and if required, add more salt and stir. Pour 1-2 glass water in the steamer and place it on the stove to heat over medium flame. Grease idli moulds with oil and pour batter over it.',
        step9:'Place moulds in the steamer. Cover steamer with a lid and steam the idlis for 10 minutes over medium flame. Check whether idlis are cooked or not by inserting a knife or a toothpick in the center of idli take it out. If it comes out clean, it means idli is cooked; if it doesn’t, then idli is not cooked yet; steam it for 3-4 minutes more and check again.',
        step10:'Remove idli moulds from the steamer and let them cool for few minutes. Remove idlis with a wet spoon; this will help you remove it easily from the mould.',
        step11:'Transfer them to a plate or in a casserole and cover with a lid to keep them hot. Serve hot with sambar and coconut chutney in the breakfast.',
        id: 'veg'
    },
    {
        name: 'puran poli',
        description: 'For The Marathi Lovers',
        imagepath: 'https://www.vegrecipesofindia.com/wp-content/uploads/2012/09/puran-poli-recipe.jpg',
        ingredient: '1½ cup chana dal,¼ tsp turmeric,½ tsp ghee,3 cup water,1½ cup jaggery,1 tsp ghee,½ tsp cardamom powder,for poli (outer covering):2 cup wheat flour,1 cup maida,¼ tsp turmeric,¼ tsp salt,2 tbsp oil,water (for kneading),other ingredients:maida (for dusting),ghee (for roasting)',
        instruction: 'Step1: Rinse 1 cup of chana dal very well in water. I did not soak the chana dal, but you can soak the chana dal for 30 minutes to one hour and then drain the water.',
        step1:'Step2: In a 3 litre stovetop pressure cooker, cook the chana dal with 3 cups of water for 6 to 7 whistles on medium heat. The dal need should not be mushy or pasty but cooked well.Allow the pressure to release naturally, then strain the cooked dal. Keep the dal in the strainer for several minutes so that all the stock is drained. The cooked lentils have to be drained very well.',
        step2:'Step3: Heat 2 teaspoons ghee in a pan and add ¾ to 1 teaspoon dry ginger powder, ¼ teaspoon nutmeg powder, ½ teaspoon green cardamom powder and 1 teaspoon fennel powder.Fry for a few seconds on low heat; this will help the natural oils in the spices to awaken and taste more flavorful.',
        step3:'Step4:  Add the cooked chana dal and 1 cup of powdered or grated jaggery. Stir and let the puran mixture cook on a low heat till the mixture becomes dry, stirring at intervals.',
        step4:'Step5:  The puran mixture has cooked now and the below photo shows the thick, dry consistency you should have. Let this stuffing mixture cool.',
        step5:'Step 6:  Now mash the puran mixture very well with a potato masher or strainer. You need to mash the lentils thoroughly as the whole pieces of lentils may cause the dough to crack or tear while rolling.',
        step6:'Step7: Make Poli (Flatbread) Dough :Take 1.5 cups whole wheat flour, 1 cup all-purpose flour and ½ teaspoon salt in a bowl. Mix well.',
        step7:'Step8: Add a little bit of water and 4 tablespoon ghee or oil and mix. Begin to knead the dough, adding water as required. The dough should be smooth, supple and soft. Cover and rest the dough for 15 to 20 minutes.',
        step8:'Step9: Assemble Puran Poli :Take a medium or large size ball from the dough. With a rolling pin, roll it 2 to 3 inches in circumference on a dusted rolling board. Place a portion of puran mixture in the center of the rolled dough.',
        step9:'step10: . Bring the edges together towards the center as shown in the below pic. Join them .Sprinkle some flour and start rolling the dough. ',
        step10:'Step11:Make a medium or large circle (poli) as depending upon the size of the dough and puran filling you took. The cover should be rolled rather thin, so you can almost see the filling beneath it.',
        step11:'Step12: Roast Pooran Poli: On a heated tawa or griddle, spread some ghee.Place the rolled poli/dough circle on the tawa.Once the both gets browned, then turn over and apply ghee. If everything is done properly then puran poli will puff up.',
        id: 'veg'
    },
    {
        name: 'chilli garlic omelette',
        description: 'Adding Some Spice To Eggs',
        imagepath: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Nithya_Anantham/Oats_Omelette_Recipe.jpg',
        ingredient: ' butter · 150g chestnut mushrooms, sliced · 2 spring onions, chopped · 1 red chilli, finely chopped · 1 clove garlic, crushed · 3 eggs,beaten . 50g cheddar, grated ,a handful rocket',
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

