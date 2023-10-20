import { ObjectId } from "mongodb";
import { db } from "./connectDb.js";
const animaldb = db.collection('animal');

const theAnimal = {
    type: 'Dog',
    breed: 'pekingnese',
    color: 'tan'
}
// get a animal
export async function addAnimal() {
    const animalAdded = await db.collection('animal').insertOne(theAnimal)
    console.log('animalAdded ->',animalAdded)
}



//get all animals
export async function getAllAnimal(){
    const animalList = await db.collection('animal').find({}).toArray();
        console.table(animalList);
}
//update animal
export async function updateOneAnimal(){
    const cleanId = new ObjectId('6532bf79b8fc90a32db2c1e1')
    const dataToUpdate = {type: 'chat', breed: 'haitian', color: 'white'}
    const updatedAnimal = await animaldb.findOneAndUpdate({_id: cleanId}, {$set: dataToUpdate})
    console.log('updateAnimal ->', updatedAnimal)
}
//delete a animal
export async function deleteAAnimal(){
    const myCleanId = new ObjectId('6532c78c5edc948221a09eab')
    const deleteAAnimal = await db.collection('animal').findOneAndDelete({_id:'6532c78c5edc948221a09eab'})
    console.log('deleteAAnimal ->', deleteAAnimal)
}