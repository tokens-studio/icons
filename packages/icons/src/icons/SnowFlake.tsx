import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSnowFlake = ({
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
			d='M2 4.66659L4.33333 5.99992M4.33333 5.99992L8 7.99992M4.33333 5.99992L2 6.66658M4.33333 5.99992L4 3.66659M14 11.3333L11.6667 9.99992M11.6667 9.99992L8 7.99992M11.6667 9.99992L12 12.3333M11.6667 9.99992L14 9.33325M8 7.99992L4.33333 9.99992M8 7.99992V3.33325M8 7.99992V12.3333M8 7.99992L11.6667 5.99992M4.33333 9.99992L2 11.3333M4.33333 9.99992L2 9.33325M4.33333 9.99992L4 12.3333M8 3.33325V1.33325M8 3.33325L6.33333 2.66659M8 3.33325L9.66667 2.66659M8 12.3333V14.6666M8 12.3333L9.66667 13.3333M8 12.3333L6.33333 13.3333M11.6667 5.99992L14 4.66659M11.6667 5.99992L14 6.66658M11.6667 5.99992L12 3.66659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSnowFlake;
