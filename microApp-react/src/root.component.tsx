import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../index.css";
import CardReact from "./components/CardReact";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import AuthGuard from './guards/AuthGuard';

export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/react/recipe"
          element={
            <AuthGuard>
              <RecipeList />
            </AuthGuard>
          }
        />
        <Route
          path="/react/recipe/:id"
          element={
            <AuthGuard>
              <RecipeDetail />
            </AuthGuard>
          }
        />
        <Route index element={ <AuthGuard><CardReact /></AuthGuard>} />
        <Route path="*" element={ <AuthGuard><CardReact /></AuthGuard>}/>
      </Routes>
    </BrowserRouter>
  );
}
