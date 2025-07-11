import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgConfiguration = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 24}
		height={props.height || 24}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (24 / (Number(props.width) || 24))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M21 12.355V16.649C21 16.867 20.8819 17.0677 20.6914 17.1736L12.2914 21.8401C12.1102 21.9409 11.8898 21.9409 11.7086 21.8401L3.30859 17.1736C3.11812 17.0677 2.99998 16.867 2.99998 16.649L2.99997 12.355C2.99997 12.1371 3.11811 11.9364 3.30859 11.8305L11.7086 7.16389C11.8898 7.06321 12.1102 7.06321 12.2914 7.16389L20.6914 11.8305C20.8818 11.9364 21 12.1371 21 12.355Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.52921 12.2941L11.7094 16.8386C11.8906 16.9393 12.111 16.9393 12.2922 16.8386L20.5008 12.2783'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 21.4995V16.9995'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.9988 11.9995V1.99951M11.9988 1.99951L14.4988 4.49952M11.9988 1.99951L9.49875 4.49952'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgConfiguration;
