import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSuggestion = ({
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
			d='M2 2.4C2 2.17909 2.17909 2 2.4 2H13.6C13.8209 2 14 2.17909 14 2.4V11.6C14 11.8209 13.8209 12 13.6 12H10.8395C10.7292 12 10.6238 12.0455 10.5482 12.1259L8.29127 14.5239C8.13333 14.6917 7.86667 14.6917 7.70873 14.5239L5.45179 12.1259C5.37619 12.0455 5.27079 12 5.16051 12H2.4C2.17909 12 2 11.8209 2 11.6V2.4Z'
			stroke='currentColor'
		/>
		<path
			d='M7.99992 4.66675L8.95018 6.38313L10.6666 7.33341L8.95018 8.28368L7.99992 10.0001L7.04965 8.28368L5.33325 7.33341L7.04965 6.38313L7.99992 4.66675Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSuggestion;
