import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShoppingBag = ({
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
			d='M12.8405 6.46397L13.7636 12.464C13.8879 13.2716 13.2629 14 12.4458 14H3.55408C2.7369 14 2.11199 13.2716 2.23625 12.464L3.15932 6.46397C3.2594 5.81352 3.81906 5.33337 4.47716 5.33337H11.5227C12.1808 5.33337 12.7405 5.81352 12.8405 6.46397Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33341 3.33333C9.33341 2.59695 8.73648 2 8.00008 2C7.26368 2 6.66675 2.59695 6.66675 3.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgShoppingBag;
