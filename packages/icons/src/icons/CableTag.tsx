import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCableTag = ({
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
			d='M7.77782 5.33334L6.66669 8.00001H9.33335L8.22222 10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCableTag;
