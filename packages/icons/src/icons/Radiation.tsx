import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRadiation = ({
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
			d='M11.3334 13.7743C10.3528 14.3415 9.21437 14.6662 8.00011 14.6662C6.78577 14.6662 5.64733 14.3415 4.66675 13.7743L6.66677 10.6666C6.66677 10.6666 7.33344 10.9333 8.00011 10.9333C8.66677 10.9333 9.33344 10.6666 9.33344 10.6666L11.3334 13.7743Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3316 2.22595C12.3132 2.79154 13.1636 3.61515 13.7707 4.66676C14.3778 5.71837 14.6659 6.86665 14.665 7.99945L10.9737 7.82125C10.9737 7.82125 10.8713 7.11051 10.538 6.53319C10.2046 5.95583 9.64038 5.51182 9.64038 5.51182L11.3316 2.22595Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33228 7.99955C1.33132 6.86675 1.6194 5.71849 2.22655 4.66689C2.8337 3.61528 3.68408 2.79167 4.66561 2.22607L6.3569 5.51194C6.3569 5.51194 5.79262 5.95596 5.45929 6.53331C5.12596 7.11069 5.02356 7.82135 5.02356 7.82135L1.33228 7.99955Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00008 9.33282C7.26368 9.33282 6.66675 8.73588 6.66675 7.99948C6.66675 7.26308 7.26368 6.66614 8.00008 6.66614C8.73641 6.66614 9.33341 7.26308 9.33341 7.99948C9.33341 8.73588 8.73641 9.33282 8.00008 9.33282Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgRadiation;
