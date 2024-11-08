import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLaptopCharging = ({
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
			strokeWidth={1.5}
			d='M2.133 9.482V2.667c0-.737.597-1.334 1.334-1.334h9.066c.737 0 1.334.597 1.334 1.334v6.815m-11.734 0h11.734m-11.734 0-.987 3.488a1.333 1.333 0 0 0 1.283 1.697H13.57c.885 0 1.524-.846 1.284-1.697l-.987-3.488'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m7.778 3.333-1.111 2h2.666l-1.11 2M7.333 12.667h1.334'
		/>
	</svg>
);
export default SvgLaptopCharging;
