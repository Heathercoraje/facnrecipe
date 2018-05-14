BEGIN;

DROP TABLE IF EXISTS recipe;

CREATE TABLE IF NOT EXISTS recipe (
    recipe_id           SERIAL     PRIMARY KEY,
    recipe_name         TEXT       NOT NULL,
    recipe_ingredients  TEXT       NOT NULL,
    recipe_directions   TEXT       NOT NULL,
    recipe_origin       TEXT       NOT NULL
);



INSERT INTO recipe (recipe_name, recipe_ingredients, recipe_directions, recipe_origin) VALUES ('Falafel', '1 pound (about 2 cups) dry chickpeas/garbanzo beans - you must start with dry', 'Fill a medium saucepan 3 inches up with oil. Heat the oil on medium-high until it bubbles softly. Carefully drop the falafel patties in the oil, let them fry for about 3-4 minutes or so until medium brown. Avoid crowding the falafel in the saucepan, fry them in batches if necessary.', 'Arabic');
INSERT INTO recipe (recipe_name, recipe_ingredients, recipe_directions, recipe_origin) VALUES ('Sushi', 'Salmon or tuna, nori paper, cucumber', 'Inside out sushi (or Uramaki ) is similar to “maki sushi”, except that the rice is on the outside of the nori, and it is usually prepared with more than two fillings – for example salmon, cucumber and, what seems to be a slice of pineapple. It is sometimes topped with a thin slice of fish, seafood or vegetable like avocado or sweet potato.', 'Asian');
INSERT INTO recipe (recipe_name, recipe_ingredients, recipe_directions, recipe_origin) VALUES ('Spaghetti Pomodoro', '2 tablespoons extra-virgin olive oil, plus more for drizzling, 28-ounce can best-quality whole tomatoes, lightly pulsed in a blender', 'Place the olive oil and garlic in a 2-quart saucepan over medium heat. Swirl the pan to coat the garlic with oil and heat until garlic sizzles but does not brown, about 30 seconds. Add the red pepper flakes and stir. Add the tomatoes, salt, black pepper, and sugar and stir to combine. Bring to a boil and reduce the heat to a simmer. Cook for at least 20 minutes but no more than 30. Add the basil for last 5 minutes of cooking. Remove the basil before serving.', 'Italian');
INSERT INTO recipe (recipe_name, recipe_ingredients, recipe_directions, recipe_origin) VALUES ('Full breakfast', 'bacon, sausages, eggs and a beverage such as coffee or tea', '
A full English breakfast with fried egg, sausage, white and black pudding, bacon, mushrooms, baked beans, hash browns, toast, and half a tomato
The traditional full English breakfast includes bacon (traditionally back bacon), fried, poached or scrambled eggs, fried or grilled tomatoes, fried mushrooms, fried bread or buttered toast, and sausages (also called "bangers")', 'British');

COMMIT;
