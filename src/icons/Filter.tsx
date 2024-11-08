import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFilter = ({
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
			d='M2.666 2h10.667c.368 0 .667.298.667.667v1.057c0 .177-.07.346-.195.471L9.528 8.471a.67.67 0 0 0-.195.472v4.203a.667.667 0 0 1-.828.647L7.17 13.46a.67.67 0 0 1-.505-.647v-3.87a.67.67 0 0 0-.195-.472L2.195 4.195A.67.67 0 0 1 2 3.724V2.667C2 2.298 2.298 2 2.666 2'
		/>
	</svg>
);
export default SvgFilter;
