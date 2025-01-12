import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMusicNote = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M7.99999 10.6667V12.6667C7.99999 13.4031 7.40306 14 6.66666 14H5.99999C5.26361 14 4.66666 13.4031 4.66666 12.6667V12C4.66666 11.2636 5.26361 10.6667 5.99999 10.6667H7.99999ZM7.99999 10.6667V5.33333M7.99999 5.33333V2.66667L11.3333 2V4.66667L7.99999 5.33333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMusicNote;
