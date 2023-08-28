import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lunchveg',
    templateUrl: './lunchveg.component.html',
    styleUrls: ['./lunchveg.component.css']
})
export class LunchvegComponent implements OnInit {
    selectedrecipe?: any;
    recipelist = [{
        name: 'paneer achaari',
        description: ' Is a delicious Northern Indian dish where soft pieces of paneer',
        imagepath: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/achari-paneer-1-1024x1536.jpg',
        ingredient: '1 teaspoon fennel seeds,¼ teaspoon fenugreek seeds (methi dana),½ teaspoon nigella seeds (kalonji),1 teaspoon cumin seeds,1 teaspoon mustard seeds¼ teaspoon turmeric powder,½ teaspoon red chili powder,½ teaspoon coriander powder (ground coriander),¼ teaspoon cumin powder (optional)',
        instruction: 'Step1: First take the achari or pickling spices in a pan. The five pickling spices in clockwise order. Heat the pan on a low flame and roast the spices till they are *just* fragrant. Dont brown them or burn them.',
        step1: 'Step2: Once cooled, add the spices to a small spice grinder. (You can also use a mortar and pestle if you dont have a spice grinder.).Grind to a semi-fine powder.Remove the achari masala powder and set aside for later.',
        step2: 'Step3: In the same grinder, add 10 to 12 cashews.Grind to a fine powder. Dont worry if some fat is removed during the grinding process; that is natural.',
        step3: 'Step4: In a bowl, take 1 cup fresh whole milk curd/yogurt and whisk it till smooth. Use fresh curd and not sour curd.',
        step4: 'Step5: Making achari masala.Heat 2 tablespoons of mustard oil or sunflower oil or ghee in a pan.If using mustard oil, then allow it to smoke before you add the spices. For any other oil or ghee, just heat it until shimmering in the pan. Then lower the flame and add 2 dry red chilies and a generous pinch of asafoetida.',
        step5: 'Step6: Saute for a few seconds till the red chilies change color. Then add 1.5 teaspoons ginger-green chili paste (about ½ inch ginger + 1 to 2 green chilies crushed to a paste in mortar-pestle). Stir and sauté till the raw aroma of ginger goes away.',
        step6: 'Step7: Then add ⅓ cup tightly packed chopped tomatoes.Stir and add the following spices. Again stir very well and sauté the tomatoes till they soften completely and become pulpy. You should also see oil releasing from the sides.',
        step7: 'Step8: Now add the cashew powder. 2tbsp. On a low-medium flame, stir and sauté the mixture for 2 minutes after adding cashew powder.',
        step8: 'Step9: Add 1 to 1.5 tablespoons besan (also known as gram flour). You can swap gram flour with chickpea flour. We are adding besan so that the curd does not separate.',
        step9: 'Step10: Making paneer achari gravy :  Keep the flame on a low and add the beaten curd. As soon as you add the curd, begin to stir the mixture quickly. Continuing to stir quickly, incorporate the curd well into the rest of the masala.Add salt to taste.Simmer for 2 to 3 minutes on a low flame.Add the paneer cubes. I recommend using 200 or 250 grams paneer chopped in cubes.        ',
        step10: 'Step11: Cook the paneer cubes for about 20 to 30 seconds. Dont cook for more time as then the paneer cubes can get chewy and rubbery. Switch off the heat.',
        step11: 'Step12: Then add 3 tablespoons light cream or low-fat fresh cream. You can also use 1 to 2 tablespoon of whipping cream or heavy cream.Also add ½ teaspoon crushed kasuri methi (dry fenugreek leaves) to the paneer achari gravy.',
        step12: 'Step13: Add 1 tablespoon chopped coriander leaves and 1 teaspoon chopped mint leaves. Stir.',
        step13: 'Step14: Ready to serve',
    },
    {
        name: 'masala bhindi',
        description: ' Bhindi Masala is a staple Indian dish made with okra, whole and ground spices, herbs, onions & tomatoes.',
        imagepath: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/bhindi-masala-1-1152x1536.jpg',
        ingredient: 'for frying bhindi:10 bhindi (chopped),¼ tsp turmeric,½ tsp chilli powder,½ tsp garam masala,2 tsp oilfor curry:2 tbsp oil,1 tsp kasuri methi,1 tsp cumin,1 onion (finely choppe),8 clove garlic,1 tsp ginger paste,½ tsp turmeric,1 tsp chilli powder,1 tsp coriander powder,½ tsp cumin powder,1½ cup tomato puree,¼ cup curd,1 cup water,1 tsp salt,½ onion (petals),1 to mato (quarter),¼ tsp garam masala,2 tbsp coriander (finely chopped)',
        instruction: 'Step1: Firstly, take 10 bhindi and chop them into pieces. make sure to slit in the centre so that masala can be absorbed.',
        step1: 'Step2: Add ¼ tsp turmeric, ½ tsp chilli powder, ½ tsp garam masala.mix well coating all the spices to bhindi.mix well coating all the spices to bhindi.',
        step2: 'Step3: In a large kadai heat 2 tbsp oil, add 1 tsp kasuri methi, 1 tsp cumin and saute until the spices turn aromatic.',
        step3: 'Step4: Now add 1 onion, 8 clove garlic and 1 tsp ginger paste.saute well making sure the onions turn golden brown.',
        step4: 'Step5: Further add ½ tsp turmeric, 1 tsp chilli powder, 1 tsp coriander powder and ½ tsp cumin powder.saute on low flame until the spices turn aromatic.',
        step5: 'Step6: Add 1½ cup tomato puree and saute well.saute until the oil separates from the puree.now add ¼ cup curd and cook until the oil separates.',
        step6: 'Step7: Add 1 cup water and 1 tsp salt. mix well adjusting the consistency of the curry.in another pan heat 2 tsp oil and fry the bhindi.',
        step7: 'Step8: Fry until the bhindi changes colour and is almost cooked.transfer the fried bhindi to the curry, add ½ onion and 1 tomato.',
        step8: 'Step9: Mix well, cover and simmer for 10 minutes or until the flavours are absorbed well.add ¼ tsp garam masala and 2 tbsp coriander. mix well.',
        step9: 'Finally, enjoy bhindi masala recipe with roti.',
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
