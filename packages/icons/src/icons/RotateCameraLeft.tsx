import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRotateCameraLeft = ({
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
			d='M1.36719 2.00004V4.99807C1.36719 5.18325 1.51731 5.33337 1.70249 5.33337C1.83577 5.33337 1.95571 5.25407 2.01309 5.13377C3.08491 2.88636 5.37802 1.33337 8.03387 1.33337C11.4907 1.33337 14.3331 3.96449 14.6676 7.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6676 14V11.002C14.6676 10.8168 14.5175 10.6666 14.3323 10.6666C14.199 10.6666 14.0791 10.746 14.0217 10.8662C12.9499 13.1136 10.6568 14.6666 8.00093 14.6666C4.54404 14.6666 1.70167 12.0355 1.36719 8.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 10.9333V6.26243C4 6.04152 4.17909 5.86243 4.4 5.86243H5.18189C5.31785 5.86243 5.44449 5.79337 5.51813 5.67909L6.48187 4.18335C6.55551 4.06906 6.68213 4 6.81813 4H9.18187C9.31787 4 9.44447 4.06906 9.51813 4.18335L10.4819 5.67909C10.5555 5.79337 10.6821 5.86243 10.8181 5.86243H11.6C11.8209 5.86243 12 6.04152 12 6.26243V10.9333C12 11.1543 11.8209 11.3333 11.6 11.3333H4.4C4.17909 11.3333 4 11.1543 4 10.9333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99996 9.33329C8.73636 9.33329 9.33329 8.73636 9.33329 7.99996C9.33329 7.26356 8.73636 6.66663 7.99996 6.66663C7.26356 6.66663 6.66663 7.26356 6.66663 7.99996C6.66663 8.73636 7.26356 9.33329 7.99996 9.33329Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgRotateCameraLeft;
