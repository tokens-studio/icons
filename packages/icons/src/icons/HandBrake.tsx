import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHandBrake = ({
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
			d='M9 10.6667V9.33333V8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9 6.00004V5.66671V5.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.00008 13.3333C11.9456 13.3333 14.3334 10.9455 14.3334 7.99996C14.3334 5.05444 11.9456 2.66663 9.00008 2.66663C6.05456 2.66663 3.66675 5.05444 3.66675 7.99996C3.66675 10.9455 6.05456 13.3333 9.00008 13.3333Z'
			stroke='currentColor'
		/>
		<path
			d='M3.63555 3C2.41411 4.30992 1.66675 6.06768 1.66675 8C1.66675 9.93233 2.41411 11.6901 3.63555 13'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.3645 3C15.5859 4.30992 16.3333 6.06768 16.3333 8C16.3333 9.93233 15.5859 11.6901 14.3645 13'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgHandBrake;
