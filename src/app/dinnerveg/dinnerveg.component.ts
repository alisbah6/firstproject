import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dinnerveg',
    templateUrl: './dinnerveg.component.html',
    styleUrls: ['./dinnerveg.component.css']
})
export class DinnervegComponent implements OnInit {
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

    },];
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
