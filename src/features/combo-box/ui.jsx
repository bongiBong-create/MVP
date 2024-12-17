import "./index.css";

export const ComboBox = () => {
  return (
    <div className="combo__box">
      <label htmlFor="university">Выберите университет:</label>
      <select id="university">
        {/* {universities.map((university, id) => (
          <option key={id} value="apple">
            {university}
          </option>
        ))} */}
        <option>ГУАП</option>
        <option>ДВФУ</option>
      </select>
    </div>
  );
};
