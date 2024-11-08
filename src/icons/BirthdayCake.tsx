import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBirthdayCake = ({
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
			d='M2.667 11v2.333c0 .737.597 1.334 1.333 1.334h8c.736 0 1.333-.597 1.333-1.334V11M2 9.333v-.666c0-.737.597-1.334 1.333-1.334h9.334c.736 0 1.333.597 1.333 1.334v.666M8 5.333v2M8 5.333c.842 0 1.333-.645 1.333-1.75S8 1.333 8 1.333 6.667 2.48 6.667 3.583 7.158 5.333 8 5.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6 9.333a2 2 0 0 1-4 0M10 9.333a2 2 0 1 1-4 0M14 9.333a2 2 0 1 1-4 0'
		/>
	</svg>
);
export default SvgBirthdayCake;
