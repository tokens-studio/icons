import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFishing = ({
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
			d='M10.6667 4.66667C11.4031 4.66667 12 4.06971 12 3.33333C12 2.59695 11.4031 2 10.6667 2C9.93027 2 9.33333 2.59695 9.33333 3.33333C9.33333 4.06971 9.93027 4.66667 10.6667 4.66667ZM10.6667 4.66667C10.6667 4.66667 10.6667 8.72987 10.6667 11.3333C10.6667 15.3333 4 15.3333 4 11.3333V8.66667L5.33333 10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFishing;
