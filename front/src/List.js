import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const List = () => {
  const [imgArray, setImgArray] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (userId !== "") {
      const apiUrl = `http://localhost:8080/main/${userId}`;
      axios
      .get(apiUrl)
      .then((response) => setImgArray(response.data))
      .catch((error) => console.error("Error fetching data:", error));
    }
  }, [userId]);

  return (
    <div>
      {imgArray.map((item) => (
        <Card key={item.id} variant="outlined" style={{ height: "300px", marginBottom: "50px", marginTop: "50px" }}>
          <img src={`data:image/png;base64,${item.imageData}`} alt="Image" />
          <h2>{item.name}</h2>
          <ul>
            <li>Brand: {item.brand}</li>
            <li>Amount: {item.amount}</li>
            <li>Meal Type: {item.mealType}</li>
            <li>Serving Size: {item.serving_size}</li>
            <li>Calories: {item.calories}</li>
            <li>Carbohydrate: {item.carbohydrate}</li>
            <li>Protein: {item.protein}</li>
            <li>Fat: {item.fat}</li>
            <li>Sugars: {item.sugars}</li>
            <li>Sodium: {item.sodium}</li>
            <li>Cholesterol: {item.cholesterol}</li>
            <li>Caffeine: {item.caffeine}</li>
            <li>Date: {item.date}</li>
          </ul>
        </Card>
      ))}
    </div>
  );
};

export default List;
