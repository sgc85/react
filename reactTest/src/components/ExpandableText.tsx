import { useState } from "react";

interface Props {
  children: string;
  maxSize?: number;
}

const ExpandableText = ({ children, maxSize = 10 }: Props) => {
  const [viewSize, setMaxSize] = useState(maxSize);
  return (
    <div>
      <p>{children.slice(0, viewSize)}</p>
      <button onClick={() => setMaxSize(children.length)}>Show All</button>{" "}
    </div>
  );
};


export default ExpandableText;
