import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgComponent = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='m3.474 10.074-1.79-1.791a.4.4 0 0 1 0-.566l1.79-1.791a.4.4 0 0 1 .566 0l1.792 1.791a.4.4 0 0 1 0 .566L4.04 10.074a.4.4 0 0 1-.566 0ZM7.717 14.317l-1.791-1.792a.4.4 0 0 1 0-.565l1.791-1.792a.4.4 0 0 1 .566 0l1.791 1.792a.4.4 0 0 1 0 .565l-1.791 1.792a.4.4 0 0 1-.566 0ZM7.717 5.832 5.926 4.04a.4.4 0 0 1 0-.565l1.791-1.792a.4.4 0 0 1 .566 0l1.791 1.792a.4.4 0 0 1 0 .565L8.283 5.832a.4.4 0 0 1-.566 0ZM11.96 10.074l-1.792-1.791a.4.4 0 0 1 0-.566l1.792-1.791a.4.4 0 0 1 .565 0l1.792 1.791a.4.4 0 0 1 0 .566l-1.792 1.791a.4.4 0 0 1-.565 0Z'
		/>
	</svg>
);
export default SvgComponent;
