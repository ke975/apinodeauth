import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';


const prisma =  new PrismaClient()

export async function createUser(req,res){
  const {email,password, name} = req.body
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    const user = await prisma.user.create({
      data:{
        email,
        password:hashedPassword,
        name,
      }
     
    })
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({error:"error al crear el usuario"})
  }

}
