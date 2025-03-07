import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDonate = ({
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
			d='M10.6667 4.18652C10.6667 4.58747 10.5084 4.97257 10.2256 5.25743C9.57464 5.9134 8.94337 6.59739 8.26811 7.22955C8.11337 7.37235 7.86784 7.36715 7.71971 7.21789L5.77437 5.25743C5.18637 4.66485 5.18637 3.70819 5.77437 3.11561C6.36816 2.51721 7.33551 2.51721 7.92924 3.11561L7.99997 3.18687L8.07064 3.11565C8.35537 2.82859 8.74311 2.66669 9.14811 2.66669C9.55317 2.66669 9.94091 2.82858 10.2256 3.11561C10.5084 3.40051 10.6667 3.78559 10.6667 4.18652Z'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path
			d='M12 13.3333L14.5495 10.7838C14.6245 10.7088 14.6667 10.6071 14.6667 10.501V7C14.6667 6.44771 14.2189 6 13.6667 6C13.1144 6 12.6667 6.44771 12.6667 7V10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 10.6667L12.572 10.0946C12.6326 10.034 12.6666 9.95188 12.6666 9.86628C12.6666 9.74394 12.5975 9.63214 12.4881 9.57741L12.1928 9.42981C11.6796 9.17314 11.0596 9.27374 10.6538 9.67954L10.0572 10.2761C9.80709 10.5262 9.66663 10.8653 9.66663 11.2189V13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.00004 13.3333L1.45053 10.7838C1.37551 10.7088 1.33337 10.6071 1.33337 10.501V7C1.33337 6.44771 1.78109 6 2.33337 6C2.88566 6 3.33337 6.44771 3.33337 7V10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.00004 10.6667L3.42795 10.0946C3.36739 10.034 3.33337 9.95188 3.33337 9.86628C3.33337 9.74394 3.40248 9.63214 3.51188 9.57741L3.80715 9.42981C4.32047 9.17314 4.94043 9.27374 5.34625 9.67954L5.94285 10.2761C6.1929 10.5262 6.33337 10.8653 6.33337 11.2189V13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDonate;
