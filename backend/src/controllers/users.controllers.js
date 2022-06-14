import userModel from "../schemas/user-schema.js"

export const getAllUsers = async (req,res) => {
   try {
      const users = await userModel.find({})
      res.send(users)
   } catch (error) {
      res.status(500).send(error)
   }
}

export const getUser = async (req, res) => {
   try {
      const user = await userModel.findById(req.params.id).exec()
      return res.send(user)
   } catch (error) {
      if(error.name === 'CastError') return res.status(404).send('El usuario no existe')
      res.status(500).send(error)
   }
   
}

export const createUser = async (req,res) => {
   try {
      const newUser = await userModel.create(req.body)
      res.send(`${newUser.name} ha sido registrado`)
   } catch (error) {
      if (error.name === 'ValidationError') return res.status(400).send('Faltan campos obligatorios')
      res.status(500).send(error)
   }
   
}

export const updateUser = async (req,res) => {
   try {
      const userUpdated = await userModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
      res.send(`${userUpdated.name} ha sido actualizado correctamente`)
   } catch (error) {
      if(error.name === 'CastError') return res.status(404).send('El usuario que intentas actualizar no existe')
      res.status(500).send(error)
   }
}

export const deleteUser = async (req,res) => {
   try {
      const user = await userModel.findByIdAndDelete(req.params.id)
      res.send(`${user.name} ha sido eliminado correctamente`)
   } catch (error) {
      if(error.name === 'CastError') return res.status(404).send('El usuario que intentas borrar no existe')
      res.status(500).send(error)
   }
}