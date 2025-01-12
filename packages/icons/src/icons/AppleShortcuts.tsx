import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAppleShortcuts = ({
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
			d='M6.56833 9.75561L2.43433 7.12487C1.611 6.60095 1.611 5.39906 2.43433 4.87513L6.56833 2.2444C7.44186 1.68853 8.55813 1.68853 9.43166 2.2444L13.5657 4.87513C14.389 5.39907 14.389 6.60095 13.5657 7.12487L9.43166 9.75561C8.55813 10.3115 7.44186 10.3115 6.56833 9.75561Z'
			stroke='currentColor'
		/>
		<path
			d='M12.1905 8L13.5657 8.87513C14.389 9.39907 14.389 10.6009 13.5657 11.1249L9.43166 13.7556C8.55813 14.3115 7.44186 14.3115 6.56833 13.7556L2.43433 11.1249C1.611 10.6009 1.611 9.39907 2.43433 8.87513L3.80952 8'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgAppleShortcuts;
