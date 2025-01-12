import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUser = ({
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
			d='M3.33325 13.3333V12.6667C3.33325 10.0893 5.42259 8 7.99992 8C10.5773 8 12.6666 10.0893 12.6666 12.6667V13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99992 8.00008C9.47265 8.00008 10.6666 6.80615 10.6666 5.33341C10.6666 3.86065 9.47265 2.66675 7.99992 2.66675C6.52716 2.66675 5.33325 3.86065 5.33325 5.33341C5.33325 6.80615 6.52716 8.00008 7.99992 8.00008Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgUser;
