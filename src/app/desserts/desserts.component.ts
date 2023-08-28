import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-desserts',
    templateUrl: './desserts.component.html',
    styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {
    selectedrecipe?: any;
    recipelist = [{
        name: 'gulab jamun',
        description: 'High on the list of the most popular Indian desserts!',
        imagepath: 'https://www.tasteofhome.com/wp-content/uploads/2021/01/gulabjamun-hero-1-Square-SRIVIDHYA-GOPALAKRISHNAN-for-TOH.jpg?resize=700,700',
        ingredient: 'For Gulab Jamun:1 cup full-fat milk powder,2 tablespoons all-purpose flour,1/8 teaspoon baking powder,1 tablespoon ghee (You can find ghee at the store or make it from scratch.),5 to 6 tablespoons milk, as needed,Oil for deep-frying For the sugar syrup:1 cup sugar,1-1/4 cup water,2 green cardamom pods,1/8 teaspoon rose essence (If using rose water, use 1 to 1-1/2 teaspoons.),1/4 teaspoon lemon juice (This prevents the sugar syrup from crystallizing.)',
        instruction: 'Step 1: Prepare the dough = In a mixing bowl, add the milk powder, all-purpose flour, baking powder and ghee.Slowly add the milk, 1 tablespoon at a time, and gently form the dough by mixing. It should be a stiff dough. If the dough is sticky, grease your palms with oil and gently mix. Do not knead the dough—it will make the jamuns hard.',
        step1:'Step 2: Let the dough rest = Cover the dough with a damp cloth. Let rest for 5 minutes.',
        step2:'Step 3: Prepare the sugar syrup = In a saucepan, add the sugar, water and two green cardamom pods, crushed.Bring the mixture to a boil and let the sugar dissolve. When the sugar is completely dissolved, simmer over medium-low heat for 5 to 6 minutes. We need a sticky-consistency sugar syrup here. You can test it by removing a small amount of sugar syrup and letting it cool a bit. Then touch the sugar syrup with your index finger and press it with your thumb. You should feel the stickiness.When its ready, remove the syrup from the heat and add the rose essence or rose water. Set aside.',
        step3:'Step 4: Roll the jamuns = Grease your palms and pinch a small amount of dough. Roll gently to form a small, smooth ball—to give you an idea of the size, I make about 20 jamuns using this recipe.',
        step4:'Step 5: Fry the jamuns = In a heavy saucepan or Dutch oven, heat a few inches of oil over low heat.The oil should not be very hot while frying the gulab jamuns. To test the oil, drop in a small piece of the dough. It will sink initially, but after 30 seconds or so, it will float up, and the color should not change. That’s the right temperature.',
        step5:'Slowly drop in 4 to 5 balls, depending on the pan size, and deep-fry the jamuns until they turn golden brown. Using a slotted spoon, keep rotating them in the oil for even cooking and coloring. It takes me 4 to 5 minutes for each batch. Do not rush the frying process!',
        step6:'When the jamuns are golden brown, use a slotted spoon to remove them from the oil and drain on paper towels.',
        step7:'Step 6: Add jamuns to the sugar syrup = Let each jamun sit for 45 to 60 seconds, and then add the fried jamuns to the warm sugar syrup.Repeat with the next batch of jamuns, frying them and then adding them to the sugar syrup. Let the jamuns soak in the sugar syrup for at least 2 hours. Overnight soaking is fine, too.',
        step8:'All ready enjoy!!',
    }, {
        name: 'rasmalai',
        description: 'Ras malai, rasamalai, or rossomalai is a dessert originating from the eastern regions of the Indian subcontinent.',
        imagepath: 'https://www.tasteofhome.com/wp-content/uploads/2021/01/rasmalai-indian-dessert.jpg?resize=768,768',
        ingredient: 'Rasgulla Balls,Milk,Rabdi Mix,Nuts,Saffron,Cardamom',
        instruction: 'Step 1: Squeeze Rasgulla Balls :Remove rasgullas from the syrup one at a time. Place it in between the palm of your hands and gently squeeze out the syrup. Dont press too hard or they can crumble. Alternatively, use a lemon squeezer for this step. Repeat with all rasgullas and keep aside.',
        step1:'Step 2: Prepare Rasmalai Base :Place a heavy bottom skillet on medium heat. Add ¼ cup water and then pour the milk. Adding water before milk prevents the milk from scorching at the bottom (my moms tip).',
        step2:'When milk is warm to the touch (about 1 minute), use a whisk to stir in rabdi mix. Keep whisking gently until the mix is completely dissolved. Keep stirring lightly and bring it to a boil. That should take about 2 minutes. Check for sweetness and add sugar to taste (I add 2 tablespoons).',
        step3:'Add chopped nuts, saffron and cardamom powder and stir. Simmer the Rabdi for another 2-3 minutes, while stirring. At this stage, the consistency of rabdi should be similar to half and half - thicker than milk, but thinner than heavy cream.',
        step4:'Step 3: Finish and Chill:Add the rasgullas and stir gently to coat them with the rabdi mix. Simmer for 2 minutes. Turn off the heat and cover the pan. Let it rest for 10 minutes. After that, transfer to a serving dish and refrigerate for 4 hours, or until its chilled to your liking.',

    },
    {
        name: 'jalebi',
        description: 'Think of Jalebi as the equivalent to American funnel cakes: fried, crispy and sugar-coated.',
        imagepath: 'https://www.tasteofhome.com/wp-content/uploads/2021/01/jalebi-indian-dessert.jpg?resize=768,768',
        ingredient: '3 cup all purpose flour,2 cup hung curd,1/2 cup ghee,3 cup sugar,5 strand saffron,1/2 teaspoon powdered green cardamom,1/2 cup corn flour,1 1/2 pinch baking soda,2 cup sunflower oil,3 cup water,4 drops rose essence,1/2 teaspoon edible food color',
        instruction: 'Step1:Make Batter 1. In a mixing bowl, take 1 cup (125 grams) all-purpose flour. Add 2 tablespoons besan or gram flour, a pinch of baking soda and ⅛ teaspoon turmeric powder.',
        step1:'Step2: Mix all the above dry ingredients very well with a spoon or spatula.',
        step2:'Step3: Now add ¾ to 1 cup water. The amount of water to be added depends on the quality of flour used; I added 1 cup water.',
        step3:'Step4: With the spatula, spoon or wired whisk, first mix. Break any lumps while mixing. You can also use your hands for mixing.',
        step4:'Step5: Then in round circular directions stir the batter briskly for 4 to 5 minutes. This adds volume to the batter and makes it even, flowing and smooth. There should be no lumps in the batter.',
        step5:'Step6: The batter should have a flowing consistency. Cover and keep the batter to ferment in a warm place for 12 to 24 hours.In a hot and humid climate it will take about 6 to 7 hours for the batter to ferment. Whereas in a cool or cold temperature, it can take more than 10 hours and above.Make sure not to over-ferment the batter as it will become very sour with an unpleasant smell.',
        step6:'Step7: This is how the batter looks the next day. You will see small and tiny bubbles on the top.I kept the batter to ferment for 15 hours as the room temperature was 26 degrees Celsius on this day.',
        step7:'Step8: Stir the batter. If you look carefully, you can see the batter has become slightly thinner than what it was before fermentation.Mix very well with a spoon or wired whisk.',
        step8:'Step9: Pour the completed batter in a squeezy bottle (old ketchup bottles are great for this!). Keep aside. You can also use coconut shell with a small hole in it, a piping bag or make your own piping bag with parchment paper.',
        step9:'Step10:Make Sugar Syrup: Take 1 cup sugar in a pan. Add ¼ teaspoon saffron strands to it. I highly recommend that you add saffron, as it gives a nice orange-yellow color and a fragrant aroma to the jalebis.Add ½ cup water.',
        step10:'Step11:  Place the pan on the stovetop over a low heat and begin to stir so that all the sugar dissolves.On a low to medium heat, cook the sugar syrup. Stir at intervals. ',
        step11:'Cook till you get one string consistency in the sugar syrup. To check, touch slightly cooled drops of the syrup between your index finger and thumb. You will see the formation of a single strand or one string when you join and and pull your fingers apart.',
        step12:'Once you get the one string consistency, switch off the heat and add ¼ teaspoon of lime or lemon juice. Stir well.Keep the sugar syrup on the burner itself so that it remains warm when you add jalebi in it.',
        step13:'Step12:Fry Jalebi :1. Heat ghee or oil for deep frying in a heavy bottomed kadai or pan. Ghee gives a better flavor, but you can use either or a 50/50 split of the two.To check the temperature of oil, add a tiny amount of batter to the oil. If it comes up quickly and gradually the oil is hot enough for the jalebis to be fried.',
        step14:' Now squeeze the bottle and make concentric rings with the batter.Either start from the center and move outside or vice versa. Be careful while making jalebi as the oil is hot.Fry till the oil stops sizzling and the jalebis are a light golden. Remove with tongs or a bamboo skewer, shaking them to drain the extra oil.',
        step15:'Step13: Soak Jalebi In Sugar Syrup:Immediately put the fried jalebi in the sugar syrup. The sugar syrup should still be warm when you add the jalebi to it. Keep them in the syrup for about 2 to 3 minutes. If you keep for two minutes, they will be lightly colored and if you keep for 3 minutes or more, they will have a deeper color. Remove with a wooden skewer or tongs. Shake lightly so that the excess sugar syrup falls back in the pan. Place them on a plate or tray lined with a foil or butter paper.',
        step16:' Serve jalebi hot, warm or at room temperature. The leftovers can be kept in an air-tight container and refrigerated for up to 5 days.',
    },

    {
        name: 'kheer',
        description: 'Grab your spoons for this Indian pudding',
        imagepath: 'https://www.tasteofhome.com/wp-content/uploads/2021/01/Indian-Rice-Pudding-Kheer-closeup.jpg?resize=768,768',
        ingredient: '1 cup basmati or long grain white rice, washed and rinsed,1/2 cup water,1 cup unsweetened condensed milk or evaporated milk,5 cups milk,3/4 cup slivered almonds,3/4 cup sugar,1 teaspoon cardamom powder',
        instruction: 'Step 1: Combine the ingredients=Heat the inner pot of an Instant Pot using the saute function. Add all the ingredients for kheer into the pot, starting with water, followed by unsweetened condensed or evaporated milk, milk, nuts, cardamom powder and sugar.',
        step1:'Step 2: Cook the kheer =Close the lid and seal the vent. Use the porridge mode for 20 minutes followed by a natural pressure release.Once the kheer is cooked, open the lid and give the contents a stir.You can adjust the consistency and sweetness of the kheer to your taste. If it’s too thick, gradually add milk to thin it out. If adding more milk, use the saute function again for about 5 minutes. If you like your kheer sweeter, add more sugar and mix well.',
        step2:'Step 3: Garnish = Serve the kheer warm or cold—whichever you prefer! Garnish with chopped or sliced nuts and cardamom powder or rose petals just before serving',

    },
    {
        name: 'kulfi',
        description: 'Nutty custard is melt-in-your-mouth delicious.',
        imagepath: 'https://www.tasteofhome.com/wp-content/uploads/2020/03/Indian-Kulfi-Ice-Cream_EXPS_TOHJJ20_242404_E02_05_9b.jpg?resize=700,700',
        ingredient: '1 can (14 ounces) sweetened condensed milk,1 cup whole milk,1 cup heavy whipping cream,1/4 cup nonfat dry milk powder,1/2 teaspoon ground cardamom,1/4 teaspoon sea salt,1 pinch saffron threads or 1/4 teaspoon ground turmeric, optional,1/4 cup chopped cashews, toasted,1/4 cup chopped shelled pistachios,1/4 teaspoon almond extract',
        instruction: 'In a large heavy saucepan, whisk milks, cream, milk powder, cardamom, sea salt and, if desired, saffron until blended. Cook over low heat until mixture thickens slightly, about 15 minutes, stirring constantly. Do not allow to boil. Remove from heat. Strain through a fine-mesh strainer into a small bowl; cool.',
        step1:'Stir in cashews, pistachios and extract. Transfer to six 4-oz. ramekins. Cover and freeze for 8 hours or overnight. If desired, serve with additional nuts.',
    },
    ]
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
    onfilterdessert() {
        this.Seraches = this.food;
    }

}
