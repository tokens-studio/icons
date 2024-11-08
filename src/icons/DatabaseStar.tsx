import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDatabaseStar = ({
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
			d='M2.667 4v4s0 2 4.666 2S12 8 12 8V4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M7.333 2C12 2 12 4 12 4s0 2-4.667 2-4.666-2-4.666-2 0-2 4.666-2M7.333 14c-4.666 0-4.666-2-4.666-2V8M11.537 11.409l.606-1.285a.208.208 0 0 1 .38 0l.607 1.285 1.355.207c.174.027.243.25.117.379l-.98 1 .231 1.412c.03.181-.152.32-.308.234l-1.212-.667-1.212.667c-.155.085-.337-.053-.308-.234l.232-1.412-.98-1c-.127-.128-.057-.352.117-.379z'
		/>
	</svg>
);
export default SvgDatabaseStar;
