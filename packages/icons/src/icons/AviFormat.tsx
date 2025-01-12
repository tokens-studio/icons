import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAviFormat = ({
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
			d='M8 6L9 10L10 6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 10V6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.66669 4V2.4C2.66669 2.17909 2.84577 2 3.06669 2H12.9334C13.1543 2 13.3334 2.17909 13.3334 2.4V4'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M2.66669 12V13.6C2.66669 13.8209 2.84577 14 3.06669 14H12.9334C13.1543 14 13.3334 13.8209 13.3334 13.6V12'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M4 10V8M4 8V7C4 6.44771 4.44771 6 5 6C5.55229 6 6 6.44771 6 7V8M4 8H6M6 8V10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAviFormat;
