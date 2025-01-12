import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSkateboard = ({
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
			d='M4.33337 10.6667C4.88566 10.6667 5.33337 10.219 5.33337 9.66675C5.33337 9.11448 4.88566 8.66675 4.33337 8.66675C3.78109 8.66675 3.33337 9.11448 3.33337 9.66675C3.33337 10.219 3.78109 10.6667 4.33337 10.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33337 6L3.55559 6.66667H12.4445L14.6667 6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.6666 10.6667C12.2189 10.6667 12.6666 10.219 12.6666 9.66675C12.6666 9.11448 12.2189 8.66675 11.6666 8.66675C11.1144 8.66675 10.6666 9.11448 10.6666 9.66675C10.6666 10.219 11.1144 10.6667 11.6666 10.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSkateboard;
