import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDatabaseStar = ({
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
			d='M2.66663 4V8C2.66663 8 2.66663 10 7.33329 10C12 10 12 8 12 8V4'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33329 2C12 2 12 4 12 4C12 4 12 6 7.33329 6C2.66663 6 2.66663 4 2.66663 4C2.66663 4 2.66663 2 7.33329 2Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33329 14C2.66663 14 2.66663 12 2.66663 12V8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.5371 11.4089L12.1431 10.1238C12.2209 9.95875 12.4457 9.95875 12.5235 10.1238L13.1296 11.4089L14.485 11.6162C14.6589 11.6428 14.7282 11.8665 14.6023 11.9949L13.6217 12.9945L13.8531 14.4067C13.8829 14.588 13.701 14.7264 13.5454 14.6407L12.3333 13.9736L11.1213 14.6407C10.9657 14.7264 10.7838 14.588 10.8135 14.4067L11.0449 12.9945L10.0643 11.9949C9.93846 11.8665 10.0077 11.6428 10.1817 11.6162L11.5371 11.4089Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDatabaseStar;
