import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHexagonDice = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
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
			d='M7.8 1.782a.4.4 0 0 1 .4 0l5.95 3.436a.4.4 0 0 1 .2.346v6.872a.4.4 0 0 1-.2.346L8.2 16.218a.4.4 0 0 1-.4 0l-5.95-3.436a.4.4 0 0 1-.2-.346V5.564a.4.4 0 0 1 .2-.346z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.333 11H4.667L8 5.667z'
		/>
		<path
			stroke='currentColor'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M1.667 5.333 8 5.667M1.667 5.333l3 5.667M14.333 5.333l-3 5.667M14.333 5.333 8 5.667v-4M14.333 12.667l-3-1.667M1.667 12.667l3-1.667M4.667 11 8 16.333 11.333 11'
		/>
	</svg>
);
export default SvgHexagonDice;
