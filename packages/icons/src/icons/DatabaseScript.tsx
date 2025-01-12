import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDatabaseScript = ({
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
			d='M14.6667 9.33333V4C14.6667 2.89543 13.7713 2 12.6667 2H6C4.89543 2 4 2.89543 4 4V8.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00004 14H4.00004C2.52728 14 1.33337 12.8061 1.33337 11.3334C1.33337 9.86062 2.52728 8.66669 4.00004 8.66669H11.3334H12C10.5273 8.66669 9.33337 9.86062 9.33337 11.3334C9.33337 12.8061 10.5273 14 12 14C13.4728 14 14.6667 12.8061 14.6667 11.3334V9.33335'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDatabaseScript;
