import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMouseScrollWheel = ({
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
			fill='currentColor'
			d='m8 3.333.354-.353a.5.5 0 0 0-.707 0zm0 5.334-.353.353a.5.5 0 0 0 .707 0zM6.313 4.313a.5.5 0 0 0 .707.707zm2.667.707a.5.5 0 1 0 .707-.707zM7.02 6.98a.5.5 0 1 0-.707.707zm2.667.707a.5.5 0 1 0-.707-.707zm-7.52-1.02v2.666h1V6.667zm11.666 2.666V6.667h-1v2.666zm-6.333-6v5.334h1V3.333zm.147-.353L6.313 4.313l.707.707 1.334-1.333zm0 .707L8.98 5.02l.707-.707L8.354 2.98zm.707 4.626L7.02 6.98l-.707.707L7.647 9.02zm0 .707 1.333-1.333-.707-.707-1.333 1.333zm5.48-2.353A5.833 5.833 0 0 0 8 .833v1a4.833 4.833 0 0 1 4.833 4.834zM8 15.167a5.833 5.833 0 0 0 5.833-5.834h-1A4.833 4.833 0 0 1 8 14.167zM2.167 9.333A5.833 5.833 0 0 0 8 15.167v-1a4.833 4.833 0 0 1-4.833-4.834zm1-2.666A4.833 4.833 0 0 1 8 1.833v-1a5.833 5.833 0 0 0-5.833 5.834z'
		/>
	</svg>
);
export default SvgMouseScrollWheel;
