import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEvPlug = ({
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
		<path d='M8 8.76923V14' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M11.3333 5.58968V7.43587C11.3333 8.1722 10.7364 8.7692 9.99999 8.7692H5.99999C5.26361 8.7692 4.66666 8.1722 4.66666 7.43587V5.58968C4.66666 4.8533 5.26361 4.25635 5.99999 4.25635H9.99999C10.7364 4.25635 11.3333 4.8533 11.3333 5.58968Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path d='M10.2223 4.25641V2' stroke='currentColor' strokeLinecap='round' />
		<path d='M5.77774 4.25641V2' stroke='currentColor' strokeLinecap='round' />
	</svg>
);
export default SvgEvPlug;
