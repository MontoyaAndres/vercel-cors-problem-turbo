import { allowCors } from "../../utils/allowCors";

const handler = async (request, response) => {
  try {
    const { authorization } = request.headers;

    if (authorization) {
      response.status(200).json({ response: "it works with authorization!" });
      return;
    }

    response.status(200).json({ response: "it works!" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};

export default allowCors(handler);
