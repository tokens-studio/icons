import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWash = ({
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
			d='M14.6666 3.33325L13.3636 11.5423C13.2608 12.1899 12.7025 12.6666 12.0467 12.6666H3.95313C3.29744 12.6666 2.73907 12.1899 2.63628 11.5423L1.33325 3.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 7.33325C12.6667 7.33325 11 5.33325 11 5.33325C11 5.33325 9.56753 7.33325 8 7.33325C6.43249 7.33325 5 5.33325 5 5.33325C5 5.33325 3.33333 7.33325 2 7.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgWash;
