import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Like = () => {
  const [getHeartState, setHeartState] = useState(false);

  const updateHeart = () => {
    setHeartState(!getHeartState);
  };

  return (
    <div onClick={updateHeart}>
      {getHeartState === true ? (
        <FaHeart size={50} color="red" />
      ) : (
        <FaRegHeart size={50} color="red" />
      )}
    </div>
  );
};

export default Like;
