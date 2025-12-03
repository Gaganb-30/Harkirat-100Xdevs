import { getServerSession } from "next-auth";
import Appbar from "../components/Appbar";
import { NEXT_AUTH } from "../lib/auth";

const page = async () => {
  const session = await getServerSession(NEXT_AUTH);
  return (
    <div>
      <Appbar />
      User Component
      {JSON.stringify(session)}
    </div>
  );
};

export default page;
