import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBrainElectricity = ({
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
			d='M4.667 9.333a2 2 0 1 0 .666 3.887'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M2.843 10.403A2.667 2.667 0 0 1 2.26 5.98M2.28 5.925a1.667 1.667 0 0 1 2.386-2.259M4.825 3.71A1.667 1.667 0 1 1 8 3v10.333M5.333 13.333a1.333 1.333 0 1 0 2.667 0'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 4.667a2 2 0 0 0 2 2M13.74 5.98A2.66 2.66 0 0 1 14.667 8c0 .469-.121.91-.334 1.292M13.72 5.925a1.667 1.667 0 0 0-2.386-2.259M8 3a1.667 1.667 0 1 1 3.175.71M9.333 14.667A1.333 1.333 0 0 1 8 13.333M12.444 10.667l-1.11 2H14l-1.111 2'
		/>
	</svg>
);
export default SvgBrainElectricity;
