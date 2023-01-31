import express from 'express';

import schema from '../Schema/post.js';

const router = express.Router();

router.get('/',async (req,res) => {
    try{
        const posts=await schema.find();
        console.log(posts);
        res.send(posts);
    }
    catch(err){
        console.log(err);
        res.json({message : err});
    }
});

router.get('/:id', async (req,res) => {
    const findPost = await schema.findById(req.params.id);
    res.json(findPost);
})

router.post('/', async (req,res) => {

    const post= new schema({
        automationName : req.body.automationName,
        description : req.body.description,
        Steps : req.body.Steps
    });

    const duplicates=await schema.find({Steps : req.body.Steps});

    if(duplicates == null || duplicates.length === 0){

        try{
            const savedPost = await post.save();
            res.json(savedPost);
        }
        catch(err){
            res.json({message : err});
        }

    }
else{
    res.send("<h1 style='text-align:center'>An Automation with Same Steps has already been added.</h1>");
    console.log(duplicates);
}
});

router.delete('/:id', async (req, res) => {
      try{
        const removePost= await schema.remove({_id:req.params.id});
        res.json(removePost);
      }
      catch(err){
        res.json({message : err});
      }
})
  


export default router;