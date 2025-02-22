import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCommunity = ({
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
			d='M5.66675 12V11.3333C5.66675 9.4924 7.15913 8 9.00008 8C10.841 8 12.3334 9.4924 12.3334 11.3333V12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.66675 12V11.3333C1.66675 10.2287 2.56218 9.33331 3.66675 9.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M16.3333 12V11.3333C16.3333 10.2287 15.4379 9.33331 14.3333 9.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9 8C10.1046 8 11 7.1046 11 6C11 4.89543 10.1046 4 9 4C7.8954 4 7 4.89543 7 6C7 7.1046 7.8954 8 9 8Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.66659 9.33335C4.40297 9.33335 4.99992 8.73642 4.99992 8.00002C4.99992 7.26362 4.40297 6.66669 3.66659 6.66669C2.93021 6.66669 2.33325 7.26362 2.33325 8.00002C2.33325 8.73642 2.93021 9.33335 3.66659 9.33335Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.3333 9.33335C15.0697 9.33335 15.6667 8.73642 15.6667 8.00002C15.6667 7.26362 15.0697 6.66669 14.3333 6.66669C13.5969 6.66669 13 7.26362 13 8.00002C13 8.73642 13.5969 9.33335 14.3333 9.33335Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCommunity;
