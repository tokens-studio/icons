import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAirplay = ({
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
			d='M4 11.333H2V2.667h12v8.666h-2'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='m5.748 12.712 1.92-2.88a.4.4 0 0 1 .665 0l1.92 2.88a.4.4 0 0 1-.334.621H6.081a.4.4 0 0 1-.333-.622Z'
		/>
	</svg>
);
export default SvgAirplay;
