import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCloset = ({
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
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6 9.333h-.667M10.667 9.333H10'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M8 1.333h5.6c.22 0 .4.18.4.4v12.534a.4.4 0 0 1-.4.4H8M8 1.333H2.4a.4.4 0 0 0-.4.4v12.534c0 .22.18.4.4.4H8M8 1.333v13.334'
		/>
	</svg>
);
export default SvgCloset;
