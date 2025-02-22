import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgForwardMessage = ({
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
			d='M4.66675 5.33331L8.00008 7.33331L11.3334 5.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66658 13.3334H2.66659C1.93021 13.3334 1.33325 12.7364 1.33325 12V4.00002C1.33325 3.26364 1.93021 2.66669 2.66659 2.66669H13.3333C14.0697 2.66669 14.6666 3.26364 14.6666 4.00002V8.57142'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M14.6667 11.4074H10.4667C8.06675 11.4074 8.06675 14.6666 10.4667 14.6666M14.6667 11.4074L12.5667 9.33331M14.6667 11.4074L12.5667 13.4814'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgForwardMessage;
