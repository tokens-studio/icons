import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLabel = ({
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
			d='M2 11.6V4.4c0-.22.18-.4.4-.4h8.72a.4.4 0 0 1 .332.178l2.4 3.6a.4.4 0 0 1 0 .444l-2.4 3.6a.4.4 0 0 1-.333.178H2.4a.4.4 0 0 1-.4-.4Z'
		/>
	</svg>
);
export default SvgLabel;
