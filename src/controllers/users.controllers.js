import userModel from "../schemas/user-schema.js"

export const getAllUsers = async (req,res) => {
   try {
      const users = await userModel.find({})
      res.send({users})
   } catch (error) {
      res.status(500).send({error})
   }
}

export const getUser = async (req, res) => {
   try {
      const user = await userModel.findById(req.params.id).exec()
      return res.send({user})
   } catch (error) {
      if(error.name === 'CastError') return res.status(404).send({error: 'El usuario no existe'})
      res.status(500).send({error})
   }
   
}

export const createUser = async (req,res) => {
   try {
      const newUser = await userModel.create(req.body)
      res.send({newUser, message:`${newUser.name} ha sido registrado`})
   } catch (error) {
      if (error.name === 'ValidationError') return res.status(400).send({error:'Faltan campos obligatorios'})
      res.status(500).send({error})
   }
   
}

export const updateUser = async (req,res) => {
   try {
      const userUpdated = await userModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
      res.send({userUpdated, message: `${userUpdated.name} ha sido actualizado correctamente`})
   } catch (error) {
      if(error.name === 'CastError') return res.status(404).send({error:'El usuario que intentas actualizar no existe'})
      res.status(500).send({error})
   }
}

export const deleteUser = async (req,res) => {
   try {
      const userDeleted = await userModel.findByIdAndDelete(req.params.id)
      res.send({userDeleted, message:`${userDeleted.name} ha sido eliminado correctamente`})
   } catch (error) {
      if(error.name === 'CastError') return res.status(404).send({error:'El usuario que intentas borrar no existe'})
      res.status(500).send({error})
   }
}