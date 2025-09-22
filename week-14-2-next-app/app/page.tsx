import client from "@/db";

async function getUserDetails() {
  const user = await client.user.findFirst();
  // console.log("hi");
  return {
    username: user?.username,
    name: "Gagan Bisht",
  };
}

export default async function Home() {
  const userDetails = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name : {userDetails?.name}</div>
          {userDetails?.username}
        </div>
      </div>
    </div>
  );
}
