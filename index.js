import { closeClient } from "./src/connectDb.js";
import { addAnimal, getAllAnimal, updateOneAnimal, deleteAAnimal } from "./src/animals.js";


//await addAnimal();
await getAllAnimal();
//await updateOneAnimal();
await deleteAAnimal();
closeClient();