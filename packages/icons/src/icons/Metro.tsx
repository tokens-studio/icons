import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMetro = ({
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
			d='M9.33331 10.6733L9.33998 10.6659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66669 10.6733L6.67335 10.6659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6666 8.00004V10C14.6666 11.841 13.1742 13.3334 11.3333 13.3334H4.66665C2.8257 13.3334 1.33331 11.841 1.33331 10V8.00004C1.33331 4.31814 4.31808 1.33337 7.99998 1.33337C11.6818 1.33337 14.6666 4.31814 14.6666 8.00004Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 7.99996V9.99996C12 11.8409 10.5076 13.3333 8.66667 13.3333H7.33333C5.49239 13.3333 4 11.8409 4 9.99996V7.99996C4 6.15901 5.49239 4.66663 7.33333 4.66663H8.66667C10.5076 4.66663 12 6.15901 12 7.99996Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.00002 13.3334L5.66669 15'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M9 13.3334L10.3333 15'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M11 13.3334L12.3333 15'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M5.00002 13.3334L3.66669 15'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M7.85715 6.66663H8.14289C8.80035 6.66663 9.33335 7.19963 9.33335 7.85709C9.33335 7.93603 9.26942 7.99996 9.19049 7.99996H6.80955C6.73062 7.99996 6.66669 7.93603 6.66669 7.85709C6.66669 7.19963 7.19969 6.66663 7.85715 6.66663Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMetro;
