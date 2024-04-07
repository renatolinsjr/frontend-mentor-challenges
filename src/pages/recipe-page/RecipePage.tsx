import { Container } from "../../components/pages/RecipePage/Container";
import { Description } from "../../components/pages/RecipePage/Description";
import { ImageContainer } from "../../components/pages/RecipePage/ImageContainer";
import { List } from "../../components/pages/RecipePage/List";
import { Spacer } from "../../components/pages/RecipePage/Spacer";
import { Table } from "../../components/pages/RecipePage/Table";
import { Title } from "../../components/pages/RecipePage/Title";

interface Item {
  title: string;
  instruction: string;
}

type Ingredient = Omit<Item, "instruction">;

interface Items {
  preparation: Item[];
  ingredients: Ingredient[];
  instructions: Item[];
}

const items: Items = {
  preparation: [
    { title: "Total: ", instruction: "Approximately 10 minutes" },
    { title: "Preparation: ", instruction: "5 minutes" },
    { title: "Cooking: ", instruction: "5 minutes" },
  ],
  ingredients: [
    { title: "2-3 large eggs" },
    { title: "Salt, to taste" },
    { title: "Pepper, to taste" },
    { title: "1 tablespoon of butter or oil" },
    {
      title: "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
    },
  ],
  instructions: [
    {
      title: "Beat the eggs: ",
      instruction:
        "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      title: "Heat the pan: ",
      instruction:
        "Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      title: "Cook the omelette: ",
      instruction:
        "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      title: "Add fillings (optional): ",
      instruction:
        "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      title: "Fold and serve: ",
      instruction:
        "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      title: "Enjoy: ",
      instruction: "Serve hot, with additional salt and pepper if needed.",
    },
  ],
};

function RecipePage() {
  return (
    <div className="max-w-screen-xl my-0 mx-auto">
      <div className="lg:px-12">
        <ImageContainer />
      </div>

      <div className="p-12">
        <Title variant="hero">Simple Omelette Recipe</Title>
        <Spacer y={8} />
        <Description>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats
        </Description>
        <Spacer y={8} />
        <Container variant="solid">
          <Title variant="subtitle">Preparation time</Title>
          <List>
            {items.preparation.map((item) => (
              <>
                <Spacer y={3} />
                <List.Item key={item.title}>
                  <span className="font-bold">{item.title}</span>{" "}
                  {item.instruction}
                </List.Item>
              </>
            ))}
          </List>
        </Container>
        <Spacer y={8} />
        <Container>
          <Title>Ingredients</Title>
          <List>
            <Spacer y={3} />
            {items.ingredients.map((item) => (
              <>
                <Spacer y={3} />
                <List.Item key={item.title}>{item.title}</List.Item>
              </>
            ))}
          </List>
        </Container>
        <Spacer y={8} withDivider />
        <Container>
          <Spacer y={8} />
          <Title>Instructions</Title>
          <List ordered>
            <Spacer y={3} />
            {items.instructions.map((item) => (
              <>
                <Spacer y={3} />
                <List.Item>
                  <span className="font-bold ml-4">{item.title}</span>{" "}
                  {item.instruction}
                </List.Item>
              </>
            ))}
          </List>
        </Container>
        <Spacer y={8} withDivider />
        <Container>
          <Spacer y={8} />
          <Title>Nutrition</Title>
          <Spacer y={4} />
          <Description>
            The table below shows nutritional values per serving without the
            additional fillings.
          </Description>
          <Spacer y={4} />
          <Table />
        </Container>
      </div>
    </div>
  );
}

export default RecipePage;
