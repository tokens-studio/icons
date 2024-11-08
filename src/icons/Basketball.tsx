import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBasketball = ({
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
			d='M11.824 13.461A6.667 6.667 0 1 0 4.176 2.54a6.667 6.667 0 0 0 7.648 10.922M11.824 13.461 4.176 2.54'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M13.052 3.649c-2.514 3.93-5.673 6.142-10.869 7.61'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8.706 1.37c.276 3.494 2.262 6.33 5.765 8.233M1.529 6.397c3.188 1.453 5.174 4.29 5.765 8.232'
		/>
	</svg>
);
export default SvgBasketball;
