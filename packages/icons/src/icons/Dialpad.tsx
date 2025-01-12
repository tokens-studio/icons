import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDialpad = ({
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
			d='M3.66659 3.33335C3.48249 3.33335 3.33325 3.18411 3.33325 3.00002C3.33325 2.81593 3.48249 2.66669 3.66659 2.66669C3.85068 2.66669 3.99992 2.81593 3.99992 3.00002C3.99992 3.18411 3.85068 3.33335 3.66659 3.33335Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.66659 6.66667C3.48249 6.66667 3.33325 6.51743 3.33325 6.33333C3.33325 6.14924 3.48249 6 3.66659 6C3.85068 6 3.99992 6.14924 3.99992 6.33333C3.99992 6.51743 3.85068 6.66667 3.66659 6.66667Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.66659 9.99998C3.48249 9.99998 3.33325 9.85071 3.33325 9.66665C3.33325 9.48258 3.48249 9.33331 3.66659 9.33331C3.85068 9.33331 3.99992 9.48258 3.99992 9.66665C3.99992 9.85071 3.85068 9.99998 3.66659 9.99998Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00008 3.33335C7.81601 3.33335 7.66675 3.18411 7.66675 3.00002C7.66675 2.81593 7.81601 2.66669 8.00008 2.66669C8.18415 2.66669 8.33341 2.81593 8.33341 3.00002C8.33341 3.18411 8.18415 3.33335 8.00008 3.33335Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00008 6.66667C7.81601 6.66667 7.66675 6.51743 7.66675 6.33333C7.66675 6.14924 7.81601 6 8.00008 6C8.18415 6 8.33341 6.14924 8.33341 6.33333C8.33341 6.51743 8.18415 6.66667 8.00008 6.66667Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00008 9.99998C7.81601 9.99998 7.66675 9.85071 7.66675 9.66665C7.66675 9.48258 7.81601 9.33331 8.00008 9.33331C8.18415 9.33331 8.33341 9.48258 8.33341 9.66665C8.33341 9.85071 8.18415 9.99998 8.00008 9.99998Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00008 13.3334C7.81601 13.3334 7.66675 13.1841 7.66675 13C7.66675 12.816 7.81601 12.6667 8.00008 12.6667C8.18415 12.6667 8.33341 12.816 8.33341 13C8.33341 13.1841 8.18415 13.3334 8.00008 13.3334Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.3333 3.33335C12.1493 3.33335 12 3.18411 12 3.00002C12 2.81593 12.1493 2.66669 12.3333 2.66669C12.5174 2.66669 12.6667 2.81593 12.6667 3.00002C12.6667 3.18411 12.5174 3.33335 12.3333 3.33335Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.3333 6.66667C12.1493 6.66667 12 6.51743 12 6.33333C12 6.14924 12.1493 6 12.3333 6C12.5174 6 12.6667 6.14924 12.6667 6.33333C12.6667 6.51743 12.5174 6.66667 12.3333 6.66667Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.3333 9.99998C12.1493 9.99998 12 9.85071 12 9.66665C12 9.48258 12.1493 9.33331 12.3333 9.33331C12.5174 9.33331 12.6667 9.48258 12.6667 9.66665C12.6667 9.85071 12.5174 9.99998 12.3333 9.99998Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDialpad;
