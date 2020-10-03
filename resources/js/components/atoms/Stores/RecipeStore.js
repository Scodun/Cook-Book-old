import { axios } from "../../atoms";

import { observable } from "mobx";

class RecipeStore {
    @observable recipes = [];

    async addRecipe(values) {
        await axios.post("/api/recipe/create", values);
    }

    async fetchMyRecipes() {
        let resp = await axios.get("/api/recipes/getForUser");
        this.recipes = resp.data;
    }
}

export default new RecipeStore();
