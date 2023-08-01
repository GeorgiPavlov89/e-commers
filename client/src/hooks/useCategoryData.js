import { useContext, useEffect } from "react";
import { CategoryContext } from "../context/CategoryContext";

const useCategoryData = (category) => {
  const { categories, setCategories } = useContext(CategoryContext);

  const fetchCategoryData = async (category) => {
    try {
      const response = await fetch(`http://localhost:3001/${category}`);
      const data = await response.json();
      setCategories((prevCategories) => ({
        ...prevCategories,
        [category]: data,
      }));
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchCategoryData(category);
  }, [category]);

  const filterCategoryData = (category, color, price) => {
    const filteredData = categories[category].filter(
      (item) => item.color === color && item.price <= price
    );
    return filteredData;
  };

  return { categories, fetchCategoryData, filterCategoryData };
};

export default useCategoryData;
