import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDesignNib = ({
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
			d='M11.783 7.60502L10.5128 11.4156C10.4715 11.5394 10.3725 11.6353 10.2473 11.6725L2.46239 13.9869C2.15219 14.0791 1.86659 13.784 1.96892 13.477L4.49651 5.89423C4.53327 5.78394 4.61619 5.69511 4.72369 5.65085L8.31473 4.17217C8.46407 4.11069 8.63573 4.14501 8.74993 4.25919L11.6863 7.19569C11.7935 7.30282 11.8309 7.46129 11.783 7.60502Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.19727 13.7344L6.43991 9.49176'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.8611 7.37049L13.7467 5.48485C14.2674 4.96415 14.2674 4.11993 13.7467 3.59923L12.3325 2.18501C11.8118 1.66432 10.9676 1.66432 10.4469 2.18501L8.56128 4.07063'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.85435 8.07751C7.46381 7.68697 6.83061 7.68697 6.44011 8.07751C6.04959 8.46804 6.04959 9.10124 6.44011 9.49171C6.83061 9.88224 7.46381 9.88224 7.85435 9.49171C8.24481 9.10124 8.24481 8.46804 7.85435 8.07751Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDesignNib;
