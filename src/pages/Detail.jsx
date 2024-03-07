import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import getMealID from "../redux/slice/asyncActions/asyncActionID";

const urlImg = "https://www.themealdb.com/images/ingredients/";
const Detail = ({back}) => {
  const { mealID, status, error } = useSelector((state) => state.mealID);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMealID(params.ProducId));
  }, []);

  return (
    <div className="Detail">
      <div className="Container">
        <button onClick={()=>back()}><img src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="back" /></button>
        
        <div className="Detail-in"></div>
        {mealID.map((el) => (
          <div key={el.idMeal}>
          <div className="Detail-in" >
            
            <div>
              <h1>{el.strMeal}</h1>
              <br />
              <img style={{ width: 500 }} src={el.strMealThumb} alt="" />
            </div>
            <div>
              <h1>Ingredients</h1>
              <ul>
                {[...Array(20)].map((_, i) => {
                  const ingredient = el[`strIngredient${i + 1}`];
                  const measure = el[`strMeasure${i + 1}`];
                  if (ingredient) {
                    return (
                      <div key={i}>
                        <img src={urlImg + ingredient + ".png"} alt="" />
                        <p>
                          {measure} {ingredient}
                        </p>
                      </div>
                    );
                  }
                })}
              </ul>
            </div>
            
          </div>
           <h2>Instructions</h2>
          <p id="strInstructions">{el.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
