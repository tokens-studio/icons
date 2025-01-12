import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDatabaseScriptPlus = ({
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
			d='M14.6667 10.3333V6.66667M4 9.66667V5C4 3.89543 4.89543 3 6 3H9.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3281 3.66669H13.3281M13.3281 3.66669H15.3281M13.3281 3.66669V1.66669M13.3281 3.66669V5.66669'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00004 15H4.00004C2.52728 15 1.33337 13.8061 1.33337 12.3334C1.33337 10.8606 2.52728 9.66669 4.00004 9.66669H11.3334H12C10.5273 9.66669 9.33337 10.8606 9.33337 12.3334C9.33337 13.8061 10.5273 15 12 15C13.4728 15 14.6667 13.8061 14.6667 12.3334V10.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDatabaseScriptPlus;
