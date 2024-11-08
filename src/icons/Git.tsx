import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGit = ({
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
		<mask
			id='git_svg__a'
			width={16}
			height={16}
			x={0}
			y={0}
			maskUnits='userSpaceOnUse'
			style={{
				maskType: 'luminance',
			}}
		>
			<path fill='#fff' d='M16 0H0v16h16z' />
		</mask>
		<g
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			mask='url(#git_svg__a)'
		>
			<path d='M8 6.667a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M10.833 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8 6.667V10M5.5 3.167l1.5 1.5M8.833 6.5l1 1' />
			<path d='M7.717.95a.4.4 0 0 1 .566 0l6.768 6.767a.4.4 0 0 1 0 .566L8.282 15.05a.4.4 0 0 1-.566 0L.95 8.282a.4.4 0 0 1 0-.566z' />
		</g>
	</svg>
);
export default SvgGit;
