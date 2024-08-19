import {
  FaWindows,
  FaLinux,
  FaXbox,
  FaPlaystation,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
//import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe, BsNintendoSwitch  } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon  } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string ] : IconType} = {
    playstation: FaPlaystation,
    xbox: FaXbox,
    pc: FaWindows,
    mac: FaApple,
    nintendo: BsNintendoSwitch,
    ios: MdPhoneIphone,
    web: BsGlobe,
    linux: FaLinux,
    android: FaAndroid
  };
  return (
    <HStack marginY={3}>
      {platforms.map((platform) => (
        <Icon  key={platform.id} as = {iconMap[platform.slug] } color = 'gray.500' />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
