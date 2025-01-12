import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCardReader = ({
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
			d='M3.33337 12.6667V2H12.6667V12.6667C12.6667 13.4031 12.0698 14 11.3334 14H4.66671C3.93033 14 3.33337 13.4031 3.33337 12.6667Z'
			stroke='currentColor'
		/>
		<path
			d='M3.33337 4H2.33337C1.78109 4 1.33337 3.55229 1.33337 3C1.33337 2.44771 1.78109 2 2.33337 2H13.6667C14.219 2 14.6667 2.44771 14.6667 3C14.6667 3.55229 14.219 4 13.6667 4H12.6667'
			stroke='currentColor'
		/>
		<path
			d='M10 2V14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCardReader;
