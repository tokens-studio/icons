import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGithubCircle = ({
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
			d='M7.99998 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6818 1.33337 7.99998 1.33337C4.31808 1.33337 1.33331 4.31814 1.33331 8.00004C1.33331 11.6819 4.31808 14.6667 7.99998 14.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.55551 12.6667V11.4247C9.57218 11.2183 9.54358 11.0109 9.47151 10.8161C9.39951 10.6214 9.28571 10.4438 9.13778 10.2952C10.5333 10.1437 12 9.62873 12 7.26593C11.9998 6.66171 11.7612 6.08067 11.3333 5.64307C11.5359 5.11447 11.5216 4.53019 11.2933 4.01159C11.2933 4.01159 10.7688 3.86013 9.55551 4.65207C8.53685 4.38325 7.46311 4.38325 6.44442 4.65207C5.23109 3.86013 4.70664 4.01159 4.70664 4.01159C4.47836 4.53019 4.46404 5.11447 4.66664 5.64307C4.23559 6.08392 3.99665 6.6702 3.99997 7.27887C3.99997 9.6244 5.46664 10.1394 6.86218 10.3081C6.71598 10.4553 6.6032 10.6307 6.53122 10.8231C6.45924 11.0155 6.42967 11.2204 6.44442 11.4247V12.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.44443 11.8012C5.11109 12.2223 3.99998 11.8012 3.33331 10.5029'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGithubCircle;
