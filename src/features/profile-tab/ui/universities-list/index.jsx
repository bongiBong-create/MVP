import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFetchUniversity,
  getUniversities,
} from "../../model/profileTabSlice";
import { generateRandomId } from "../../../../shared/utils/randomId";

import { Icons } from "../../../../shared/icons";

import "./index.css";

export const UniversitiesList = () => {
  const dispatch = useDispatch();
  const { universities, isLoading } = useSelector((state) => state.profileTab);

  const [university, setUniversity] = useState("");

  const handleAddUniversity = () => {
    const item = {
      id: generateRandomId(),
      name: university,
    };
    dispatch(addFetchUniversity(item));
    setUniversity("");
  };

  useEffect(() => {
    dispatch(getUniversities());
  }, [universities?.length]);

  return (
    <div className="universities">
      <div className="universities__box">
        <h3>Учебные заведения</h3>

        <div className="add">
          <input
            className="add__input"
            type="text"
            placeholder="Введите учебное заведение"
            onChange={(e) => setUniversity(e.target.value)}
          />
          <button className="add__btn" onClick={handleAddUniversity}>
            Добавить
          </button>
        </div>
      </div>
      <ul className="universities__list">
        {/* {!isLoading &&
          universities?.map((university) => (
            <li className="university__list" key={university.id}>
              <div className="universitites__name">{university.name}</div>

              <button className="delete">X</button>
            </li>
          ))} */}
        <li className="university__item">
          <p className="universitites__name">ДВФУ</p>

          <button className="delete">
            <Icons icon="delete" />
          </button>
        </li>
        <li className="university__item">
          <p className="universitites__name">ДВФУ</p>

          <button className="delete">
            <Icons icon="delete" />
          </button>
        </li>
        <li className="university__item">
          <p className="universitites__name">ДВФУ</p>

          <button className="delete">
            <Icons icon="delete" />
          </button>
        </li>
      </ul>
    </div>
  );
};
