import { Component, OnInit } from '@angular/core';
import { recipelist } from './recipe.model';
@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
    selectedrecipe?: any;
    recipelist = [{
        name: 'rajma chawal',
        description: 'It is one of the regulars at any Punjabi house for lunch or dinner.',
        imagepath: 'https://www.indianveggiedelight.com/wp-content/uploads/2022/10/instant-pot-rajma-masala.jpg',
        ingredient: '¼ teaspoon turmeric powder,½ teaspoon red chilli powder (or cayenne pepper or paprika),1 teaspoon coriander powder,a pinch of asafoetida (hing),½ teaspoon garam masala powder.',
        instruction: 'Step1:Soak and cook bean. Sort dried beans and discard any misshapen or discolored beans. Rinse a couple of times, and then soak 1 cup rajma (kidney beans) in enough water to cover them.Soaking should ideally last for 8 to 9 hours, so I usually soak them the night before I cook.',
        step1: 'Step 2: Once the beans are well soaked, discard the soaking water. Drain and rinse the soaked beans a few times to remove any leftover grit, if any. Add the rinsed and drained kidney beans to a 3 litre pressure cooker.',
        step2: 'Step3: Add 3.5 to 4 cups of water and stir. Pressure cook the rajma for 18 to 20 whistles (or for about 15 to 20 minutes).',
        step3: 'Step4: While the kidney beans are cooking, chop 1 large onion (¾ to 1 cup finely chopped onion), 2 large tomatoes (1 cup finely chopped tomatoes) and make the crushed ginger+garlic+green chili paste.For the paste, you need to crush or grind 1 inch ginger, 5 to 6 small garlic cloves (or 3 to 4 medium garlic cloves), and 1 to 2 green chilies to a paste in a mortar-pestle or a small grinder. ',
        step4: 'Step5: When the pressure settles down on its own in the cooker, open the lid. Check if the rajma is cooked or not by eating or pressing a bean with your fingers. The cooked beans should not have a bite to them and softened.The rajma beans should be completely cooked. If they are not cooked completely, then pressure cook again (adding some water if required) for a few more minutes.',
        step5: 'Step6: Make masala base: Heat either 3 tablespoons of butter (or 2 tablespoons butter + 1 tablespoon oil), in another pot or pan or kadai. Keep the heat to low or medium-low.',
        step6: 'Step7: Add ½ teaspoon cumin seeds first and let them crackle and get browned.',
        step7: 'Step8:  Then add the finely chopped onions.Stir and begin to sauté them on medium-low to medium heat.',
        step8: 'Step9: Keep on stirring the onions while sautéing them. This will ensure both uniform cooking and also that they dont get burnt. Take care not to burn the onions, as this will impart bitter tones to the rajma curry.',
        step9: 'Sauté the onions till they are caramelized and golden brown.Lower the heat and add the crushed ginger-garlic-chilli paste.Stir and sauté for 5 to 10 seconds on a low heat or until the raw aroma of ginger-garlic goes away.',
        step10: ' Add the finely chopped tomatoes.Sauté for 2 to 3 minutes until the tomatoes become soft on a medium-low to medium heat.Add all the spice powders one by one.Continue to sauté the whole masala base until the fat starts leaving the sides of the masala on a medium-low heat. The onion tomato masala will thicken, become glossy and start clumping around itself.',
        step11: ' Use a slotted spoon or a strainer, remove the rajma beans from their cooking liquid and add them to the masala. Stir and sauté for a minute.',
        step12: 'Step10 :Make Rajma Masala: Add 2 cups of the fresh water to the pan. If you like then you can also add the cooked rajma stock instead of fresh water.Add salt as required.StirOn a low to medium-low heat, simmer without a lid for 10 to 12 minutes or more until the curry thickens slightly. The rajma curry should not be watery.',
        step13: ' Mash a few rajma beans with the back of your spoon. This helps to thicken the rajma gravy.Continue to simmer until you get a medium consistency in the curry.',
        step14: ' Once the consistency is right, add 1 teaspoon crushed kasuri methi (dry fenugreek leaves) and 2 to 3 tablespoons light cream. (If using heavy whipping cream, then just add 1 tablespoon of it.) Mix very well and simmer for 30 seconds to 1 minute.Adding cream is optional and you can easily skip it. Addition of cream gives some richness to the gravy making it taste restaurant style and balances the tang from the tomatoes.',
        step15: 'Serve your completed rajma masala with steamed basmati rice, jeera rice, saffron rice, Roti, paratha or naan.',
    },
    {
        name: 'nalli nihari ',
        description: 'Nihari is a deliciously smooth flour based mutton stew of slow cooked in a myriad of spices. ',
        imagepath: 'https://www.myweekendkitchen.in/wp-content/uploads/2015/08/mutton_nihari_masala_curry.jpg',
        ingredient: '1 kg  mutton , preferably shank portion (cut into 8-10 pieces),4 tbsp  Ghee/ Clarified butter,2 medium onions , finely sliced,1 tsp  ginger paste,1 tsp  garlic paste,Salt  to taste,2 tsp  coriander powder,1/2 tsp  turmeric powder,3 tbsp  wheat flour,3 tbsp  nihari masala,WHOLE SPICES TO MAKE YOUR OWN NIHARI MASALA FROM SCRATCH,1 tbsp cumin seeds,2 tsp fennel seeds,1 tsp soonth dry ginger,5-6 green cardamoms,2 black cardamoms,4-5 cloves,1 bay leaf,1 inch cinnamon stick,8-10 black peppercorns,1/4 tsp grated nutmeg',
        instruction: 'Step1:To make Nihari Masala :To make your own Nihari masala from scratch, dry roast all the whole spices for the masala; cool; and grind them to a fine powder.',
        step1: 'Step2: To make Nihari curry :Heat Ghee (you can use oil as well but ghee makes it tastier) in a deep bottom stock pot. Once the ghee is hot, add the sliced onions and fry till they start to turn brown.',
        step2: 'Step3: Add mutton pieces, ginger paste, garlic paste, coriander powder, turmeric powder and salt. Mix well to coat the mutton in ghee and spices. Sauté for 5 mins.',
        step3: 'Step4: Add the nihari masala and 8 cups of water. Mix well, cover and cook on very low heat for about 4 hours until the meat is tender. Keep checking in between. The way to know that the meat is cooked is when it breaks easily with a wooden spoon.',
        step4: 'Step5: Dissolve wheat flour in half cup of water such that there are no lumps. Slowly add it to the gravy. Stir to mix it well in the gravy and let it simmer for another 10-15 mins till the gravy thickens.',
        step5: 'Step6: Sprinkle some lime juice and garnish with ginger strips and fresh coriander leaves. Serve hot.',
    },
    {
        name: 'dal makhni',
        description: 'The Best of Dal',
        imagepath: 'https://myfoodstory.com/wp-content/uploads/2018/08/Dal-Makhani-New-1.jpg',
        ingredient: 'Whole black gram (sabuturad) 1/2 cup,Red kidney beans (rajma) 2 tablespoons- Wash and soak urad dal &rajma overnight, drain,Salt to taste,Red chilli powder 1 teaspoon,Ginger chopped 2 inch pieces,Butter 3 tablespoons,Oil 1 tablespoon,Cumin seeds 1 teaspoon,Garlic chopped 6 cloves,Onion chopped 1 large,Green chillies slit 2,Tomatoes 2 medium- blended to paste,Garam masala powder 1 teaspoon',
        instruction: 'Step1: Boil sabuturad and rajma in three cups of water with salt and half the red chilli powder and half the ginger. Cook for three whistles in a pressure cooker or until the rajma is completely soft.',
        step1: 'Step2: Heat butter and oil in a pan. Add cumin seeds. When they begin to change colour, add ginger, garlic and onion and sauté till golden brown.',
        step2: 'Step3: Add slit green chillies, tomatoes pureeand sauté on high heat. Add the remaining red chilli powder and sauté till the tomatoes are reduced to a pulp.',
        step3: 'Step4: Add the cooked dal and rajma along with the cooking liquour. Add some water if the mixture is too thick. Add garam masala powder and adjust salt.',
        step4: 'Step5: Simmer on low heat till the dals are totally soft and well blended.',
        step5: 'Step6: Serve hot. Garnish with a swirl of cream and sprigs of fresh coriander.',

    },
    {
        name: 'biryani',
        description: 'Everyones favourite',
        imagepath: 'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2017/06/18154434/181017biryani_01.jpg?fm=webp&w=750&h=500&dpr=1',
        ingredient: '1 cup boiled basmati rice,½ tsp mint leaves,Salt as required,2 tbsp refined oil,3 green cardamom,2 clove,2 onion,1 tsp turmeric,1 tbsp garlic paste,1 cup curd,2 tbsp coriander leaves,Water as required,1 tbsp ghee,600 gm chicken,1 tbsp garam masala powder,1 tsp saffron,1 tbsp bay leaf,1 black cardamom,1 tsp cumin seeds,4 green chillies,1 tbsp ginger paste,1 tsp red chilli powder,½ tbsp ginger,2 drops kewra,1 tbsp rose water',
        instruction: 'To make biryani just like the best non-veg restaurant in Ahmedabad we start off with preparing saffron and kewra water. First of all, soak saffron in water to prepare saffron water and add drops of kewra water to make the kewra water.Meanwhile, heat refined oil to medium in a pan and add cumin seeds, bay leaf, green cardamom, cloves in it, and sauté for about a minute.',
        step1: 'Then, add chopped onion and sauté it.',
        step2: 'Sauté the onions until they are pink in colour. After they change the colour, add chicken into it. Along with the chicken goes green chillies, turmeric, salt to taste, ginger garlic paste, red chilli powder, and green chilli paste.',
        step3: 'Mix well all of these for about 3-4 minutes. Once cooked, add the curd to it.',
        step4: 'Now, add garam masala in it along with ginger, coriander and mint leaves. Then, add the waters we prepared in the beginning and also the rose water. Cook till the chicken gets tender.',
        step5: 'After this, add 1 cup cooked rice and mix everything in a way that all the masala is spread evenly through the rice. Then again add some saffron water and pour some ghee over it. Cook for 15-20 minutes with a closed lid and garnish with 1 tbsp fried onions and coriander leaves to make it look like the best non-veg restaurant cooked dish.',
        step6: 'The dish is ready to be served.',
    }

    ];
    displayinfo = false;
    next = false;
    food = '';
    Seraches = '';
    constructor() { }

    ngOnInit() {
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
