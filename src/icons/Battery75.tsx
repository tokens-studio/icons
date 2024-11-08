import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBattery75 = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
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
			d='M16.333 6.667v2.666'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M1.667 10.667V5.333C1.667 4.597 2.264 4 3 4h10c.736 0 1.333.597 1.333 1.333v5.334c0 .736-.597 1.333-1.333 1.333H3a1.333 1.333 0 0 1-1.333-1.333Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M3.667 9.6V6.4c0-.22.179-.4.4-.4h5.866c.221 0 .4.18.4.4v3.2a.4.4 0 0 1-.4.4H4.067a.4.4 0 0 1-.4-.4Z'
		/>
	</svg>
);
export default SvgBattery75;
