const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {RecipeDiet, Recipe,Diet} = require('../db.js');
const { Op } = require("sequelize")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);}
router.get('/recipe',async (req,res)=>{
 const { name } = req.query;
  try{ 
       const queryR = await Recipe.findAll({

        where: {
          name: {[Op.iLike]: `%${name}%`}
         }

       });
       console.log(queryR);
  if(queryR.length ===0){return res.json("No existe la receta con este nombre "+name);}
       res.json(queryR);
  } catch (error){
    res.json(error);
  }
});

router.get('/types',async (req,res)=>{
 
  try{ 
       const queryD = await Diet.findAll(
    {attributes: { exclude: ['createdAt','updatedAt']}}
        );

       res.json(queryD);
  } catch (error){
    res.json(error);
  }
});

router.get('/recipe/:id',async (req,res)=>{
 const { id } = req.params;
  try{// console.log(id);
       const recipe = await Recipe.findAll({
        
        where: {
          id: id
         }

       });
       const r = await Recipe.findByPk(id);
       const dieta = await r.getDiets({
       attributes: { exclude: ['id','createdAt','updatedAt','RecipeDiet']}
  });
       
       res.json({recipe,dieta});
  } catch (error){
    res.json(error);
  }
});



router.post('/recipe', async (req, res) => {
  const { name, sumary, score,healthScore, instructions,dietTypes } = req.body;
  try {
    let [recipe, created] = await Recipe.findOrCreate({
     where: {
            name,
            sumary,
            score,
            healthScore,
            instructions,
            dietTypes
          }

    });

    console.log(created,recipe);
    if (created) recipe.setDiets(dietTypes)
    res.json(recipe);
  } catch (error) {
    res.send(error);
  }
 
});

module.exports = router;
