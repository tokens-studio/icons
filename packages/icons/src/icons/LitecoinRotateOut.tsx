import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLitecoinRotateOut = ({
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
			d='M14.1119 5.33337C13.0831 2.97883 10.7337 1.33337 7.99993 1.33337C4.54306 1.33337 1.70069 3.96449 1.36621 7.33337'
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
			d='M1.9209 10.6666C2.94965 13.0212 5.29909 14.6666 8.03286 14.6666C11.4897 14.6666 14.3321 12.0355 14.6666 8.66663'
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
			d='M7 4.66663V10.9333C7 11.1542 7.17907 11.3333 7.4 11.3333H10.3333'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M5.66675 8.66671L8.66675 7.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgLitecoinRotateOut;
