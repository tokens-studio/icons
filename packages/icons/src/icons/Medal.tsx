import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMedal = ({
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
			d='M9.51445 6.96337L11.9999 1.33337M6.21067 7.08824L3.33325 1.33337M8.50759 6.69864L5.88992 1.33337M9.57325 1.33337L8.87992 3.00004M3.99992 10.6667C3.99992 12.8758 5.79078 14.6667 7.99992 14.6667C10.2091 14.6667 11.9999 12.8758 11.9999 10.6667C11.9999 8.45757 10.2091 6.66671 7.99992 6.66671C5.79078 6.66671 3.99992 8.45757 3.99992 10.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMedal;
