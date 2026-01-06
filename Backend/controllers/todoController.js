import Todo from "../models/todo.js";


// get
export const getTodos = async (req,res)=>{
    try{
     const todos = await Todo.find();
     res.json(todos);
    }
    catch (error){
        res.status(500).json({message:error.message});
        
    }
};

//create

export const createTodo= async ()=>{
    try{
      const todos = new Todo({title:req.body.title});
      const saved=await todo.save();
      res.status(201).json(saved);
    }
    catch (error){
        res.status(400).json({message:error.message});
    }
};

//delete

export const deleteTodo = async (req,res)=>{
    try{
     await Todo.findByIdAndDelete(req.params.id);
     res.json({message:"todo deleted"})
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
};