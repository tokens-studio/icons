import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgThumbsUp = ({
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
			d='M10.9815 13.3332H2.73325C2.51234 13.3332 2.33325 13.1542 2.33325 12.9332V6.39991C2.33325 6.179 2.51234 5.99991 2.73325 5.99991H4.57833C5.04669 5.99991 5.48069 5.75418 5.72165 5.35257L7.52859 2.34098C7.91852 1.69116 8.83685 1.62939 9.31025 2.22115C9.53338 2.50008 9.60532 2.87081 9.50265 3.21295L8.82105 5.48497C8.74405 5.74162 8.93625 5.99991 9.20419 5.99991H12.2543C13.1334 5.99991 13.7719 6.83591 13.5406 7.68404L12.2679 12.3507C12.1097 12.9308 11.5828 13.3332 10.9815 13.3332Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M4.66675 13.3333V6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgThumbsUp;
