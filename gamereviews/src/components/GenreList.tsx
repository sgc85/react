// import useData from "../hooks/useData";
// import { Genre } from "../hooks/useGenres";
import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";

const GenreList = () => {
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
            <Text fontSize="lg">{genre.name} </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
