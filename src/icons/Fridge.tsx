import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFridge = ({
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
			d='M6.667 9.333H6M6.667 4H6'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M3.333 6.667V1.733c0-.22.18-.4.4-.4h8.534c.22 0 .4.18.4.4v4.934m-9.334 0v7.6c0 .22.18.4.4.4h8.534a.4.4 0 0 0 .4-.4v-7.6m-9.334 0h9.334'
		/>
	</svg>
);
export default SvgFridge;
