//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn,Diet,Recipe,RecipeDiet } = require('./src/db.js');
const dietTypes = [
  "gluten free",
  "ketogenic",
  "vegetarian",
  "lacto vegetarian",
  "ovo vegetarian",
  "lacto ovo vegetarian",
  "vegan",
  "pescatarian",
  "paleo",
  "primal",
  "whole30",
  "dairy free",
];
const list=[{
   
   "title":"Cauliflower, Brown Rice, and Vegetable Fried Rice",
    "sumary":"sumary 1",
    "score": 1,
    "healthScore": 11,
    "instructions":"instructions 1"
 },{
	 
	 "title":"Homemade Garlic and Basil French Fries",
	 "sumary":"sumary 2",
    "score": 2,
    "healthScore": 12,
    "instructions":"instructions 2"
 },{
  
   "title":"Berry Banana Breakfast Smoothie",
   "sumary":"sumary 3",
    "score": 3,
    "healthScore": 13,
    "instructions":"instructions 3"
},{
   
   "title":"Garlicky Kale",
   "sumary":"sumary 4",
    "score": 4,
    "healthScore": 14,
    "instructions":"instructions 4"
},{
   
   "title":"Chicken Tortilla Soup (Slow Cooker)",
   "sumary":"sumary 5",
    "score": 5,
    "healthScore": 15,
    "instructions":"instructions 5"
},{
   
   "title":"African Chicken Peanut Stew",
   "sumary":"sumary 6",
    "score": 6,
    "healthScore": 16,
    "instructions":"instructions 6"
},{
  
  "title":"Nigerian Snail Stew",
  "sumary":"sumary 7",
    "score": 7,
    "healthScore": 17,
    "instructions":"instructions 7"
},{
  
  "title":"Red Jambalaya",
  "sumary":"sumary 8",
    "score": 8,
    "healthScore": 18,
    "instructions":"instructions 8"
 },{
  
  "title":"Broccoli and Chickpea Rice Salad",
  "sumary":"sumary 9",
    "score": 9,
    "healthScore": 19,
    "instructions":"instructions 9"
},{
  
  "title":"Slow Cooker Beef Stew",
  "sumary":"sumary 12",
    "score": 10,
    "healthScore": 20,
    "instructions":"instructions 1"
}]
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
	
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console


     dietTypes.map((diet) => {
      Diet.create({
        name: diet,
      });
    });
  var listId=[];
    console.log("Dietas precargadas");
   list.map(async (rep,i) => {
    let [recipe,created]= await Recipe.findOrCreate({
      where: { name: rep.title,
               sumary: rep.sumary,
               score: rep.score,
               healthScore: rep.healthScore,
               instructions: rep.instructions}
      });
           //89 RecipeDiet.findOrCreate({where:{recipeId:i,dietId:i}});
           //var x= x + i;
          // if(x>5){x=0;}
           
           if(i<=3)  listId=[1,2,3,4,5]
            if(i>3 && i<=6)  listId=[6,7,8,9,10]
             if(i>6 && i<=10)listId=[5,2,7,4,9]

      if(created){listId.map((id)=>recipe.addDiets(id));}

       
    });
    console.log("Recipes pre cargados");
  });
});