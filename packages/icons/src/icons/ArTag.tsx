import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgArTag = ({
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
			d='M1.33331 10V6C1.33331 3.79086 3.12417 2 5.33331 2H10.6666C12.8758 2 14.6666 3.79086 14.6666 6V10C14.6666 12.2091 12.8758 14 10.6666 14H5.33331C3.12417 14 1.33331 12.2091 1.33331 10Z'
			stroke='currentColor'
		/>
		<path
			d='M8.66669 10.3333V8.46667M8.66669 8.46667V5.66667H10.5714C11.0476 5.66667 12 5.66667 12 7.06667C12 8.46667 11.0476 8.46667 10.5714 8.46667M8.66669 8.46667C8.98415 8.46667 9.80955 8.46667 10.5714 8.46667M10.5714 8.46667L12 10.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33331 10.3333L6.61903 8.66667M6.61903 8.66667L5.33331 5.66667L4.0476 8.66667M6.61903 8.66667H4.0476M3.33331 10.3333L4.0476 8.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgArTag;
