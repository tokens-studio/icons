import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLock = ({
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
			d='M10.6667 7.99996H11.6C11.8209 7.99996 12 8.17903 12 8.39996V12.9333C12 13.1542 11.8209 13.3333 11.6 13.3333H4.4C4.17909 13.3333 4 13.1542 4 12.9333V8.39996C4 8.17903 4.17909 7.99996 4.4 7.99996H5.33333M10.6667 7.99996V5.33329C10.6667 4.44441 10.1333 2.66663 8 2.66663C5.86667 2.66663 5.33333 4.44441 5.33333 5.33329V7.99996M10.6667 7.99996H5.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgLock;
