import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLeaderboard = ({
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
			d='M10 12.667H6V5.733c0-.22.18-.4.4-.4h3.2c.22 0 .4.18.4.4v6.934M10 3.333H6'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M13.6 12.667H10v-2.6c0-.221.18-.4.4-.4h3.2c.22 0 .4.179.4.4v2.2a.4.4 0 0 1-.4.4M6 12.667V8.733a.4.4 0 0 0-.4-.4H2.4a.4.4 0 0 0-.4.4v3.534c0 .22.18.4.4.4z'
		/>
	</svg>
);
export default SvgLeaderboard;
