import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHomeSecure = ({
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
			d='M9.33333 8.00004H9.6C9.82093 8.00004 10 8.17911 10 8.40004V10.2667C10 10.4876 9.82093 10.6667 9.6 10.6667H6.4C6.17909 10.6667 6 10.4876 6 10.2667V8.40004C6 8.17911 6.17909 8.00004 6.4 8.00004H6.66667M9.33333 8.00004V6.66671C9.33333 6.22226 9.06667 5.33337 8 5.33337C6.93333 5.33337 6.66667 6.22226 6.66667 6.66671V8.00004M9.33333 8.00004H6.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33325 5.33336L7.82105 2.08947C7.93365 2.03317 8.06618 2.03316 8.17878 2.08947L14.6666 5.33336'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3334 7.33337V12.6667C13.3334 13.4031 12.7365 14 12.0001 14H4.00008C3.2637 14 2.66675 13.4031 2.66675 12.6667V7.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgHomeSecure;
