import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPost = ({
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
			d='m1.937 11.67 1.621-9.192c.128-.725.82-1.209 1.545-1.081l7.878 1.39c.725.127 1.21.819 1.082 1.544l-1.621 9.191a1.333 1.333 0 0 1-1.545 1.082l-7.878-1.39a1.333 1.333 0 0 1-1.082-1.544Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='m5.953 4.255 5.252.926M5.49 6.88l5.252.927M5.027 9.507l3.282.579'
		/>
	</svg>
);
export default SvgPost;
