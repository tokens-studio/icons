import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDrone = ({
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
			strokeWidth={1.5}
			d='M8.975 11.333h-1.95a.4.4 0 0 1-.398-.356l-.578-5.2a.4.4 0 0 1 .398-.444h3.106a.4.4 0 0 1 .398.444l-.578 5.2a.4.4 0 0 1-.398.356Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.5}
			strokeWidth={1.5}
			d='M3 4.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m3 3 3 2.333M3 13l3.333-2.667M13 3l-3 2.333M13 13l-3.333-2.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.5}
			strokeWidth={1.5}
			d='M3 14.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334M13 4.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334M13 14.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334'
		/>
	</svg>
);
export default SvgDrone;
