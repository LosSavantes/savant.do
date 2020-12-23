export default function A(props) {
	const { href, prefix, children, ...rest } = props;
	return (
    <a href={prefix + href} {...rest}>
      {children || href}
    </a>
  );
};
