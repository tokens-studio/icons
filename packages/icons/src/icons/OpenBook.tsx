import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOpenBook = ({
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
			d='M8 14V4.66671C8 3.93033 8.59693 3.33337 9.33333 3.33337H14.2667C14.4876 3.33337 14.6667 3.51246 14.6667 3.73337V12.4762'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M7.99999 14V4.66671C7.99999 3.93033 7.40306 3.33337 6.66666 3.33337H1.73333C1.51241 3.33337 1.33333 3.51246 1.33333 3.73337V12.4762'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M9.33333 12.6666H14.6667'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M6.66666 12.6666H1.33333'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M8 14C8 13.2636 8.59693 12.6666 9.33333 12.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00001 14C8.00001 13.2636 7.40307 12.6666 6.66667 12.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgOpenBook;
