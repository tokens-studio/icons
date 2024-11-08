import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLinkSlash = ({
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
			d='M4.762 11.33q-.394 0-.762-.082c-1.527-.337-2.667-1.664-2.667-3.25 0-1.809 1.484-3.281 3.334-3.33M8.879 6.423a3.7 3.7 0 0 0-1.546-1.424'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.238 4.667q.394 0 .762.082c1.527.337 2.667 1.664 2.667 3.25 0 1.84-1.535 3.331-3.429 3.331h-1.143c-1.884 0-3.428-1.67-3.428-3.332 0 0 0-.665.333-.998M2 2l12 12'
		/>
	</svg>
);
export default SvgLinkSlash;
