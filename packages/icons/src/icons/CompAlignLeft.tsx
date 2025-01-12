import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCompAlignLeft = ({
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
			d='M2 14.6666V1.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6667 10.6666H6.00001C5.26363 10.6666 4.66667 10.0697 4.66667 9.33331V6.66665C4.66667 5.93027 5.26363 5.33331 6.00001 5.33331H12.6667C13.4031 5.33331 14 5.93027 14 6.66665V9.33331C14 10.0697 13.4031 10.6666 12.6667 10.6666Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgCompAlignLeft;
