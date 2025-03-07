import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgReceivePounds = ({
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
			d='M14.0001 8.00004H8.66675M8.66675 8.00004L11.2267 5.33337M8.66675 8.00004L11.2267 10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66675 8.66663C4.2223 9.77776 3.55563 10.8888 2.66675 11.3333H6.88895C6.88895 11.3333 7.55561 11.3333 8.00008 10.8888'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.44445 8.66663H2'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33325 6.66663C7.33325 5.56206 6.43782 4.66663 5.33325 4.66663C4.22869 4.66663 3.33325 5.56206 3.33325 6.66663C3.33325 7.77123 4.22869 8.66663 5.33325 8.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgReceivePounds;
