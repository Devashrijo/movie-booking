import "./FilterBox.css";
import { useState } from "react";
import FilterDropdown from "./FilterDropdown";

const genres = ["Action", "Comedy", "Drama", "Horror", "Romance"];
const languages = ["English", "Hindi", "Tamil", "Telugu", "Spanish"];

function FilterBox({ title, showFilters = true }) {
  const [withSubtitles, setWithSubtitles] = useState(false);

  return (
    <div className="filterbox-container">
      <h2>{title}</h2>

      {showFilters && (
        <div className="filter-right">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={withSubtitles}
              onChange={(e) => setWithSubtitles(e.target.checked)}
            />
            With Subtitles
          </label>

          <FilterDropdown label="All Genres" options={genres} />
          <FilterDropdown label="All Languages" options={languages} />
        </div>
      )}
    </div>
  );
}

export default FilterBox;
