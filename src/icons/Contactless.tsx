import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgContactless = ({
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
			d='M10 14.333c2.667-3.666 2.667-9 0-12.666M7.667 13.333C10 10 10 6 7.667 2.667M5.667 12c1.777-2.5 1.777-5.5 0-8M3.667 10.667c1-1.667 1-3.667 0-5.334'
		/>
	</svg>
);
export default SvgContactless;
