import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBishop = ({
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
			strokeWidth={1.5}
			d='M4.667 11.333h6.666M6 8h4M8 2v-.667M7.703 2.388c-.614.834-1.945 2.829-1.665 4.112C6.301 7.706 7.346 8 8 8s1.7-.294 1.962-1.5c.28-1.283-1.05-3.278-1.665-4.112a.365.365 0 0 0-.594 0ZM11.867 14.667H4.133a.411.411 0 0 1-.333-.647c.877-1.244 2.709-3.99 2.995-5.622.038-.218.217-.398.438-.398h1.534c.22 0 .4.18.438.398.286 1.631 2.118 4.378 2.995 5.622a.411.411 0 0 1-.333.647Z'
		/>
	</svg>
);
export default SvgBishop;
