import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const getReponse = async () => {
      // configure here your vercel domain
      const response = await fetch("http://localhost:3000/api", {
        headers: { Accept: "application/json" },
      }).then((r) => r.json());

      console.log(response);
    };

    getReponse();
  }, []);

  return <h1>hi</h1>;
};

export default Index;
