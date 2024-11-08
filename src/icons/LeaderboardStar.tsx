import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLeaderboardStar = ({
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
			d='M10 14H6V8.4c0-.22.18-.4.4-.4h3.2c.22 0 .4.18.4.4z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M13.6 14H10v-1.933c0-.221.18-.4.4-.4h3.2c.22 0 .4.179.4.4V13.6a.4.4 0 0 1-.4.4M6 14v-3.267a.4.4 0 0 0-.4-.4H2.4a.4.4 0 0 0-.4.4V13.6c0 .221.18.4.4.4zM7.204 3.409l.606-1.285a.208.208 0 0 1 .38 0l.606 1.285 1.356.207c.174.027.243.25.117.379l-.98 1 .23 1.412c.03.181-.151.32-.307.234L8 5.974l-1.212.667c-.156.085-.338-.053-.308-.234l.232-1.413-.981-1c-.126-.127-.057-.351.117-.378z'
		/>
	</svg>
);
export default SvgLeaderboardStar;
