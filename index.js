const { prisma } = require("./generated/prisma-client");

// A `main` function so that we can use async/await
async function main() {
  // Create a new user called `Alice`
  const newUser = await prisma.createUser({ name: "Alice" });
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`);

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users();
  console.log(allUsers);

  const usersCalledAlice = await prisma.users({
    where: {
      name: "Alice"
    }
  });

  console.log("hello" + JSON.stringify(usersCalledAlice[4].name));

  const id = usersCalledAlice[0].id;

  // update many records at once with batch

  /*
const updatedUsers = await prisma.updateManyUsers({
  data: {
    role: "ADMIN"
  },
  where: {
    email_ends_with: "@prisma.io"
  }
});
*/

  const updatedUser = await prisma.updateUser({
    where: { id },
    data: { name: "Carol" }
  });

  // Read all users from the database and print them to the console
  //console.log(allUsers);
}

main().catch(e => console.error(e));
