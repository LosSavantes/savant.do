import Icon from "parts/Icon";
import { Children } from "react";

export default function Heading(props) {
  const { children } = props;
  return (
    <h2 className="mb-4" id="certification">
      <div className="icon-stack bg-primary text-white mr-2">
        <Icon name="arrow-right" />
      </div>
      {children}
    </h2>
  );
};
