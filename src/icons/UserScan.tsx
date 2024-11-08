import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUserScan = ({
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
			d='M4 2H2v2M12 2h2v2M4 14H2v-2M4.667 12v-.667a3.333 3.333 0 0 1 6.666 0V12'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4M12 14h2v-2'
		/>
	</svg>
);
export default SvgUserScan;
