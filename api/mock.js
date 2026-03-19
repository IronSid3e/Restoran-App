import axios from "axios";
import { MOCK_API_URL } from "@env";

export default axios.create({
  baseURL: MOCK_API_URL,
});
