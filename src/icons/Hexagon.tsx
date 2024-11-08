import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHexagon = ({
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
	</svg>
);
export default SvgHexagon;
