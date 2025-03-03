import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgStyle = ({
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
			fillRule='evenodd'
			clipRule='evenodd'
			d='M3.33337 4.88885C3.33337 5.74797 4.02982 6.44441 4.88893 6.44441C5.74804 6.44441 6.44449 5.74797 6.44449 4.88885C6.44449 4.02974 5.74804 3.3333 4.88893 3.3333C4.02982 3.3333 3.33337 4.02974 3.33337 4.88885ZM9.5556 4.88885C9.5556 5.74797 10.252 6.44441 11.1112 6.44441C11.9702 6.44441 12.6667 5.74797 12.6667 4.88885C12.6667 4.02974 11.9702 3.3333 11.1112 3.3333C10.252 3.3333 9.5556 4.02974 9.5556 4.88885ZM11.1112 12.6666C10.252 12.6666 9.5556 11.9702 9.5556 11.1111C9.5556 10.252 10.252 9.55552 11.1112 9.55552C11.9702 9.55552 12.6667 10.252 12.6667 11.1111C12.6667 11.9702 11.9702 12.6666 11.1112 12.6666ZM3.33337 11.1111C3.33337 11.9702 4.02982 12.6666 4.88893 12.6666C5.74804 12.6666 6.44449 11.9702 6.44449 11.1111C6.44449 10.252 5.74804 9.55552 4.88893 9.55552C4.02982 9.55552 3.33337 10.252 3.33337 11.1111Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgStyle;
