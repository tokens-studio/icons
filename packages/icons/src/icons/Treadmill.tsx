import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTreadmill = ({
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
			d='M8.66665 3.99992C9.40305 3.99992 9.99998 3.40297 9.99998 2.66659C9.99998 1.93021 9.40305 1.33325 8.66665 1.33325C7.93025 1.33325 7.33331 1.93021 7.33331 2.66659C7.33331 3.40297 7.93025 3.99992 8.66665 3.99992Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.07545 4.84473L4.86993 7.60152L7.62678 10.3584L6.24835 13.3909'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.94025 5.67177L5.19817 3.46631L7.07545 4.84472L9.00531 7.05024H10.1531'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.59433 9.80688L3.76728 10.3583H1.56183'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.22852 14.3582L12.434 13.0249V5.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.9276 4L12.434 5.33333L11.3333 6.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.9276 14.4735L12.434 13.0249'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTreadmill;
