import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUserBadgeCheck = ({
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
			d='M1.33333 13.3333V12.6667C1.33333 10.0893 3.42267 8 6 8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.5359 8.20904C10.9637 7.73924 11.7029 7.73924 12.1308 8.20904C12.3471 8.44651 12.6579 8.57524 12.9787 8.56024C13.6134 8.53057 14.1361 9.05331 14.1065 9.68804C14.0915 10.0088 14.2202 10.3196 14.4577 10.5359C14.9275 10.9638 14.9275 11.703 14.4577 12.1308C14.2202 12.3471 14.0915 12.6579 14.1065 12.9787C14.1361 13.6134 13.6134 14.1362 12.9787 14.1065C12.6579 14.0915 12.3471 14.2202 12.1308 14.4577C11.7029 14.9275 10.9637 14.9275 10.5359 14.4577C10.3196 14.2202 10.0088 14.0915 9.68799 14.1065C9.05326 14.1362 8.53053 13.6134 8.56019 12.9787C8.57519 12.6579 8.44646 12.3471 8.20899 12.1308C7.73919 11.703 7.73919 10.9638 8.20899 10.5359C8.44646 10.3196 8.57519 10.0088 8.56019 9.68804C8.53053 9.05331 9.05326 8.53057 9.68799 8.56024C10.0088 8.57524 10.3196 8.44651 10.5359 8.20904Z'
			stroke='currentColor'
		/>
		<path
			d='M10.2424 11.3332L10.9697 12.0605L12.4243 10.606'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.99999 8.00008C7.47273 8.00008 8.66666 6.80615 8.66666 5.33341C8.66666 3.86065 7.47273 2.66675 5.99999 2.66675C4.52723 2.66675 3.33333 3.86065 3.33333 5.33341C3.33333 6.80615 4.52723 8.00008 5.99999 8.00008Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgUserBadgeCheck;
