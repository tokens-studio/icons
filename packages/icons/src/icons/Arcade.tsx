import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgArcade = ({
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
			d='M7.33331 5.66667L6.53331 6.00001L1.56779 8.25707C1.42499 8.32194 1.33331 8.46434 1.33331 8.6212V8.71214C1.33331 8.869 1.42499 9.0114 1.56779 9.07627L7.44825 11.7492C7.79878 11.9085 8.20118 11.9085 8.55171 11.7492L14.4322 9.07627C14.575 9.0114 14.6666 8.869 14.6666 8.71214V8.6212C14.6666 8.46434 14.575 8.32194 14.4322 8.25707L9.46665 6.00001L8.66665 5.66667'
			stroke='currentColor'
		/>
		<path
			d='M14.6666 8.66667V11.408C14.6666 11.5655 14.5743 11.7082 14.4308 11.7728L8.54711 14.4205C8.19918 14.577 7.80078 14.577 7.45285 14.4205L1.56917 11.7728C1.42563 11.7082 1.33331 11.5655 1.33331 11.408V8.66667'
			stroke='currentColor'
		/>
		<path
			d='M8 5.33333C6.8954 5.33333 6 4.43789 6 3.33333C6 2.22876 6.8954 1.33333 8 1.33333C9.1046 1.33333 10 2.22876 10 3.33333C10 4.43789 9.1046 5.33333 8 5.33333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33331 5.33333V8.66666C7.33331 9.03486 7.63178 9.33333 7.99998 9.33333C8.36818 9.33333 8.66665 9.03486 8.66665 8.66666V5.33333'
			stroke='currentColor'
		/>
		<path
			d='M10.6667 8.66667H11.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgArcade;
