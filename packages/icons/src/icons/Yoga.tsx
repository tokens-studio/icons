import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgYoga = ({
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
			d='M9.71435 10.0024L10.2858 11.2324C10.2858 11.2324 12.8572 11.7786 12.8572 13.0775C12.8572 14 11.7143 14 11.7143 14H8.66675L7.16675 13.1667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.28568 10.0024L5.71425 11.2324C5.71425 11.2324 3.14282 11.7786 3.14282 13.0775C3.14282 14 4.28568 14 4.28568 14H5.66663L7.16665 13.1667L8.99998 12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 10.6174C2 10.6174 3.42857 10.3099 4.28571 10.0024C5.14286 5.6973 7.71427 6.0048 8 6.0048C8.28573 6.0048 10.8571 5.6973 11.7143 10.0024C12.5714 10.3099 14 10.6174 14 10.6174'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00008 4.66667C8.73648 4.66667 9.33341 4.06971 9.33341 3.33333C9.33341 2.59695 8.73648 2 8.00008 2C7.26368 2 6.66675 2.59695 6.66675 3.33333C6.66675 4.06971 7.26368 4.66667 8.00008 4.66667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgYoga;
