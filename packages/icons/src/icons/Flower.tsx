import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFlower = ({
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
			d='M8.99974 10.9997C10.1043 10.9997 10.9997 10.1043 10.9997 8.99969C10.9997 7.89516 10.1043 6.99969 8.99974 6.99969C7.8952 6.99969 6.99976 7.89516 6.99976 8.99969C6.99976 10.1043 7.8952 10.9997 8.99974 10.9997Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.66663 7.00002C9.66663 7.00002 10.3333 5.66669 10.3333 4.33335C10.3333 3.00002 8.99996 1.66669 8.99996 1.66669C8.99996 1.66669 7.66663 3.00002 7.66663 4.33335C7.66663 5.66669 8.33329 7.00002 8.33329 7.00002'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.99996 8.33335C6.99996 8.33335 5.66663 7.66669 4.33329 7.66669C2.99996 7.66669 1.66663 9.00002 1.66663 9.00002C1.66663 9.00002 2.99996 10.3334 4.33329 10.3334C5.66663 10.3334 6.99996 9.66669 6.99996 9.66669'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.66663 11C9.66663 11 10.3333 12.3333 10.3333 13.6667C10.3333 15 8.99996 16.3333 8.99996 16.3333C8.99996 16.3333 7.66663 15 7.66663 13.6667C7.66663 12.3333 8.33329 11 8.33329 11'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11 8.33335C11 8.33335 12.3333 7.66669 13.6667 7.66669C15 7.66669 16.3333 9.00002 16.3333 9.00002C16.3333 9.00002 15 10.3334 13.6667 10.3334C12.3333 10.3334 11 9.66669 11 9.66669'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.05722 7.11452C8.05722 7.11452 7.58581 5.70031 6.643 4.7575C5.7002 3.8147 3.81458 3.8147 3.81458 3.8147C3.81458 3.8147 3.81458 5.70031 4.75738 6.64312C5.7002 7.58593 7.11441 8.05735 7.11441 8.05735'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.11429 9.94281C7.11429 9.94281 5.70007 10.4142 4.75727 11.357C3.81445 12.2998 3.81445 14.1855 3.81445 14.1855C3.81445 14.1855 5.70007 14.1855 6.64288 13.2427C7.58569 12.2998 8.05707 10.8856 8.05707 10.8856'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.8857 9.94281C10.8857 9.94281 12.2999 10.4142 13.2427 11.357C14.1855 12.2998 14.1855 14.1855 14.1855 14.1855C14.1855 14.1855 12.2999 14.1855 11.3571 13.2427C10.4143 12.2998 9.94287 10.8856 9.94287 10.8856'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.94275 7.11452C9.94275 7.11452 10.4141 5.70031 11.3569 4.7575C12.2997 3.8147 14.1854 3.8147 14.1854 3.8147C14.1854 3.8147 14.1854 5.70031 13.2426 6.64312C12.2997 7.58593 10.8855 8.05735 10.8855 8.05735'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFlower;
