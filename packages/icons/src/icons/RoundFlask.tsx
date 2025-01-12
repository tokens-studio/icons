import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRoundFlask = ({
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
			d='M12.6667 10H3.33337'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 2.66663H5.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.99996 3V5.83539C9.99996 6.34419 10.2966 6.7988 10.7188 7.08273C12.191 8.07253 13.3333 9.74487 13.3333 11.6411C13.3333 12.1825 13.2576 12.7057 13.1164 13.1999C12.9734 13.7005 12.4866 14 11.966 14H4.03393C3.51337 14 3.02648 13.7005 2.88353 13.1999C2.74237 12.7057 2.66663 12.1825 2.66663 11.6411C2.66663 9.74487 3.80889 8.07253 5.28111 7.08273C5.70333 6.7988 5.99996 6.34419 5.99996 5.83539V3'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66663 4.6733L8.67329 4.66589'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33337 1.34005L7.34004 1.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgRoundFlask;
