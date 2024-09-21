import { NextResponse } from "next/server";
import { recipes } from "../../../../db/recipe";
export const GET = (req: any, res: any) => {
  const recipeData = recipes.filter((recipe) => {
    console.log(res.params);
    // return recipe.id == res.params.
    return recipe.id == res.params.id;
  });

  console.log(recipeData);

  let result =
    recipeData.length === 0
      ? { result: "no recipe found..." }
      : {
          result: recipeData,
        };

  return NextResponse.json(result);
};
