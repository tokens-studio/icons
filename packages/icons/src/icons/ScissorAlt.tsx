import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgScissorAlt = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M6.82399 5.33333C7.14065 4.97949 7.33325 4.51223 7.33325 4C7.33325 2.89543 6.43782 2 5.33325 2C4.22869 2 3.33325 2.89543 3.33325 4C3.33325 5.10457 4.22869 6 5.33325 6C5.92559 6 6.45778 5.7425 6.82399 5.33333ZM6.82399 5.33333L13.3333 10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.82399 10.6667C7.14065 11.0206 7.33325 11.4878 7.33325 12C7.33325 13.1046 6.43782 14 5.33325 14C4.22869 14 3.33325 13.1046 3.33325 12C3.33325 10.8954 4.22869 10 5.33325 10C5.92559 10 6.45778 10.2576 6.82399 10.6667ZM6.82399 10.6667L13.3333 5.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgScissorAlt;
