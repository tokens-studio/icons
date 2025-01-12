import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNavigator = ({
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
			d='M7.99998 14.6667C11.6819 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6819 1.33337 7.99998 1.33337C4.31808 1.33337 1.33331 4.31814 1.33331 8.00004C1.33331 11.6819 4.31808 14.6667 7.99998 14.6667Z'
			stroke='currentColor'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M11.9156 10.3168C12.2226 10.8966 11.6242 11.5376 11.0247 11.2711L7.99962 9.92662L4.97454 11.2711C4.37506 11.5376 3.77668 10.8966 4.08362 10.3168L7.38922 4.07296C7.64862 3.58294 8.35062 3.58294 8.61002 4.07296L11.9156 10.3168Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgNavigator;
