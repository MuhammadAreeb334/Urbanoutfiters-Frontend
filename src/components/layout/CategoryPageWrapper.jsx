import React from "react";
import { useParams } from "react-router-dom";
import MusicPage from "../../pages/MusicPage";
import CategoryPage from "../../pages/CategoryPage";
import GiftPage from "../../pages/GiftPage";
import VintageRemadePage from "../../pages/VintageRemadePage";
import BrandsPage from "../../pages/BrandsPage";

const CategoryPageWrapper = () => {
  const { categoryName } = useParams();

  if (categoryName === "music") return <MusicPage />;
  if (categoryName === "gifts") return <GiftPage />;
  if (categoryName === "vintage-remade") return <VintageRemadePage />;
  if (categoryName === "brands") return <BrandsPage />;

  return <CategoryPage />;
};

export default CategoryPageWrapper;
