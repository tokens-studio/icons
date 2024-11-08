import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPiggyBank = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9.667 5.667c-.52-.135-1.244-.334-1.824-.334-2.859 0-5.176 1.779-5.176 3.973 0 1.26.765 2.384 1.958 3.111l-.323 1.067a.4.4 0 0 0 .383.516H5.86a.4.4 0 0 0 .24-.08l.93-.698h1.624l.93.698a.4.4 0 0 0 .24.08h1.176a.4.4 0 0 0 .383-.516l-.323-1.067c.71-.433 1.27-1.007 1.606-1.667M9.667 5.667l3-1-.056 2.418L14 7.667V10l-1.284.667'
		/>
		<path
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.333 8.667a.333.333 0 1 1 0-.667.333.333 0 0 1 0 .667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M1.333 6.667s0 1.6 1.334 2'
		/>
		<path
			stroke='currentColor'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8.534 5.169q.131-.374.133-.793C8.667 3.064 7.622 2 6.333 2 5.045 2 4 3.064 4 4.376c0 .628.239 1.2.63 1.624'
		/>
	</svg>
);
export default SvgPiggyBank;
