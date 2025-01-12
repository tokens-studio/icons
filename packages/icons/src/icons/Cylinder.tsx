import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCylinder = ({
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
			d='M7.99999 1.33331C13.3333 1.33331 13.3333 3.33331 13.3333 3.33331C13.3333 3.33331 13.3333 5.33331 7.99999 5.33331C2.66666 5.33331 2.66666 3.33331 2.66666 3.33331C2.66666 3.33331 2.66666 1.33331 7.99999 1.33331Z'
			stroke='currentColor'
		/>
		<path
			d='M7.99999 10.6667C13.3333 10.6667 13.3333 12.6667 13.3333 12.6667C13.3333 12.6667 13.3333 14.6667 7.99999 14.6667C2.66666 14.6667 2.66666 12.6667 2.66666 12.6667C2.66666 12.6667 2.66666 10.6667 7.99999 10.6667Z'
			stroke='currentColor'
		/>
		<path
			d='M13.3333 3.33331V12.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.66666 3.33331V12.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCylinder;
