import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGitPullRequest = ({
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
			d='M12 14C12.7364 14 13.3334 13.4031 13.3334 12.6667C13.3334 11.9303 12.7364 11.3334 12 11.3334C11.2636 11.3334 10.6667 11.9303 10.6667 12.6667C10.6667 13.4031 11.2636 14 12 14Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.00002 4.66667C4.7364 4.66667 5.33335 4.06971 5.33335 3.33333C5.33335 2.59695 4.7364 2 4.00002 2C3.26364 2 2.66669 2.59695 2.66669 3.33333C2.66669 4.06971 3.26364 4.66667 4.00002 4.66667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.00002 14C4.7364 14 5.33335 13.4031 5.33335 12.6667C5.33335 11.9303 4.7364 11.3334 4.00002 11.3334C3.26364 11.3334 2.66669 11.9303 2.66669 12.6667C2.66669 13.4031 3.26364 14 4.00002 14Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 4.66663V11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 11.3334V4.66671C12 4.66671 12 3.33337 10.6667 3.33337H8.66669'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.0003 5.00008L8.33368 3.33341L10.0003 1.66675'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGitPullRequest;
