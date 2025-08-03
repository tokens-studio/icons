import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDragHorizontalFilled = ({
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
			fillRule='evenodd'
			clipRule='evenodd'
			d='M5 14.5C6.10455 14.5 7 15.3954 7 16.5C7 17.6046 6.10455 18.5 5 18.5C3.89543 18.5 3 17.6046 3 16.5C3 15.3954 3.89543 14.5 5 14.5ZM14 16.5C14 15.3954 13.1046 14.5 12 14.5C10.8954 14.5 10 15.3954 10 16.5C10 17.6046 10.8954 18.5 12 18.5C13.1046 18.5 14 17.6046 14 16.5ZM21 16.5C21 15.3954 20.1046 14.5 19 14.5C17.8954 14.5 17 15.3954 17 16.5C17 17.6046 17.8954 18.5 19 18.5C20.1046 18.5 21 17.6046 21 16.5Z'
			fill='currentColor'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M5 5.5C6.10455 5.5 7 6.39545 7 7.5C7 8.60455 6.10455 9.5 5 9.5C3.89543 9.5 3 8.60455 3 7.5C3 6.39545 3.89543 5.5 5 5.5ZM14 7.5C14 6.39545 13.1046 5.5 12 5.5C10.8954 5.5 10 6.39545 10 7.5C10 8.60455 10.8954 9.5 12 9.5C13.1046 9.5 14 8.60455 14 7.5ZM21 7.5C21 6.39545 20.1046 5.5 19 5.5C17.8954 5.5 17 6.39545 17 7.5C17 8.60455 17.8954 9.5 19 9.5C20.1046 9.5 21 8.60455 21 7.5Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgDragHorizontalFilled;
