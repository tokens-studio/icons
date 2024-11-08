import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPlaystationGamepad = ({
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
			d='M12.667 11.667c1.667 2.333 4.299.61 3.667-1.667-.95-3.42-1.467-5.323-1.736-6.328a1.355 1.355 0 0 0-1.306-1.005H4.708c-.612 0-1.145.416-1.294 1.01A250 250 0 0 1 1.763 10c-.633 2.277 2 4 3.667 1.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.667 2.667V4c0 .736-.597 1.333-1.334 1.333H7.667A1.333 1.333 0 0 1 6.333 4V2.667M6.333 10.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667M11.667 10.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667'
		/>
	</svg>
);
export default SvgPlaystationGamepad;
