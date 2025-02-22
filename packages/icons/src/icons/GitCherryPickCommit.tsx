import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGitCherryPickCommit = ({
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
			d='M11.3333 7.33329V6.66663C11.3333 5.93025 10.7364 5.33329 9.99999 5.33329H7.99999M7.99999 5.33329H5.99999C5.26361 5.33329 4.66666 5.93025 4.66666 6.66663V7.33329M7.99999 5.33329V2.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 13.3334C9.1046 13.3334 10 12.438 10 11.3334C10 10.2288 9.1046 9.33337 8 9.33337C6.8954 9.33337 6 10.2288 6 11.3334C6 12.438 6.8954 13.3334 8 13.3334Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 11.3334H2'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 11.3334H14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGitCherryPickCommit;
