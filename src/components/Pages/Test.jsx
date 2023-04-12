import { useState } from 'react';

const data = [
  { name: 'Item 1', category: 'A' },
  { name: 'Item 2', category: 'B' },
  { name: 'Item 3', category: 'A' },
  { name: 'Item 4', category: 'C' },
];

function FilteredData() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = selectedCategory
    ? data.filter((item) => item.category === selectedCategory)
    : data;

  return (
    <>
      <div>
        <input
          type="radio"
          id="category-a"
          name="category"
          value="A"
          checked={selectedCategory === 'A'}
          onChange={handleChange}
        />
        <label htmlFor="category-a">Category A</label>
      </div>
      <div>
        <input
          type="radio"
          id="category-b"
          name="category"
          value="B"
          checked={selectedCategory === 'B'}
          onChange={handleChange}
        />
        <label htmlFor="category-b">Category B</label>
      </div>
      <div>
        <input
          type="radio"
          id="category-c"
          name="category"
          value="C"
          checked={selectedCategory === 'C'}
          onChange={handleChange}
        />
        <label htmlFor="category-c">Category C</label>
      </div>
      <ul>
        {filteredData.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default FilteredData;
