import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUserXmark = ({
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
			d='M13.4142 8.08085L14.8284 6.66665M14.8284 6.66665L16.2427 5.25244M14.8284 6.66665L13.4142 5.25244M14.8284 6.66665L16.2427 8.08085'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.66669 13.3333V12.6667C1.66669 10.0893 3.75603 8 6.33335 8C8.91069 8 11 10.0893 11 12.6667V13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.33335 8.00008C7.80609 8.00008 9.00002 6.80615 9.00002 5.33341C9.00002 3.86065 7.80609 2.66675 6.33335 2.66675C4.86059 2.66675 3.66669 3.86065 3.66669 5.33341C3.66669 6.80615 4.86059 8.00008 6.33335 8.00008Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgUserXmark;
