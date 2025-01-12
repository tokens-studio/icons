import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEvPlugXmark = ({
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
		<path d='M6.66666 8.76923V14' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M10 5.58968V7.43587C10 8.1722 9.40308 8.7692 8.66668 8.7692H4.66668C3.9303 8.7692 3.33334 8.1722 3.33334 7.43587V5.58968C3.33334 4.8533 3.9303 4.25635 4.66668 4.25635H8.66668C9.40308 4.25635 10 4.8533 10 5.58968Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path d='M8.88895 4.25641V2' stroke='currentColor' strokeLinecap='round' />
		<path d='M4.44443 4.25641V2' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M10.0809 14.2427L11.4951 12.8285M11.4951 12.8285L12.9093 11.4142M11.4951 12.8285L10.0809 11.4142M11.4951 12.8285L12.9093 14.2427'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgEvPlugXmark;
