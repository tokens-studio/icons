import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTrekking = ({
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
			d='m12 6.667-2 1-2.667-2-.666 3.666 2.333 2 .333 3M12 5.667v8.666M6.667 11.333l-1.334 3M5.667 5.667C4.667 6.333 4 8 4 8l1.333.667M8 4.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666'
		/>
	</svg>
);
export default SvgTrekking;
