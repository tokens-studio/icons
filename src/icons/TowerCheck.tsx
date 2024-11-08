import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTowerCheck = ({
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
			d='m8.667 12.667 2 2L14 11.333M6 14.667H4.667a1.333 1.333 0 0 1-1.334-1.334V7.454a.4.4 0 0 0-.067-.222L2.067 5.434A.4.4 0 0 1 2 5.212V1.733c0-.22.18-.4.4-.4h1.2c.22 0 .4.18.4.4v1.2c0 .221.18.4.4.4h1.867a.4.4 0 0 0 .4-.4v-1.2c0-.22.179-.4.4-.4h1.866c.221 0 .4.18.4.4v1.2c0 .221.18.4.4.4H11.6a.4.4 0 0 0 .4-.4v-1.2c0-.22.18-.4.4-.4h1.2c.22 0 .4.18.4.4v3.48a.4.4 0 0 1-.067.221l-1.2 1.798a.4.4 0 0 0-.066.222V9'
		/>
	</svg>
);
export default SvgTowerCheck;
