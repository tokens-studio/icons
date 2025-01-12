import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGolf = ({
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
			d='M8 11.9999V7.99995M8 7.99995V2.27323C8 1.98606 8.2936 1.79246 8.5576 1.90558L14.1869 4.31814C14.5033 4.45372 14.5121 4.89898 14.2013 5.04695L8 7.99995Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00004 14.6667C10.5774 14.6667 12.6667 13.622 12.6667 12.3333C12.6667 11.0447 10.5774 10 8.00004 10C5.42271 10 3.33337 11.0447 3.33337 12.3333C3.33337 13.622 5.42271 14.6667 8.00004 14.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGolf;
