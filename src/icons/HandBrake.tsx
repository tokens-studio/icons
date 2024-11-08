import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHandBrake = ({
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
			d='M9 10.667V8M9 6v-.667'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M9 13.333A5.333 5.333 0 1 0 9 2.667a5.333 5.333 0 0 0 0 10.666Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M3.636 3a7.3 7.3 0 0 0-1.97 5c0 1.932.748 3.69 1.97 5M14.365 3a7.3 7.3 0 0 1 1.968 5c0 1.932-.747 3.69-1.968 5'
		/>
	</svg>
);
export default SvgHandBrake;
