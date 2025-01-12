import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHealthShield = ({
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
			d='M9.11111 10.6667H6.88885V9.11117H5.33331V6.88891H6.88885V5.33337H9.11111V6.88891H10.6666V9.11117H9.11111V10.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33332 12L2.0869 3.27501C2.03763 2.93015 2.26258 2.6083 2.60264 2.53273L7.71072 1.39759C7.90126 1.35526 8.09872 1.35526 8.28926 1.39759L13.3973 2.53273C13.7374 2.6083 13.9623 2.93015 13.9131 3.275L12.6667 12C12.6195 12.33 12.3333 14.3333 7.99999 14.3333C3.66666 14.3333 3.38046 12.33 3.33332 12Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgHealthShield;
