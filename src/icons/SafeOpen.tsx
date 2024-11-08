import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSafeOpen = ({
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
			d='M2 12.667V3.333C2 2.597 2.597 2 3.333 2h5.334C9.403 2 10 2.597 10 3.333v9.334C10 13.403 9.403 14 8.667 14H3.333A1.333 1.333 0 0 1 2 12.667Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M8.667 2h4C13.403 2 14 2.597 14 3.333v9.334c0 .736-.597 1.333-1.333 1.333h-4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5 10c-.552 0-1-.895-1-2s.448-2 1-2 1 .895 1 2-.448 2-1 2M8.667 9.333V6.667M5.667 6.333l.666-.666M4.333 6.333l-.666-.666M3.667 10.333l.666-.666M6.333 10.333l-.666-.666M1.333 5.333H2M1.333 4H2M2 10.667h-.667M2 12h-.667'
		/>
	</svg>
);
export default SvgSafeOpen;
