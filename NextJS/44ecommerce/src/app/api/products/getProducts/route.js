import toast from "react-hot-toast";
import { connect } from "../../../../dbConfig/dbConfig";

connect();

export const GET = async () => {
  try {
  } catch (error) {
    toast.error(error);
  }
};
