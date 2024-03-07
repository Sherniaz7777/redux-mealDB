import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getMealDB from "../redux/slice/asyncActions/asyncAction";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { mealDB, status, error } = useSelector((state) => state.mealDB);
  console.log(mealDB);
  // console.log('sndjsw');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMealDB());
  }, []);

  return (
    <div>
      <div className="Card-Color">
        <div className="Container">
          <div className="Card-all">
            {mealDB.map((el) => (
              <NavLink className='NavLink' to={`/detail/${el.idMeal}`} key={el.idMeal}>
                <div className="Card">
                  <img src={el.strMealThumb} alt="" />
                  <p>
                    {el.strMeal.length > 20
                      ? `${el.strMeal.slice(0, 20)}...`
                      : el.strMeal}
                  </p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
