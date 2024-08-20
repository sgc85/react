import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton"; // Updated the name to PascalCase

const GameGrid = () => {
  const { error, games, loading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {loading &&
          skeletons.map((skeleton) => (
            <GameCardSkeleton key={skeleton} /> // Corrected component usage
          ))}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
