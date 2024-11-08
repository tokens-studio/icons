import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBbq = ({
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
			d='m5.667 9.667-2.334 5M5.333 4S6 3.292 6 2.667c0-.89-.667-1.334-.667-1.334M8 4s.667-.708.667-1.333c0-.89-.667-1.334-.667-1.334M10.667 4s.666-.708.666-1.333c0-.89-.666-1.334-.666-1.334'
		/>
		<path
			stroke='currentColor'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11 11.667H5'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m10.333 9.667 1.4 3M12.333 14.667a1 1 0 1 0 0-2 1 1 0 0 0 0 2'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M8 10a4.667 4.667 0 0 0 4.65-4.267.375.375 0 0 0-.383-.4H3.733c-.22 0-.401.18-.383.4A4.667 4.667 0 0 0 8 10Z'
		/>
	</svg>
);
export default SvgBbq;
