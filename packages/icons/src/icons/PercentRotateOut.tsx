import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPercentRotateOut = ({
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
			d='M14.112 5.33337C13.0832 2.97883 10.7338 1.33337 8.00002 1.33337C4.54312 1.33337 1.70075 3.96449 1.36627 7.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 5.33329H14.2667C14.4876 5.33329 14.6667 5.15421 14.6667 4.93329V2.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.92096 10.6666C2.94971 13.0212 5.29915 14.6666 8.03292 14.6666C11.4898 14.6666 14.3322 12.0355 14.6667 8.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.03288 10.6666H1.76621C1.5453 10.6666 1.36621 10.8457 1.36621 11.0666V13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.66665 10C9.85071 10 9.99998 9.85077 9.99998 9.66671C9.99998 9.48264 9.85071 9.33337 9.66665 9.33337C9.48258 9.33337 9.33331 9.48264 9.33331 9.66671C9.33331 9.85077 9.48258 10 9.66665 10Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.33333 6.66667C6.51743 6.66667 6.66667 6.51743 6.66667 6.33333C6.66667 6.14924 6.51743 6 6.33333 6C6.14924 6 6 6.14924 6 6.33333C6 6.51743 6.14924 6.66667 6.33333 6.66667Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 6L6 10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPercentRotateOut;
