import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSendMail = ({
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
			d='M7 6L10 8L13 6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3 9H4.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.66663 7H4.33329'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.33337 5.00004V4.66671C4.33337 3.93033 4.93033 3.33337 5.66671 3.33337H14.3334C15.0698 3.33337 15.6667 3.93033 15.6667 4.66671V11.3334C15.6667 12.0698 15.0698 12.6667 14.3334 12.6667H5.66671C4.93033 12.6667 4.33337 12.0698 4.33337 11.3334V11'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgSendMail;
