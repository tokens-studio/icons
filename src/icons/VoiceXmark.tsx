import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgVoiceXmark = ({
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
			d='M8 2v10.667M5.333 5.333v4M13.333 6v2.667M2.667 6v2.667M10.667 4v5.333M10.748 14.243l1.414-1.414m0 0 1.414-1.415m-1.414 1.415-1.414-1.415m1.414 1.415 1.414 1.414'
		/>
	</svg>
);
export default SvgVoiceXmark;
