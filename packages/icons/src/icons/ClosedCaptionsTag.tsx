import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgClosedCaptionsTag = ({
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
			d='M1.66663 10V6C1.66663 3.79086 3.45749 2 5.66663 2H12.3333C14.5424 2 16.3333 3.79086 16.3333 6V10C16.3333 12.2091 14.5424 14 12.3333 14H5.66663C3.45749 14 1.66663 12.2091 1.66663 10Z'
			stroke='currentColor'
		/>
		<path
			d='M7.99996 6.66667L7.88556 6.55229C7.53195 6.19866 7.05234 6 6.55225 6C5.51085 6 4.66663 6.8442 4.66663 7.8856V8.1144C4.66663 9.1558 5.51085 10 6.55225 10C7.05234 10 7.53195 9.80133 7.88556 9.44773L7.99996 9.33333'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M13.3333 6.66667L13.2189 6.55229C12.8653 6.19866 12.3857 6 11.8856 6C10.8442 6 10 6.8442 10 7.8856V8.1144C10 9.1558 10.8442 10 11.8856 10C12.3857 10 12.8653 9.80133 13.2189 9.44773L13.3333 9.33333'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgClosedCaptionsTag;
