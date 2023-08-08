import { useContext, useEffect } from "react";
import { CategoryContext } from "../context/CategoryContext";

const useCategoryData = (category) => {
  const { categories, setCategories } = useContext(CategoryContext);

  const fetchCategoryData = async (category) => {
    try {
      const response = await fetch(`/${category}`);
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

  return { categories, fetchCategoryData };
};

export default useCategoryData;
