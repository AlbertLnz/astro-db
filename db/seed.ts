import { db, User } from 'astro:db';
import { v4 as uuidv4 } from 'uuid'

// https://astro.build/db/seed
export default async function seed() {
	
	await db.insert(User).values([
		{
			id: uuidv4(),
			email: "james_cameron@gmail.com",
			username: "JCameron"
		},
		{
			id: uuidv4(),
			email: "steven_spielberg@outlook.com",
			username: "SSpielberg"
		},
	])

}
