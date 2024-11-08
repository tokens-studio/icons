import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBrightCrown = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
		height={18}
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
			d='M15.667 9h.666M9 2.333v-.666M9 16.333v-.666M14.333 14.333l-.666-.666M14.333 3.667l-.666.666M3.667 14.333l.666-.666M3.667 3.667l.666.666M1.667 9h.666M12.2 11.333l.8-4.666-2.8 1.4-1.2-1.4-1.2 1.4-2.8-1.4.8 4.666z'
		/>
	</svg>
);
export default SvgBrightCrown;
