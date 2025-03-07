import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGps = ({
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
			d='M15.6667 5.66663H14.1667C13.5223 5.66663 13 6.18896 13 6.83329C13 7.47763 13.5223 7.99996 14.1667 7.99996H15.1667C15.811 7.99996 16.3333 8.52229 16.3333 9.16663C16.3333 9.81096 15.811 10.3333 15.1667 10.3333H13'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 10.3333V8.46663M8 8.46663C8.31747 8.46663 9.14287 8.46663 9.90473 8.46663C10.3809 8.46663 11.3333 8.46663 11.3333 7.06663C11.3333 5.66663 10.3809 5.66663 9.90473 5.66663H8V8.46663Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33341 6.08485C4.95547 5.82123 4.49583 5.66663 4.00008 5.66663C2.71141 5.66663 1.66675 6.71129 1.66675 7.99996C1.66675 9.28863 2.71141 10.3333 4.00008 10.3333C5.28875 10.3333 6.33341 9.33329 6.33341 7.99996H4.33341'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGps;
