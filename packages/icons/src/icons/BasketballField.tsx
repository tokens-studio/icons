import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBasketballField = ({
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
			d='M8.00004 3.33334H14.2667C14.4876 3.33334 14.6667 3.51243 14.6667 3.73334V12.2667C14.6667 12.4876 14.4876 12.6667 14.2667 12.6667H8.00004M8.00004 3.33334H1.73337C1.51246 3.33334 1.33337 3.51243 1.33337 3.73334V12.2667C1.33337 12.4876 1.51246 12.6667 1.73337 12.6667H8.00004M8.00004 3.33334V12.6667'
			stroke='currentColor'
		/>
		<path
			d='M8 10C6.8954 10 6 9.1046 6 8C6 6.8954 6.8954 6 8 6C9.1046 6 10 6.8954 10 8C10 9.1046 9.1046 10 8 10Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33337 11.3333C3.17432 11.3333 4.66671 9.84092 4.66671 7.99999C4.66671 6.15904 3.17432 4.66666 1.33337 4.66666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6667 11.3333C12.8258 11.3333 11.3334 9.84092 11.3334 7.99999C11.3334 6.15904 12.8258 4.66666 14.6667 4.66666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBasketballField;
