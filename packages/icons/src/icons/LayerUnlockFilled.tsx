import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLayerUnlockFilled = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 2 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M20 18C20 19.6569 18.6569 21 17 21H7C5.34315 21 4 19.6569 4 18V13C4 11.3431 5.34315 10 7 10H15V6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V10C18.6569 10 20 11.3431 20 13V18Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgLayerUnlockFilled;
