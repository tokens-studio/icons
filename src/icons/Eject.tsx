import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEject = ({
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
			d='m3.333 9.333-.394-.307a.5.5 0 0 0 .394.807zm9.334 0v.5a.5.5 0 0 0 .394-.807zm-9.334.5h9.334v-1H3.333zm3.746-6.13-4.14 5.323.789.614 4.14-5.323zm5.982 5.323-4.14-5.323-.79.614 4.141 5.323zm-5.193-4.71a.167.167 0 0 1 .264 0l.789-.613c-.467-.6-1.375-.6-1.842 0zM3.333 11.5a.5.5 0 0 0 0 1zm9.334 1a.5.5 0 1 0 0-1zm-9.334 0h9.334v-1H3.333z'
		/>
	</svg>
);
export default SvgEject;
