import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGitFork = ({
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
			d='M11.3333 4.66667C12.0697 4.66667 12.6667 4.06971 12.6667 3.33333C12.6667 2.59695 12.0697 2 11.3333 2C10.5969 2 10 2.59695 10 3.33333C10 4.06971 10.5969 4.66667 11.3333 4.66667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66665 4.66667C5.40303 4.66667 5.99998 4.06971 5.99998 3.33333C5.99998 2.59695 5.40303 2 4.66665 2C3.93027 2 3.33331 2.59695 3.33331 3.33333C3.33331 4.06971 3.93027 4.66667 4.66665 4.66667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66665 14C5.40303 14 5.99998 13.4031 5.99998 12.6667C5.99998 11.9303 5.40303 11.3334 4.66665 11.3334C3.93027 11.3334 3.33331 11.9303 3.33331 12.6667C3.33331 13.4031 3.93027 14 4.66665 14Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66669 4.66663V11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3334 4.66663V5.33329C11.3334 6.99996 10 7.33329 10 7.33329L6.00002 8.66663C6.00002 8.66663 4.66669 8.99996 4.66669 10.6666V11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGitFork;
