import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShortPantsPockets = ({
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
			d='M2.0401 3.76983C2.01858 3.53546 2.20307 3.33325 2.43843 3.33325H13.5616C13.7969 3.33325 13.9814 3.53546 13.9599 3.76983L13.1762 12.3032C13.1573 12.5091 12.9847 12.6666 12.7779 12.6666H10.0101C9.83434 12.6666 9.67914 12.5518 9.62767 12.3837L8.38247 8.31605C8.26701 7.93879 7.73301 7.93879 7.61754 8.31605L6.37233 12.3837C6.32087 12.5518 6.16566 12.6666 5.98985 12.6666H3.2221C3.01536 12.6666 2.84268 12.5091 2.82377 12.3032L2.42858 7.99992L2.0401 3.76983Z'
			stroke='currentColor'
		/>
		<path
			d='M2.66669 6.33325H3.66669C4.40307 6.33325 5.00002 5.7363 5.00002 4.99992V3.33325'
			stroke='currentColor'
		/>
		<path
			d='M13.6667 6.33325H12.3333C11.5969 6.33325 11 5.7363 11 4.99992V3.33325'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgShortPantsPockets;
