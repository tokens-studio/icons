import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgChurch = ({
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
			d='M8.00002 3.99998L2.85469 7.21578C2.73773 7.28891 2.66669 7.41711 2.66669 7.55498V14.2666C2.66669 14.4876 2.84577 14.6666 3.06669 14.6666H8.00002M8.00002 3.99998L13.1454 7.21578C13.2623 7.28891 13.3334 7.41711 13.3334 7.55498V14.2666C13.3334 14.4876 13.1543 14.6666 12.9334 14.6666H8.00002M8.00002 3.99998V2.66665M8.00002 14.6666V11.3333M8.00002 2.66665V1.33331M8.00002 2.66665H6.66669M8.00002 2.66665H9.33335'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 11.34L10.6734 11.3326'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 8.67335L10.6734 8.66595'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 8.67335L8.00667 8.66595'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33331 8.67335L5.33998 8.66595'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33331 11.34L5.33998 11.3326'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgChurch;
