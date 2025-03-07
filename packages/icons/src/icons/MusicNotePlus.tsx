import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMusicNotePlus = ({
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
			d='M10.6667 6.66663H12.6667M12.6667 6.66663H14.6667M12.6667 6.66663V4.66663M12.6667 6.66663V8.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66665 10.6667V12.6667C4.66665 13.4031 4.06969 14 3.33331 14H2.66665C1.93027 14 1.33331 13.4031 1.33331 12.6667V12C1.33331 11.2636 1.93027 10.6667 2.66665 10.6667H4.66665ZM4.66665 10.6667V5.33333M4.66665 5.33333V2.66667L7.99998 2V4.66667L4.66665 5.33333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMusicNotePlus;
