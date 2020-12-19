export default function Icon(props) {
	const {
    name = "bootstrap",
    size = 18,
    color = "currentColor",
    ...rest
  } = props;
	return (
    <svg
      className="bi"
      width={size}
      height={size}
      fill={color}
      dangerouslySetInnerHTML={{
        __html: `<use xlink:href="/assets/icons/sprite.svg#${name}" />`,
      }}
      {...rest}
    />
  );
};
