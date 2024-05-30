import { useState,useEffect } from "react";
import axios from "axios";
export default function Aticle_03 (){
  const [data, setData] = useState(null);

  useEffect(() => {
      async function fetchData() {
          try {
              const response = await axios.get(`https://perenual.com/api/pest-disease-list?key=sk-J4uP6650cddb31d3a5633`);
              setData(response.data);
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      }
      
      fetchData();
  }, []);

  return (
      <div>
          <h1>API Data</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
  );
}