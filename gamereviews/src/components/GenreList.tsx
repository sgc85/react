// import useData from "../hooks/useData";
// import { Genre } from "../hooks/useGenres";
import { HStack, List, ListItem, Image, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";

interface Props {
  onSelectGenre : (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ( {onSelectGenre, selectedGenre } : Props) => {
  const { data, loading, error } = useGenres();

  if (loading) return <Spinner />;

  if (error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={1}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedUrl(genre.image_background)}
            />
            <Button fontWeight={(genre.id === selectedGenre?.id) ? "bold" : "normal"} onClick={ () => onSelectGenre(genre)} variant='link' fontSize="lg">{genre.name} </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
